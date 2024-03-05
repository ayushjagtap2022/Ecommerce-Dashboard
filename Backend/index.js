const express = require("express");
const cors = require("cors");
const app = express();
const model = require("./mongo/Schema");
const products = require("./mongo/product");
const JWT = require("jsonwebtoken");
const jwtKey = process.env.JWT_TOKEN;
app.use(cors());
app.use(express.json());
require("dotenv").config();
require("./mongo/Uri");
app.post("/register", async (req, res) => {
  try {
    let instance = new model(req.body);
    let result = await instance.save();
    result = result.toObject();
    delete result.password;
    let token = JWT.sign({ result }, jwtKey, { algorithm: "HS256" });
    res.send({ result, auth: token });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

app.get("/register", async (req, res) => {
  let result = await model.find().select("-password");
  res.send(result);
});
app.post("/login", async (req, res) => {
  const Info = await model.findOne(req.body).select("-password");
  if (req.body.email && req.body.password) {
    if (Info) {
      try {
        let token = JWT.sign({ Info }, jwtKey, { algorithm: "HS256" });
        res.send({ Info, auth: token });
      } catch (error) {
        res.status(500).send({ Error: error });
      }
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});
app.post("/addproduct", verifyToken, async (req, res) => {
  const instance = new products(req.body);
  const save = await instance.save();
  res.send(save);
});
app.get("/listproducts", verifyToken, async (req, res) => {
  const instance = await products.find({});
  if (instance.length - 1 >= 0) {
    res.send(instance);
  } else {
    res.send({ error: "no products found" });
  }
});
app.delete("/deleteproducts/:id", verifyToken, async (req, res) => {
  const instance = await products.deleteOne({ _id: req.params.id });
  res.send(instance);
});
app.get("/updateproducts/:id", verifyToken, async (req, res) => {
  const resp = await products.findOne({ _id: req.params.id });
  if (resp) {
    res.send(resp);
  } else {
    res.send({ res: "No user found" });
  }
});
app.put("/updateproducts/:id", verifyToken, async (req, res) => {
  const resp = await products.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  if (resp) {
    res.send(resp);
  } else {
    res.send({ res: "No user found" });
  }
});
app.get("/searchproducts/:key", verifyToken, async (req, res) => {
  const resp = await products.find({
    $or: [
      { Name: { $regex: req.params.key } },
      { Company: { $regex: req.params.key } },
      { Category: { $regex: req.params.key } },
    ],
  });

  res.send(resp);
});
function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    JWT.verify(token, jwtKey, (err, verify) => {
      if (err) {
        res.status(401).send({ Error: "Unauthorized Token" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ Error: "Plzz Enter Authorized Token" });
  }
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});

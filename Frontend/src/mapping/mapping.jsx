export const items = [
  {
    id: 1,
    item: "Apple",
    img: "/img/flower.jpg",
  },
  {
    id: 2,
    item: "Apple",
    img: "/img/flower.jpg",
  },
  {
    id: 3,
    item: "Mango",
    img: "/img/flower.jpg",
  },
  {
    id: 4,
    item: "Apple",
    img: "/img/flower.jpg",
  },
  { 
    id: 5,
    item: "Apple",
    img: "/img/flower.jpg",
  },
];
export const items2 = [
    {
      id: 1,
      item: "Apple",
      img: "/img/flower.jpg",
    },
    {
      id: 2,
      item: "Apple",
      img: "/img/flower.jpg",
    },
    {
      id: 3,
      item: "Mango",
      img: "/img/flower.jpg",
    },
    {
      id: 4,
      item: "Apple",
      img: "/img/flower.jpg",
    },
    { 
      id: 5,
      item: "Apple",
      img: "/img/flower.jpg",
    },
  ];
  export const Api = async () =>{
    let schema = {"user":user,"password":password,"email":email};
   let result = await fetch('mongodb+srv://ayushjagtap2022:Ayush%4005@databasecluster.zh2kvdf.mongodb.net/register',{
    method:'POST',
    body:JSON.stringify(schema),
    headers:{
      'Content-Type':'application/json',
    }})
        const res =  await result.json()
  localStorage.setItem("User",JSON.stringify(res)) 
 navigate('/')
}
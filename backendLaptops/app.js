const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const puerto=3003;



app.delete("/laptops/:idParam",(request,response)=>{
  const id=request.params.idParam;
  console.log(id);
  response.send({id:id})
})
app.use(express.json());

app.put("/laptops/:idParam", (req, resp) => {
  const body = req.body; 
  //console.log(body); 
  resp.send(body); 
});

app.get("/laptops",(request,responde)=>{
  const laptops=[
    {id:100,marca:"Lenovo",procesador:"Intel core i5",memoria:"16 GB", disco:"1 TB"},
    {id:4,marca:"HP",procesador:"Intel core i7",memoria:"32 GB", disco:"1 TB"},
    {id:2,marca:"Asus",procesador:"Intel core i5",memoria:"16 GB", disco:"1 TB"},
    {id:1030,marca:"Chino",procesador:"Intel core i5",memoria:"16 GB", disco:"1 TB"},
    {id:5,marca:"Prueba",procesador:"Intel core i5",memoria:"16 GB", disco:"1 TB"},
    {id:19,marca:"Lenovo",procesador:"Intel core i5",memoria:"16 GB", disco:"1 TB"},

  ];
  responde.send(laptops);
});

app.get("/laptops/:idParam",(request,responde)=>{
  const laptops=[
    {id:100,marca:"Lenovo",procesador:"Intel core i5",memoria:"16 GB", disco:"1 TB"},
    {id:4,marca:"HP",procesador:"Intel core i7",memoria:"32 GB", disco:"1 TB"},
  ];
  const id=parseInt(request.params.idParam);
  console.log("Ingresa a get");
  console.log(id);
  const laptopEncontrada = laptops.find((laptop) => laptop.id === id);

  responde.send(laptopEncontrada);
})
  

app.post("/laptops",(request,response)=>{
  request.body.id=100;
  response.send(request.body);
});

//////////
app.use(bodyParser.json());
////////
/////////////
app.listen(puerto,()=>{
  console.log("Servidor levantado");
});


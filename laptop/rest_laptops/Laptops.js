const IP="10.0.22.134"
const PORT="3003"
const URL="http://"+IP+":"+PORT+"/"
 export const getAllLaptops=(fnRefreshList)=>{
  console.log("entra al getAllLaptops")
  fetch(
    URL+"laptops"
  ).then(
    (response)=>{
      return response.json()
    }
  ).then(
    (body)=>{
      //console.log(body)
      fnRefreshList(body);
    }
  )
}

export const saveLaptopRest=(laptop,fnShowMessage)=>{
  const config={
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      marca:laptop.marca,
      precesador:laptop.procesador,
      memoria:laptop.memoria,
      disco:laptop.disco
    })
  }
  fetch(
    URL+"laptops",config
  ).then(
    (response)=>{
      return response.json();
    }
  ).then(
    (body)=>{
      fnShowMessage();
      console.log(body);
    }
  )
}

export const upDateLaptopRest=(laptop,fnShowMessage)=>{
  const config={
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      id:laptop.id,
      marca:laptop.marca,
      precesador:laptop.procesador,
      memoria:laptop.memoria,
      disco:laptop.disco
    })
  }
  fetch(
    URL+"laptops/"+laptop.id,config
  ).then(
    (response)=>{
      return response.json();
    }
  ).then(
    (body)=>{
      fnShowMessage();
      console.log(body);
    }
  )
}
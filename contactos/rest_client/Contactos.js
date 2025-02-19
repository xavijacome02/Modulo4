const IP="10.0.30.163"
const PORT="3001"
const URL="http://"+IP+":"+PORT+"/"
 export const getAllContacts=(fnRefreshList)=>{
  console.log("entra al getAllContacts")
  fetch(
    URL+"contactos"
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

export const saveContactsRest=(contact,fnShowMessage)=>{
  const config={
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      nombre:contact.name,
      apellido:contact.surName,
      celular:contact.phoneNumber
    })
  }
  fetch(
    URL+"contactos",config
  ).then(
    (response)=>{
      return response.json();
    }
  ).then(
    (body)=>{
      fnShowMessage("Se ha creado el contacto");
      console.log(body);
    }
  )
}


export const upDateContactsRest=(contact,fnShowMessage)=>{
  const config={
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      id:contact.id,
      nombre:contact.name,
      apellido:contact.surName,
      celular:contact.phoneNumber
    })
  }
  fetch(URL+"contactos/"+contact.id,config)
  .then(
    (response)=>{
      return response.json();
    }
  ).then(
    (body)=>{
      fnShowMessage("Contacto actualizado");
      console.log(body);
    }
  )
}


export const deleteContactRest=(contact,fnShowMessage)=>{
  const config={
    method:"DELETE",
  }
  fetch(URL+"contactos/"+contact.id,config)
  .then(
    (response)=>{
      return response.json();
    }
  ).then(
    (body)=>{
      fnShowMessage("Se ha eliminado el contacto");
      console.log(body);
    }
  )
}
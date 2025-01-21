const IP="192.168.0.201"
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
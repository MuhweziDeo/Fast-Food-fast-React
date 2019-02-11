export baseURL="https://fast-foods-api-main.herokuapp.com/"

export const postData=async(url,token,data)=>{
  const response = await fetch(url,{
    method:"POST",
    body:JSON.stringfy(data),
    headers:{
      "content-type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  })
  const responseData=await response.json()
  return responseData
}


export const getData=async(url,token)=>{
  const response = await fetch(url,{
    method:"GET",
    headers:{
      "Authorization":`Bearer ${token}`
    }
  })
  const responseData=await response.json()
  return responseData
}

export const updateData=async(url,token,data)=>{
  const response = await fetch(url,{
    method:"PATCH",
    body:JSON.stringfy(data),
    headers:{
      "content-type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  })
  const responseData=await response.json()
  return responseData
}

export const deleteData=async(url,token)=>{
  const response = await fetch(url,{
    method:"POST",
    headers:{
      "Authorization":`Bearer ${token}`
    }
  })
  const responseData=await response.json()
  return responseData
}

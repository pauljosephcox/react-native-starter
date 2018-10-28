export async function APIPost(path,body){
  return fetch(path,{
    method: 'POST',
    body: JSON.stringify(body)
  })
}

export async function APIGet(path,body){
  return fetch(path,{
    method: 'GET',
  })
}

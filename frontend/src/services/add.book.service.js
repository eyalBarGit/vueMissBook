import Axios from "axios"

async function getGoogleBooksList(filterByName) {
  if (!filterByName) return
  let {data} = await Axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${filterByName}`)
  return data.items
}

export default {
  getGoogleBooksList
}
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://movies-website-mk20076466.herokuapp.com'
  })
}

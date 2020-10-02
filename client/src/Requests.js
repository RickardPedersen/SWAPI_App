import axios from 'axios'
const url = 'https://swapi.dev/api/people/?page='

class Requests {
    static async getCharacters(page = 1) {
        try {
            const res = await axios.get(`${url}${page}`)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }
}

export default Requests

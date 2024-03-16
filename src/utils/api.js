import axios from 'axios'

export const API_URL = 'https://jsonplaceholder.typicode.com'

const fetcher = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        // Check if response status is not in the 200 range
        if (response.status < 200 || response.status >= 300) {
            throw new Error(`Request failed with status ${response.status}`)
        }

        // Return data if request is successful
        return response.data
    } catch (error) {
        // Throw the error to be caught by the caller
        throw error
    }
}

export default fetcher

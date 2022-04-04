import axios from 'axios'

export async function randomAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice")
    return response;
}

export async function randomSearch(input) {
    const answer = await axios.get(`https://api.adviceslip.com/advice/search/${input}`)
    console.log(answer)
    return answer;
}
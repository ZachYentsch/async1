export const hpApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=20&type=multiple',
    timeout: 3000
})
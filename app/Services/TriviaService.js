import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { hpApi } from "./AxiosService.js";
// hpApi
// Trivia
// ProxyState

class TriviaService {
    async getAllTrivia() {
        let res = await hpApi.get('')
        console.log(res.data)
        // res.data.results = res.data.results.filter(q => q.diff == 'easy')
        let questions = res.data.results.map(q => new Trivia(q))
        console.log(questions)
        ProxyState.trivia = questions
    }

}

export const triviaService = new TriviaService()
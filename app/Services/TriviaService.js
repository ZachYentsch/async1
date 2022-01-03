import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { hpApi } from "./AxiosService.js";
hpApi
Trivia
ProxyState

class TriviaService {
    async getAllTrivia() {
        let res = await hpApi.get('')
        console.log(res.data)
        res.data = res.data.filter(q => q.diff)
        let questions = res.data.results.map(q => new Questions(q))
        console.log(questions)
        ProxyState.questions = questions
    }

}

export const triviaService = new TriviaService()
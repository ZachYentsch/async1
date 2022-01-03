import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { generateId } from "../Utils/generateId.js";
import { hpApi } from "./AxiosService.js";
// hpApi
// Trivia
// ProxyState

class TriviaService {
    async getAllTrivia() {
        let res = await hpApi.get('')
        // res.data.results = res.data.results.filter(q => q.difficulty == 'easy')
        let questions = res.data.results.map(q => new Trivia(q))
        console.log(questions)
        ProxyState.trivia = questions
    };

    // answers = let s = 0;
    // answers.map(i => {
    //     i[generateId] = i;
    //     i++
    // } );

}

export const triviaService = new TriviaService()
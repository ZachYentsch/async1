import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";

function _drawTrivia() {
    let trivia = ProxyState.trivia
    let template = ''
    trivia.forEach(t => template += t.Template)
    document.getElementById('card').innerHTML = template
}
export class TriviaController {
    constructor() {
        ProxyState.on('trivia', _drawTrivia)

        triviaService.getAllTrivia()
    }
}
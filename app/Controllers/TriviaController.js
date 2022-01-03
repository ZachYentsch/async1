import { ProxyState } from "../AppState";
import { triviaService } from "../Services/TriviaService";
// triviaService
// ProxyState

export class TriviaController {
    constructor() {
        ProxyState.on('trivia', _drawTrivia)
    }
}
import { TriviaController } from "./Controllers/TriviaController.js";


class App {
  TriviaController = new TriviaController();
}

window["app"] = new App();

import { TriviaController } from "./Controllers/TriviaController";

// TriviaController

class App {
  TriviaController = TriviaController();
}

window["app"] = new App();

export class Trivia {
    constructor(data) {
        this.name = data.question
        this.answers = data.incorrect_answers && data.correct_answers
        this.diff = data.difficulty
    }

    get Template() {
        return `
        <div class="col-6 p-3">
        <div class="bg-dark rounded p-2">
          <h3 class="text-center text-align text-primary">${this.name}</h3>
          <ul class="text-center mt-2 text-primary">
            <li>${this.answers}</li>
          </ul>
        </div>
      </div>
        `
    }
}

// "category": "Mythology",
// "type": "multiple",
// "difficulty": "easy",
// "question": "Who was the only god from Greece who did not get a name change in Rome?",
// "correct_answer": "Apollo",
// "incorrect_answers": [
//   "Demeter",
//   "Zeus",
//   "Athena"
import { generateId } from "../Utils/generateId.js"

export class Trivia {
    constructor(data) {
        this.name = data.question
        this.answers = [...data.incorrect_answers, data.correct_answer]
        this.diff = data.difficulty
        this.id = generateId()
    }

    get Template() {
        return `
        <div class="col-6 p-3">
        <div class="bg-dark rounded p-2">
          <h3 class="text-center text-align text-primary">${this.name}</h3>
          <form class="text-center mt-2 text-primary">
  <input type="checkbox" id="AnsA" name="AnsA" value="A">
  <label for="AnsA">${this.answers}</label><br>
  <input type="checkbox" id="AnsB" name="AnsB" value="B">
  <label for="AnsB">${this.answers}</label><br>
  <input type="checkbox" id="AnsC" name="AnsC" value="C">
  <label for="AnsC">${this.answers}</label>
  <input type="checkbox" id="AnsD" name="AnsD" value="D">
  <label for="AnsD">${this.answers}</label>
</form>
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
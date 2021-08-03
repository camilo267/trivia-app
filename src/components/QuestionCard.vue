<template>
  <v-card class="trivia-container my-0 py-0">
    <v-overlay :value="endOfTrivia">
      <p class="font-weight-black">Score: {{ score }}</p>
      <!-- <v-btn color="orange lighten-2" @click="done"> Done </v-btn> -->
      <router-link to="/" class=""
        ><v-btn color="orange lighten-2" @click="done">
          Done
        </v-btn></router-link
      >
    </v-overlay>
    <v-card class="mx-auto my-12 py" elevation="18">
      <v-container class="d-flex flex-row-reverse my-0">
        <v-card-text class="score font-weight-black"
          >Score: {{ score }}</v-card-text
        >
      </v-container>
      <v-progress-linear
        v-model="scoreBar"
        height="20"
        rounded
        class="progress-bar"
      >
      </v-progress-linear>
      <v-card-title>{{ currenQuestion.question }}</v-card-title>

      <v-divider class="mx-4 pb-10"></v-divider>

      <v-container
        class="d-flex flex-column"
        column
        v-for="(question, item) in currenQuestion.choices"
        :key="item"
        @click="selected(question, item)"
      >
        <v-chip class="my-0" ref="optionChosen">{{ question }}</v-chip>
      </v-container>
      <v-card-actions class="d-flex flex-column justify-center">
        <span class="card-line-steps"></span>
        <span
          >{{ questionCounter }}/{{ questions.length }}</span
        ></v-card-actions
      >
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      endOfTrivia: false,
      questionCounter: 0,
      itemsRef: [],
      canClick: true,
      score: 0,
      scoreBar: 100,
      currenQuestion: {
        question: "",
        correct_answer: 0,
        choices: [],
      },
      questions: [],
    };
  },

  // Methods / Functions

  methods: {
    async getQuestionsFromServer() {
      const questionsArray = [];
      const response = await fetch(
        "https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=multiple"
      );
      const { results } = await response.json();
      results.map((ele) => {
        let question = {
          question: ele.question,
          correct_answer: "",
          choices: [],
        };
        let choices = ele.incorrect_answers;
        question.correct_answer = Math.floor(Math.random() * 4 + 1);
        choices.splice(question.correct_answer - 1, 0, ele.correct_answer);
        question.choices = choices;
        questionsArray.push(question);
      });
      this.questions = questionsArray;
      this.loadQuestion();
      this.countDownTimer();
    },

    loadQuestion() {
      //Check if there are more questions
      this.canClick = true; //Enable click again
      if (this.questions.length > this.questionCounter) {
        // Load question
        this.currenQuestion = this.questions[this.questionCounter];
        this.questionCounter++;
        this.scoreBar = 102;
      } else {
        // No more questions
        // console.log("Out of questions");
        this.endOfTrivia = true;
        this.scoreBar = 0;
      }
    },

    clearSelected(chip, chipRigth) {
      setTimeout(() => {
        chip.classList.remove("question-correct");
        chip.classList.remove("question-incorrect");
        chipRigth.classList.remove("question-correct-fail");
        this.loadQuestion();
      }, 1000);
    },

    selected(question, item) {
      if (this.canClick) {
        const chipSelected = this.$refs.optionChosen[item].$el;
        const chipRigth =
          this.$refs.optionChosen[this.currenQuestion.correct_answer - 1].$el;
        if (this.currenQuestion.correct_answer === item + 1) {
          chipSelected.classList.add("question-correct");
          this.score += 10;
        } else {
          chipRigth.classList.add("question-correct-fail");
          chipSelected.classList.add("question-incorrect");
        }
        this.scoreBar = 150;
        this.canClick = false;
        this.clearSelected(chipSelected, chipRigth);
      } else {
        //   Cannot select any questions after pressed
      }
    },

    countDownTimer() {
      let interval = setInterval(() => {
        if (this.scoreBar > 0) {
          this.scoreBar--;
        } else {
          //  console.log("timer is out");
          this.loadQuestion();
          this.countDownTimer();
          clearInterval(interval);
        }
      }, 150);
    },
    done() {
      this.endOfTrivia = false;
    },
  },

  //Lifecycle hooks

  mounted() {
    this.getQuestionsFromServer();
  },
};
</script>

<style>
.trivia-container {
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  max-width: 600px !important;
  margin-top: 2rem !important;
  /* margin-bottom: 1rem !important; */
}
.question-correct {
  background-color: #469c3a !important;
}
.question-correct-fail {
  background-color: #469c3a !important;
  animation: vibrate 0.3s linear 0s infinite;
}
@keyframes vibrate {
  0% {
    right: 0px;
  }
  25% {
    right: -3px;
  }
  50% {
    right: 0px;
  }
  75% {
    right: 3px;
  }
}

.question-incorrect {
  background-color: red !important;
}
.question-default {
  background-color: #e0e0e0 !important;
}
.score {
  width: auto !important;
}
.progress-bar {
  width: 90% !important;
  margin: auto !important;
}
.card-line-steps {
  background: linear-gradient(
    90deg,
    rgba(253, 45, 162, 1) 0%,
    rgba(255, 23, 18, 1) 100%
  ) !important;
  border-radius: 1rem !important;
  width: 3rem !important;
  height: 0.3rem !important;
}
.score {
  font-size: 1rem !important;
}
a {
  text-decoration: none !important;
}
@media only screen and (max-width: 600px) {
  .trivia-container {
    margin-top: 0.5rem !important;
  }
}
</style>

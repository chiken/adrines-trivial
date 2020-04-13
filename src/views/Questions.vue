<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3"></v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 4" step="4"></v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 5" step="5"></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content v-for="(question, idx) in questions" :key="idx" :step="idx">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <v-btn color="primary" @click="nextStep(idx + 1)">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Api from '../services/Api'

export default {
  data: function () {
    return {
      questions: [],
      e1: 1,
      steps: 5
    }
  },
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    }
  },
  mounted: function () {
    Api.getQuestions({
      token: localStorage.getItem('token'),
      amount: 5,
      difficulty: localStorage.getItem('difficulty'),
      category: localStorage.getItem('category')
    })
      .then(response => (this.questions = response.results))
      .catch(err => console.log(err))
  },
  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    }
  }
}
</script>

<style scoped>
</style>

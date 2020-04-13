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
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px">
          <v-card-title>Pregunta</v-card-title>
        </v-card>

        <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Api from '@/services/Api'

export default {
  data: function () {
    return {
      questions: []
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
  }
}
</script>

<style scoped>
</style>

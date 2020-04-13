<template>
  <v-content>

    <v-card class="difficulty-card" color="green">
      <v-card-title>Fácil</v-card-title>
    </v-card>
    <v-card class="difficulty-card" color="orange">
      <v-card-title>
        Medio
      </v-card-title>

      </v-card>
    <v-card class="difficulty-card" color="red">
      <v-card-title>
        Difícil
      </v-card-title>
    </v-card>
  </v-content>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.difficulty-card {
  width: 95%;
  border-radius: 20px;
  margin: 0 auto 1.5em auto;

}
</style>

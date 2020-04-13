<template>
  <v-content>
    <v-card
      v-for="(difficulty, idx) in difficulties"
      :key="idx"
      :color="colors[idx]"
      class="difficulty-card"
      @click="selectDifficult(difficulty)"
    >
      <v-card-title>{{ difficulty }}</v-card-title>
    </v-card>
  </v-content>
</template>

<script>
import Api from '@/services/Api'

export default {
  data: function () {
    return {
      difficulties: [],
      colors: ['green', 'orange', 'red']
    }
  },
  mounted: function () {
    this.difficulties = Api.getDifficulty()
  },
  methods: {
    selectDifficult: function (myDiff) {
      localStorage.setItem('difficulty', myDiff)
      this.$router.push('/category')
    }
  }
}
</script>

<style lang="scss" scoped>
.difficulty-card {
  width: 95%;
  border-radius: 20px;
  margin: 0 auto 1.5em auto;
}
</style>

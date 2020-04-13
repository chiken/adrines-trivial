<template>
  <div>
    <v-card v-for="(category, idx) in categories" :key="idx" @click="selectCategory(category.id)">
      <v-card-title>{{ category.name }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import Api from "@/services/Api.vue";

export default {
  data: function() {
    return {
      categories: []
    };
  },
  mounted: function() {
    this.categories = Api.getCategoryList()
      .then(response => (this.categories = response.trivia_categories))
      .catch();
  },
  methods: {
    selectCategory: function(myCat) {
      localStorage.setItem("category", myCat);
      this.$router.push("/questions");
    }
  }
};
</script>

<style scoped>
</style>

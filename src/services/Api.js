
import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://opentdb.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
   async getToken () {
    const response = await apiClient.get("api.php?command=request")
    return response.data
  },

  async getCategoryList () {
    const response = await apiClient.get("api_category.php")
    return response.data
  },

  getDifficultyList () {
    return ["easy", "medium", "hard"]
  },

  getTypeList () {
    return ["multiple", "boolean"]
  },

  async getQuestions (data) {
    let myParams = {}
    if (data.token) myParams.token = data.token
    if (data.amount) myParams.amount = data.amount
    if (data.difficulty) myParams.difficulty = data.difficulty
    if (data.category) myParams.category = data.category
    if (data.type) myParams.type = data.type

    const response = await apiClient.get("api.php", { myParams })
    return response.data
  }
};
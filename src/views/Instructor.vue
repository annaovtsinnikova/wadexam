<template>
  <div>
  <h1>Instructor Management Pannel</h1>
  <div class="container">
          <table>
          <tr>
            <th>St. Code</th>
            <th>St. Name</th>
            <th>Homework 1</th>
            <th>Homework 2</th>
            <th>Exam</th>
            <th>Final grade</th>
          </tr>
          <tr class="item" v-for="grade in grades" :key="grade.id">
            <td><input name="studentcode" type="text" id="studentcode" required v-model="grade.studentcode"></td>
            <td><input name="studentname" type="text" id="studentname" required v-model="grade.studentname"></td>
            <td><input name="hw1" type="number" id="hw1" required v-model="grade.hw1"></td>
            <td><input name="hw2" type="number" id="hw2" required v-model="grade.hw2"></td>
            <td><input name="exam" type="number" id="exam" required v-model="grade.exam "></td>
            <td :class="{ 'final-cell': true }"> <span> {{ grade.total }}</span></td>
          </tr>
          </table>
    </div>
  </div> 
</template>


<script>
export default {
  name: "Instructor",
  data() {
    return {
      grade: {
        studentcode: "",
        studentname: "",
        hw1: null,
        hw2: null,
        exam: null,
        final: null,
      },
      grades: [],
    };
  },
  watch: {
    grades: {
      deep: true,
      handler(newGrades) {
        newGrades.forEach((grade) => {
          grade.total = this.calculateTotal(grade);
        });
      },
    },
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => {
          this.grades = data.map(grade => ({ ...grade, total: this.calculateTotal(grade) }));
        })
        .catch((err) => console.log(err.message));
  },
  calculateTotal(grade) {
    return (grade.hw1 || 0) + (grade.hw2 || 0) + (grade.exam || 0);
  },

  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  } 
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.container {
  background: #d5d7d8;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 80%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  
}
input{
  width: 100px;
  text-align: center
}

.final-cell {
  background-color:darkcyan;
}

.final-cell span {
  display: inline-block;
  padding: 6px;
}
</style>
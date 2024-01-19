
<template>
  <div>
    <h3> Students grades </h3>

    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Student Code</th>
            <th>Student Name</th>
            <th>Homework 1</th>
            <th>Homework 2</th>
            <th>Exam</th>
            <th>Final</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(grade, index) in grades" :key="index">
            <td>{{ grade.studentcode }}</td>
            <td>{{ grade.studentname }}</td>
            <td>{{ grade.hw1 }}</td>
            <td>{{ grade.hw2 }}</td>
            <td>{{ grade.exam }}</td>
            <td :style="{ backgroundColor: getBackgroundColor(grade.final, grade.exam) }" @click="showGradeJustification(grade)">
              {{ grade.final }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showJustification" class="justification-box">
      <p> {{ justificationText }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
      showJustification: false,
      justificationText: "",
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data); 
        this.grades = data;
      })
        .catch((err) => console.log(err.message));
    },

    getBackgroundColor(finalGrade, examScore) {
      return finalGrade < 51 || examScore < 21 ? "red" : "green";
    },

    showGradeJustification(grade) {
      this.justificationText = this.calculateJustification(grade);
      this.showJustification = true;
    },

    calculateJustification(grade) {
      if (grade.final < 51 && grade.exam < 21) {
        return "You failed because you have to get to get 21 or more points for the exam and 51 point or more in total";

      } else if (grade.final < 51) {
        return "You failed because you have to get 51 points or more in total";

      } else if (grade.exam < 21) {
        return "You failed because you have to get to get 21 or more points for the exam";
      } else {
        return "You passed bacause you got over 20 points for the exam and over 50 points in total";
      }
    }

  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  },
};
</script>

<style scoped>
h3 {
  font-size: 20px;
}

.container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color:lightskyblue;
}

td {
  background-color: lightseagreen;
}

.justification-box {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: steelblue;
  color: azure;
  font-size: 20px;
  
}
</style>
<!-- <template>
  <div>
<h3> Students grades </h3>


<div class="container">
    
</div>
</div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => (this.grades = data))
        .catch((err) => console.log(err.message));
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

table {
  color: deepskyblue;
}

</style> -->


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
            <td>{{ grade.final }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data); // Log the received data
        this.grades = data;
      })
        .catch((err) => console.log(err.message));
    },
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
</style>
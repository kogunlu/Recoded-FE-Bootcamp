const studentNames = []
const studentGrades = []

console.log("-------------2-------------")

function registerStudentGrade(name, grade){
  
  studentNames.push(name)
  studentGrades.push(grade)
}

console.log(studentNames)
console.log(studentGrades)

registerStudentGrade('kuday',70)
registerStudentGrade('ali', 80)
registerStudentGrade('eylem', 50)
registerStudentGrade('veli', 90)
registerStudentGrade('hakan', 20)

console.log(studentNames)
console.log(studentGrades)


console.log("-------------3-------------")

function getStudentName(id){
  console.log(studentNames[id])
}

getStudentName(2)
getStudentName(0)

console.log("-------------4-------------")

function getStudentGrade(id){
  console.log(studentGrades[id])
}

getStudentGrade(2)

console.log("-------------5-------------")

function getStudentInfo(id){
    console.log(studentNames[id] +"'s " + "grade: " + studentGrades[id])
}

getStudentInfo(0)
getStudentInfo(3)


console.log("-------------6-------------")

function getAverageScore(){
  let sum = 0
  let avg = 0

  for(let i = 0; i < studentGrades.length; i++){
    sum = sum + studentGrades[i]
  }

  avg = (sum / studentGrades.length)
  console.log("Grade avarage: " + avg)
}

getAverageScore()

console.log("-------------7-------------")


function getHighestScore(){
  let biggerGrade = 0
  
  for (let i = 0; i < studentGrades.length; i++) {
    if (studentGrades[i] > biggerGrade) {
        biggerGrade = studentGrades[i];
  }
}
    console.log("The highest grade is: " + biggerGrade)
}

getHighestScore()

console.log("-------------8-------------")

function getPassingStudents(){
  for(let i = 0; i < studentGrades.length; i++){
    if(studentGrades[i] > 70){
      console.log(studentGrades[i])
    }
  }
}
getPassingStudents()

console.log("-------------9-------------")

function graduateLastStudent(){
  studentGrades.pop()
  studentNames.pop()
}

graduateLastStudent()
console.log(studentNames)
console.log(studentGrades)
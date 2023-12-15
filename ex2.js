let students = [{name: "Joao", p1:7, p2:5},
                {name: "Maria", p1:8, p2:6},
                {name: "Jose", p1:5, p2:3},
                {name: "Pedro", p1:9, p2:10},
                {name: "Ana", p1:6, p2:8}]

function aprovedStudents(students){
   for(let student of students)
   {
     const average = (student.p1 + student.p2) / 2;
     console.log("A média do aluno " + student.name + " é " + average);
      if(average >= 6) console.log("Parabéns "+student.name+" você foi aprovado(a) no concurso!")
      else console.log("Não foi dessa vez "+student.name+" tente novamente!")   
  }
}
aprovedStudents(students);
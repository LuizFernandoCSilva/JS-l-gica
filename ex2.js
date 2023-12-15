let students = [{name: "Joao", p1:7, p2:5},
                {name: "Maria", p1:8, p2:6},
                {name: "Jose", p1:5, p2:3},
                {name: "Pedro", p1:9, p2:10},
                {name: "Ana", p1:6, p2:8}]

function aprovedStudents(students){
   for(let i=0; i<students.length; i++)
   {
      if(students[i].p1 + students[i].p2 >= 12)
      {
          console.log("A média do aluno " + students[i].name + " é " + (students[i].p1 + students[i].p2)/2);
          console.log("Parabéns "+students[i].name+" você foi aprovado(a) no concurso!")
      }
      else
      {
        console.log("A média do aluno " + students[i].name + " é " + (students[i].p1 + students[i].p2)/2);
        console.log("Não foi dessa vez "+students[i].name+" tente novamente!")
      }
  }
}
aprovedStudents(students);
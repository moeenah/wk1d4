var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 32 },
  { id: 4, name: "alex",     age: 30 }
];



var result = students.sort(function(a, b){

  var nameA = a.name.toLowerCase()
  var nameB = b.name.toLowerCase()

  if (nameA < nameB){
    return -1;
  }

  if (nameA > nameB){
    return 1;

  }
  return a.age-b.age;
  return 0;


});

console.log(result);
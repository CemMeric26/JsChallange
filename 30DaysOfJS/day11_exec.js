/*const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

*/

//let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
//console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

//let [fin, est, sw, den, nor] = countries
//console.log(fin,est,sw,den,nor)

//let {width:w,height:h,area:a,perimeter:p}= rectangle
//console.log(w,h,a,p)

/*for (const {name,scores,skills,age} of users)
{
    if(skills.length<2)
    {
        console.log(name)
    }
}*/

/*
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name1,skills,score] =student
let [htmlScore,cssScore,jsScore,reactScore] = score


console.log(name1, skills, jsScore, reactScore)
*/


//Write a function called convertArrayToObject which can convert the array to a structure object.
/*const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(arr)
{
    let result=[]
    for (const [name,skills,scores] of arr)
    {
        console.log(name)
        let part = {name,skills,scores}
        result.push(part)

    }
    return result
}
console.log(convertArrayToObject(students))
*/

/*
Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 }
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  

  let newStudent=JSON.parse(JSON.stringify(student))
  
  
  const {name,age,skills}  = newStudent
  skills.frontEnd.push({skill:'Bootstrap',level:8})
  skills.backEnd.push({skill:'Express',level:9})
  skills.dataBase.push({skill:'SQL',level:9})
  skills.dataScience.push('SQL')
  console.log(newStudent.skills)

  
  
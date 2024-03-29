const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

//Change skills array to JSON using JSON.stringify()

const skills_json=JSON.stringify(skills,undefined,4)
//console.log(skills_json)



//Stringify the age variable
const age_json=JSON.stringify(age,undefined,4)
//console.log(age_json)
//Stringify the isMarried variable
const isMarried_json=JSON.stringify(isMarried,undefined,4)
//console.log(isMarried_json)
//Stringify the student object
const student_json=JSON.stringify(student,undefined,4)
//console.log(student_json)

//Stringify the students object with only firstName, lastName and skills properties
const student2= JSON.stringify(student,['firstName','lastName','skills'],4)
//console.log(student2)


//Parse the txt JSON to object.
const txt_parse= JSON.parse(txt,undefined)
//console.log(txt_parse)

//Find the user who has many skills from the variable stored in txt.
let max=0
let max_user
let entries_txt= Object.entries(txt_parse)
//console.log(entries_txt)

for([key,val] of entries_txt)
{
    if(val.skills.length>max)
    {
        max_user=key
        max=val.skills.length
    }
}
console.log(max_user)
const dog ={
    name: 'coochie',
    legs: 4,
    color: 'white',
    age: 3,

    bark: function()
    {
        return 'woof woof'
    }


}

dog.breed = 'husky'

dog.getDoginfo = function(){

    return ` The dog info:\n *********\n Name:${this.name}\n Legs:${this.legs}\n Color:${this.color} \n age:${this.age}`

}

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }



const entries= Object.entries(users)
const keys= Object.keys(users)
const values= Object.values(users)

let count=0
  for(const value of values)
{
    //console.log(value.points)
    if(value.points>=50)
    {
        count++
    }
}

//console.log(count)
let mern_arr=[]


users['Cem Meriç'] = 
{
    email: 'samipasazade3141@gmail.com',
      skills: ['C', 'C++', 'JavaScript', 'Haskell', 'Pyhton', 'Prolog','Verilog'],
      age: 21,
      isLoggedIn: true,
      points: 69
}


//alternative method by enumeration of entries
for(const [key,value] of entries)
{
    

    if(value.skills.includes('MongoDB')&&value.skills.includes('Express')&&value.skills.includes('React')&&value.skills.includes('Node') )
    {
        mern_arr.push(key)
    }    

}
//console.log(mern_arr)

const personAccount = 
{
    firstName: 'Alex',
    lastName: 'Turner',
    incomes: {'work':5000, 'freelance':2000,'lottery':500},
    expenses: {'fashion':1000, 'house':1500,'entertainment':1000,'sports':1000},

    totalIncome: function()
    {
        let inc=0
        for([i,j] of incomes)
        {
            inc += j
        }
        return inc;
    },
    totalExpense: function()
    {
        let inc=0
        for([i,j] of this.expenses)
        {
            inc += j
        }
        return inc;
    },

    accountInfo : function()
    {

        return `The account info:\n Name:${this.firstName} ${this.lastName}\n Total income:${this.totalIncome()}\n Total expenses: ${this.totalExpense()} `
    },

    addIncome: function(str,val)
    {
        this.incomes[str]=val
    },
    addExpense: function(str,val)
    {
        this.expenses[str]=val
    },
    accountBalance: function()
    {
        let bal=this.totalIncome-this.totalExpense
        return bal
    }


}

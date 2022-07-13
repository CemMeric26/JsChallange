//Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName','Cem Meriç')
localStorage.setItem('lastName','Şefikoğulları')
localStorage.setItem('age','21')
localStorage.setItem('country','Turkey')
localStorage.setItem('city','Ankara')

//Create a student object. The student object will have first name, last name, age, skills, country, 
//enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student=
{
    firstName:'Rafa',
    lastName: 'nadal',
    age: 36,
    skills:['Tennis','Swimming','Football'],
    country: 'Spain'
}

const student_txt= JSON.stringify(student,undefined,4)
localStorage.setItem('student',student_txt)


//Create an object called personAccount. 
//It has firstname, lastname, incomes, expenses properties and 
//it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

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

localStorage.setItem('personAccount',JSON.stringify(personAccount,undefined,4))
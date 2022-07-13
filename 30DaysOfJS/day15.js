/*
class Animal
{
    constructor(name,age,color,legs)
    {
        this.name=name
        this.age=age
        this.color=color
        this.legs=legs
        console.log('animal constructor called')
    }

    voice()
    {
        console.log('animal voice')
    }  

}

class Dog extends Animal{
    constructor(name,age,color,legs,gender)
    {
        super(name,age,color,legs)
        this.gender=gender
        console.log('dog constructor called')
    }
    
    voice()
    {
        console.log('woof woof')
    }


}

class Cat extends Animal{
    voice()
    {
        console.log('meow meow')
    }
}

const an1=new Animal('carry',4,'red',2)
//an1.voice()

const dog1=new Dog('ashly',12,'golden',4,'female')

dog1.voice()
*/

class Statistics{
    constructor(sample)
    {
        this.sample=sample
    }

    count()
    {
        return this.sample.length
    }
    sum()
    {
        let sum=this.sample.reduce((x, a) => x + a, 0)

        return sum
    }
    min()
    {
        let min=this.sample[0]
        for(const i of this.sample)
        {
            if(i< min)
            {
                min=i
            }
        }

        return min
    
    }

     
    max()
    {
        let max=this.sample[0]
        for(const i of this.sample)
        {
            if( max<i)
            {
                max=i
            }
        }

        return max
    }

    range()
    {
        return this.max()-this.min()
    }
    mean()
    {
        let len=this.sample.length
        let sum=this.sum()
        return sum/len
    }
    median()
    {
        const mid = Math.floor(this.sample.length / 2)
        let nums = [...this.sample].sort((a, b) => a - b)
       return this.sample.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
    }
    mode()
    {
        const mode = {};
        let max = 0, count = 0;
        let len=this.sample.length

        for(let i = 0; i < len; i++) {
            const item = this.sample[i];
            
            if(mode[item]) {
            mode[item]++;
            } else {
            mode[item] = 1;
            }
            
            if(count < mode[item]) {
            max = item;
            count = mode[item];
            }
        }
        
        return {'mode':max,'count':mode[max]}
    }

    var()
    {
        let len=this.sample.length
        let total=0
        let mean= this.mean()//this.sum()/this.sample.length

        for (let i=0;i<len;i++)
        {
            total += Math.pow((this.sample[i]-mean),2)
        }
       
        return total /(len-1)
    }

    std()
    {
        return Math.pow((this.var()),0.5)
    }

    freqDist()
    {
        const counts = {};
        const setof= new Set(this.sample)
        let result=[]
        let len=this.sample.length

        for (const num of this.sample) {
            counts[num] = counts[num] ? counts[num] + 1 : 1
        }
        //console.log(counts)
        //console.log(setof)
        //console.log(counts[31])
        for(const i of setof)
        {
            let occ=counts[i]
            let num= (occ/len*100)
            let x=i
            result.push([num, x])
        }
        return result
    }


}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log(ages[12])
const s1=new Statistics(ages)
console.log('Count:', s1.count()) // 25
console.log('Sum: ', s1.sum()) // 744
console.log('Min: ', s1.min()) // 24
console.log('Max: ', s1.max()) // 38
console.log('Range: ', s1.range()) // 14
console.log('Mean: ', s1.mean()) // 30
console.log('Median: ',s1.median()) // 29
console.log('Mode: ', s1.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',s1.var()) // 17.5
console.log('Standard Deviation: ', s1.std()) // 4.2
//console.log('Variance: ',s1.var()) // 17.5
console.log('Frequency Distribution: ',s1.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
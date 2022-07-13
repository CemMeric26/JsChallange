/*
const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /[^A-Za-z,. ]+/g  // 
const matches = txt.match(pattern)
const temp=[]
for(i of matches)
{
    temp.push(parseInt(i))
}
console.log(temp)  // ["6", "2019"]


function getSum(total, num) {
    return total + num;
  }

  console.log(temp.reduce((acc, cur) => acc + cur, 0))
*/


//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

  paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
  
  function tenMostFrequentWords(para)
  {
    const pattern = /[a-z]+/gi
    let matches= para.match(pattern)
    
    const lower = matches.map(element => { return element.toLowerCase()})

    
    
  }
  
  console.log(tenMostFrequentWords(paragraph))


  sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  
  function cleanText(para)
  {

    let matches = para.replace(/[^A-Za-z,. ]+/g, '')
    
    return matches

  }

  console.log(cleanText(sentence))
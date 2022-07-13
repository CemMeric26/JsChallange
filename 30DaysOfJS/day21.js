
//Create an index.html file and put four p elements as above: 
//Get the first paragraph by using document.querySelector(tagname) 
//and tag name
/*
let first_para=document.querySelector('p')
console.log(first_para)

let second_para=document.querySelector('#second-para')
console.log(first_para)

let third_para=document.querySelector('#thrid-para')
console.log(first_para)
let fourth_para=document.querySelector('#foutrh-para')
console.log(first_para)
*/

//Get all the p as nodeList using 
//document.querySelectorAll(tagname) and by their tag name

let all_paras= document.querySelectorAll('p')

for(let i=0;i< all_paras.length;i++)
{
    console.log(all_paras[i].textContent)
}
all_paras[3].textContent='Fourth Paragraph'
console.log(all_paras[3].textContent)

all_paras.forEach((para, i) => {
    para.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
      para.style.color = 'blue'
    } else {
      para.style.color = 'red'
    }
  })

all_paras.forEach((para,i)=>
{
    if (i % 2 === 0) {
        para.style.backgroundColor = 'silver'
      } else {
        para.style.backgroundColor = 'lime'
      }

} )

all_paras.forEach((para,i)=>
{
    if (i % 2 === 0) {
        para.style.fontSize = '40px'
      } else {
        para.style.fontSize = '60px'
      }

} )



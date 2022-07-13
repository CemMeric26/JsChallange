let h1_title = document.querySelector('h1')

let all_lis = document.querySelectorAll('li')


//changing background color according to tasks done
all_lis.forEach((li, i) => {
    
    if (all_lis[i].textContent.includes('Done')) {
      li.style.backgroundColor = 'green'
    } 
    else if (all_lis[i].textContent.includes('Ongoing')){
        li.style.backgroundColor = 'yellow'
    }
    else if(all_lis[i].textContent.includes('Coming'))
    {
        li.style.backgroundColor = 'red'
    }
    else{
        li.style.backgroundColor = 'white'
    }
  })

  //CHANGING FONT   
  all_lis.forEach((li,i)=>
  {
      
    li.style.fontSize = '30px'
       
  
  } )

  var datetime = new Date()
  let date_time=document.getElementById("time")
  date_time.textContent = datetime


 

  let i=0
  function change() {  
    
    var color =[ "white", "blue", "brown", "green","aqua","yellow","red"]
     
    date_time.style.backgroundColor = color[i]
    h1_title.style.backgroundColor = color[(i+1)%color.length]
    i = (i+1)%color.length
  }  
 setInterval(change,1000)




  



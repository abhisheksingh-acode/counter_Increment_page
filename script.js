 let numbers = document.querySelectorAll('.numbers');

let i = 0;
numbers.forEach((elements)=>{

   elements.innerHTML = i;
 const countInc = ()=>  {
 let data = +elements.getAttribute('data-get');
   //   console.log(typeof data);
    let incr = data / 10;
    if(elements.innerHTML < data){
      elements.innerHTML = Math.floor(Number(elements.innerHTML) + incr) 
       setTimeout(countInc,100)
    }else{
      elements.innerHTML = data;
    }
}
    countInc()
})


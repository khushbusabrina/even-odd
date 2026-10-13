

let number=document.querySelector("#number")
let result=document.querySelector("#result")
let btn=document.querySelector("#btn")
let clearbtn=document.querySelector("#clearbtn")




btn.addEventListener("click",()=>{
     if(number.value%2===0){
      result.innerHTML= "Result = it is a even number "
    }
    else{
        result.innerHTML= "Result = it is a odd number " 
    }
})

clearbtn.addEventListener("click",()=>{
     result.innerHTML= "Result........."
     number.value=""
})
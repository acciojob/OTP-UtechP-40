//your JS code here. If required.
let codes = document.querySelectorAll(".code")

for(let i =0;i<codes.length-1;i++){
    codes[i].addEventListener("input",()=>{
        codes[i+1].focus()
    })
}
heading = document.getElementById("heading")
content = document.getElementById("content")
btn = document.getElementById("btn")
heading.style.display = "none"
content.style.display = "none"
btn.style.display = "none"
plus = document.getElementById("new")
homepage = document.getElementById("homepage")


plus.addEventListener("click", function write() {
    document.getElementById("homepage").style.display = "none"
    document.getElementById("heading").style.display = "grid"
    document.getElementById("content").style.display = "grid"
    document.getElementById("btn").style.display = "grid"
})

title=document.createElement("div")
title.textContent = "hi"
title.classList.add("card")

homepage.appendChild(title);         


j=()=>{document.getElementById("s").style.display="none"}
function save(){

    
    hc=(heading.innerText)
    c=content.innerText

    localStorage.setItem(hc,c)

    document.getElementById("s").style.display="grid"
    setTimeout(j,1000)
}

function load(id){
    heading.innerText=id

    nc=localStorage.getItem(id)

    content.innerText=nc
}
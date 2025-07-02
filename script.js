heading=document.getElementById("heading")
content=document.getElementById("content")
btn=document.getElementById("btn")
heading.style.display="none"
content.style.display="none"
btn.style.display="none"
plus=document.getElementById("new")


plus.addEventListener("click",function write(){
    document.getElementById("homepage").style.display="none"
    document.getElementById("heading").style.display="grid"
    document.getElementById("content").style.display="grid"
    document.getElementById("btn").style.display="grid"
})

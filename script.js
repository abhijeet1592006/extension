


cd=document.getElementById("card")
heading = document.getElementById("heading")
content = document.getElementById("content")
btn = document.getElementById("btn")
heading.style.display = "none"
content.style.display = "none"
btn.style.display = "none"
plus = document.getElementById("new")
homepage = document.getElementById("homepage")

btn.addEventListener("click",function(){
    save()
})

plus.addEventListener("click", function write() {
    document.getElementById("homepage").style.display = "none"
    document.getElementById("heading").style.display = "grid"
    document.getElementById("content").style.display = "grid"
    document.getElementById("btn").style.display = "grid"
})


function t() {

    l=Object.keys(localStorage)

    for(i of l){
        title=document.createElement("div")
        title.textContent=i;
        title.classList.add("card")
        homepage.append(title);

    }
    let d=document.querySelectorAll(".card")
    d.forEach(d1 => {
        d1.addEventListener("click", function write() {
            document.getElementById("homepage").style.display = "none"
            document.getElementById("heading").style.display = "grid"
            document.getElementById("content").style.display = "grid"
            document.getElementById("btn").style.display = "grid"
            id=d1.innerText
            load(id)
        })
        
    });
    



}



j = () => { document.getElementById("s").style.display = "none" }
function save() {


    hc = (heading.innerText)
    c = content.innerText

    localStorage.setItem(hc, c)

    document.getElementById("s").style.display = "grid"
    setTimeout(j, 1000)
}

function load(id) {
    heading.innerText = id

    nc = localStorage.getItem(id)

    content.innerText = nc
}


cd.addEventListener("click",function(){
    
    id=card.innerText
    load(id)
})
t()


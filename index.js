let z = document.getElementById("hello")
let spanTag = document.createElement("span")
z.style.backgroundColor = "yellow"
let dhoniImage = document.createElement("img")
spanTag.textContent = "this is a story in p tag"
dhoniImage.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCMlvM2llerg0SKT79eCwHRobNauN1W1blhn3SZeuB0YGqMrxc"
z.append(spanTag, dhoniImage)
// z.remove(spanTag, dhoniImage)

let sachinImage = document.createElement("iframe")
sachinImage.frameBorder = 1;
sachinImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/Sachin-Tendulkar_%28cropped%29.jpg"
z.replaceChild(sachinImage, dhoniImage)

z.append(spanTag, sachinImage)


const clonedElem = z.cloneNode(true)
document.body.append(clonedElem)


let prabhasPic = document.createElement("img")
prabhasPic.setAttribute("src", "https://media.themoviedb.org/t/p/w235_and_h235_face/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg")
prabhasPic.setAttribute("width", "500")
prabhasPic.style.backgroundColor = "blue"
document.body.appendChild(prabhasPic)
prabhasPic.style.padding = "30px"
prabhasPic.getAttribute("width")
prabhasPic.removeAttribute(prabhasPic)
document.body.appendChild(prabhasPic)


let divTag = document.createElement("div")
divTag.className = "container"
divTag.classList.add("Tata")
divTag.classList.add("ratan")
divTag.classList.remove("ratan")
divTag.classList.replace("ratan", "nexon")
console.log(divTag)

sachinImage.addEventListener("click", function () {
    alert("pic has been clicked")
    sachinImage.style.borderRadius = "50%"

})


document.body.style.margin = "0"
document.body.style.padding = "b"
document.body.style.boxSizing = "border-box"
document.body.style.width = "100vw"



let p = document.querySelector("p")
console.log(p.parentElement)
let div = document.querySelector("div")
console.log(div.children)
let div2 = document.querySelector("div")
console.log(div.firstChild, div.firstElementChild)
// let thirdP = document.querySelector(".three")
// console.log(thirdP.nextSibling)
let t = document.querySelector(".three")
t.insertAdjacentElement("beforeend", prabhasPic)
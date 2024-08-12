const findTutorNavItem = document.getElementById("find-tutor-nav-item")
const findTutorAnchor = document.getElementById("find-tutor-anchor")
const finctutorItemsDiv = document.getElementById("find-tutor-extra-items")
let showFindTutorItemsDiv = false
console.log(findTutorAnchor)

findTutorAnchor.addEventListener("mouseover" , ()=>{
    showFindTutorItemsDiv = true
    if(showFindTutorItemsDiv){
        finctutorItemsDiv.style.display = "flex"
    }
    console.log(showFindTutorItemsDiv)
})

findTutorAnchor.addEventListener("mouseout" , ()=>{
    showFindTutorItemsDiv = false
    if(!showFindTutorItemsDiv){
        finctutorItemsDiv.style.display = "none"
    }
    console.log(showFindTutorItemsDiv)
})

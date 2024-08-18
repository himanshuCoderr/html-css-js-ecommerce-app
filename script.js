const findTutorNavItem = document.getElementsByClassName("find-tutor-nav-item")
const findTutorAnchor = document.getElementsByClassName("find-tutor-anchor")
const finctutorItemsDiv = document.getElementsByClassName("find-tutor-extra-items")
let showFindTutorItemsDiv = false
console.log(findTutorAnchor)

findTutorNavItem[0].addEventListener("mouseover" , ()=>{
    showFindTutorItemsDiv = true
    if(showFindTutorItemsDiv){
        finctutorItemsDiv[0].style.display = "flex"
    }
    console.log(showFindTutorItemsDiv)
})

findTutorNavItem[0].addEventListener("mouseout" , ()=>{
    showFindTutorItemsDiv = false
    if(!showFindTutorItemsDiv){
        finctutorItemsDiv[0].style.display = "none"
    }
    console.log(showFindTutorItemsDiv)
})



findTutorNavItem[1].addEventListener("mouseover" , ()=>{
    showFindTutorItemsDiv = true
    if(showFindTutorItemsDiv){
        finctutorItemsDiv[1].style.display = "flexx"
    }
    console.log(showFindTutorItemsDiv)
})
 
findTutorNavItem[1].addEventListener("mouseout" , ()=>{
    showFindTutorItemsDiv = false
    if(!showFindTutorItemsDiv){
        finctutorItemsDiv[1].style.display = "none"
    }
    console.log(showFindTutorItemsDiv)
})
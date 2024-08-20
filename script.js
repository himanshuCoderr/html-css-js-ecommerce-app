import findables_prefrences from "./Frontend Data/User_Search_Findables.js"

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

// Subject Input Show Prefrence Logic Here

let SubjectInput = document.getElementById("subject_input")
console.log(SubjectInput)

function findPrefrenceArray(userInput){
    let prefArray = []
    for(let property in findables_prefrences ){
        if(userInput == property){
            prefArray = findables_prefrences[property]
            break
        }
    }
    return prefArray
}

SubjectInput.addEventListener("input",(e)=>{
    let inputVal = e.target.value.toUpperCase()
    let gotPrefArray = findPrefrenceArray(inputVal)
    let prefDiv = document.getElementById("prefrence-items")
    prefDiv.innerHTML = ""
    if(gotPrefArray.length > 0){
        for(let i = 0 ; i < gotPrefArray.length ; i++){
            let anchorItem = document.createElement("a")
            anchorItem.className = "p-1 hover:bg-blue-500"
            anchorItem.innerText = gotPrefArray[i]
            prefDiv.appendChild(anchorItem)
        } 
    }
})




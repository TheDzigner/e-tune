const navBtns = document.querySelectorAll("nav ul li button");
const sections = document.querySelectorAll("section")


let activeIndex = 0
let activeSectionBtn = ""
 

navBtns.forEach((button,index)=>{
    button.addEventListener("click",()=>{
     
        navBtns[activeIndex].classList.remove("active")
         activeIndex = index
         activeSectionBtn = navBtns[index].dataset.active
        navBtns[activeIndex].classList.add("active")

        for (const key in sections) {
         const dataKey = sections[key].dataset.active
         
            if (dataKey ===  activeSectionBtn) {
                sections[key].style.display = 'block'
            } else {
                sections[key].style.display = 'none'
            }

        }

    })
})
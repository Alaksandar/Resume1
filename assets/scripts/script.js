let clckblEl = document.querySelectorAll("h2");
let showHideEl = document.querySelectorAll(".block_column div");
let blocks = document.querySelectorAll(".block_column");

document.addEventListener("click", showList);
    
function showList(e) {
    
    let h2 = e.target.closest("h2");
    if(!h2) return;
    let h2_active = h2.classList.toggle("active");
   
    for(let div of showHideEl) {
        if(h2.parentElement.contains(div)) {
            div.classList.toggle("hide")
        }
    }
}
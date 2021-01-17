let clckblEl = document.querySelectorAll("h2");
let showHideEl = document.querySelectorAll(".block_column div");
let blocks = document.querySelectorAll(".block_column");

document.addEventListener("click", showList);
    
function showList(e) {
    
    let h2 = e.target.closest("h2");
    if(!h2) return;
    h2_active = h2.classList.toggle("active");
    console.log(h2);

    for(div of showHideEl) {
        if(h2.parentElement.contains(div)) {
            console.log(div);
            div.classList.toggle("hide")
        }
    }
}
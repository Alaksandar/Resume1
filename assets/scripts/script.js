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
        // if(h2.classList.contains("active") &&
        if(h2.parentElement.contains(div)) {
            console.log(div);
            div.classList.toggle("hide")
        }
    }
    

    // if(h2.classList.contains("active")) {
    //     for(div of showHideEl) {
    //         if(h2.parentElement.contains(div)) {
    //             console.log(div);
    //         }
    //     }
    // }
            //     console.log(div);
            //     div.classList.toggle("hide");
            // }
        // console.log(h2.parentElement > showHideEl);

        // for (let div of showHideEl) {
        //     console.log(div);
        //     div.classList.toggle("hide");
        // }
        
            // for (block of blocks) {
            //     // console.log(block);
            //     let dataClass = block.dataset.action;    
            //     if (!dataClass) return;                                    
            //     
            // }  
    
}

const tab1 = document.getElementById("tab1")
tab1.addEventListener("click", () => switchTab(1));

const tab2 = document.getElementById("tab2")
tab2.addEventListener("click", () => switchTab(2));

const tab3 = document.getElementById("tab3")
tab3.addEventListener("click", () => switchTab(3));

function switchTab(tab){
    switch(tab){
        case 1:
            console.log("1")
            tab1.classList.add("tab-active")
            tab2.classList.remove("tab-active")
            tab3.classList.remove("tab-active")
            break;
        case 2:
            console.log("2")
            tab1.classList.remove("tab-active")
            tab2.classList.add("tab-active")
            tab3.classList.remove("tab-active")
            break;
        case 3:
            console.log("3")
            tab1.classList.remove("tab-active")
            tab2.classList.remove("tab-active")
            tab3.classList.add("tab-active")
            break;
    }
}
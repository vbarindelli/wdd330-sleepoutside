import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    document.querySelector(".banner").setAttribute('id', 'hide');
}

if (document.querySelector(".bannerClose")) {
    document.querySelector(".bannerClose").addEventListener("click", function () {
        this.closest(".banner").setAttribute('id', 'hide');
    })
}



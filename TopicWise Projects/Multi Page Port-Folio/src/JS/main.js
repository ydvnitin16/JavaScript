import home from "./home.js";
import { loadPage } from "./navigation.js";

document.querySelectorAll('.pages')
.forEach((list) => {
    list.addEventListener("click", (e)=>{
        e.preventDefault()
        let page = e.target.dataset.page;
        loadPage(page);
    })
})
loadPage('home')
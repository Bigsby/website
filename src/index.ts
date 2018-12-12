import "./styles/style.scss";
import templateOne from "./templates/template-one.html";

function createSpan(): HTMLElement {
    const newSpan = document.createElement("span");
    newSpan.innerText = "From index.ts watch";
    return newSpan;
}
window.addEventListener("load", () => { 
    document.body.appendChild(createSpan());
    const wrapper = document.createElement("div");
    wrapper.innerHTML = templateOne;
    document.body.appendChild(wrapper.firstChild);
});
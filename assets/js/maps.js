/* maps */
const generalWords = document.querySelector(".list-of-states");
const wordStates = document.querySelectorAll(".list-of-states li");
const generalStates = document.querySelector('#states');
const svgStates = document.querySelectorAll("#states > *");
const wordMaras = document.querySelector('[data-state=kahramanmaras]');
const svgMaras = document.querySelector('#kahramanmaras');
function removeAllOn() {
    wordStates.forEach(function (el) {
        el.classList.remove("on");
    });
    svgStates.forEach(function (el) {
        el.classList.remove("on");
    });
}
function addOnFromState(el) {
    const stateId = el.getAttribute("id");
    const wordState = document.querySelector("[data-state='" + stateId + "']");
    wordState.classList.add("on");
    el.classList.add("on");
    turkeyMap();
}
const turkeyMap = function () {
    generalStates.addEventListener('mousemove', (event) => {
        generalWords.style.top = event.screenY + -150 + 'px';
        generalWords.style.left = event.screenX + 55 + 'px';
        generalWords.style.position = 'fixed';
    });
}
generalStates.addEventListener("mouseenter", () => {
    wordMaras.classList.remove("on")
    svgMaras.classList.remove("on")
    generalWords.removeAttribute("style");
})
generalStates.addEventListener("mouseleave", () => {
    wordMaras.classList.add("on");
    svgMaras.classList.add("on")
    generalWords.setAttribute("style", "position:absolute");
})
svgStates.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        addOnFromState(el);
    });
    el.addEventListener("mouseleave", () => {
        removeAllOn();
    });
    el.addEventListener("touchstart", () => {
        removeAllOn();
        addOnFromState(el);
    });
});
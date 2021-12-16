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
        generalWords.style.top = event.clientY + -150 + 'px';
        generalWords.style.left = event.clientX + 55 + 'px';
        generalWords.style.position = 'fixed';
    });
}
generalStates.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if(![...wordStates].filter(e=>e.classList.contains("on")).length){
            wordMaras.classList.add("on");
            svgMaras.classList.add("on")
            generalWords.setAttribute("style", "position:absolute");
        }
    }, 1000);
})
svgStates.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        removeAllOn();
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
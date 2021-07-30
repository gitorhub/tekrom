/* maps */
const wordStates = document.querySelectorAll(".list-of-states li");
const svgStates = document.querySelectorAll("#states > *");

function removeAllOn() {
    wordStates.forEach(function (el) {
        el.classList.remove("on");
    });
    svgStates.forEach(function (el) {
        el.classList.remove("on");
    });
}

function addOnFromList(el) {
    const stateCode = el.getAttribute("data-state");
    const svgState = document.querySelector("#" + stateCode);
    el.classList.add("on");
    svgState.classList.add("on");
}

function addOnFromState(el) {
    const stateId = el.getAttribute("id");
    const wordState = document.querySelector("[data-state='" + stateId + "']");

    el.classList.add("on");
    wordState.classList.add("on");
}

wordStates.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
        addOnFromList(el);
    });
    el.addEventListener("mouseleave", function () {
        removeAllOn();
    });

    el.addEventListener("touchstart", function () {
        removeAllOn();
        addOnFromList(el);
    });
});

svgStates.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
        addOnFromState(el);
    });
    el.addEventListener("mouseleave", function () {
        removeAllOn();
    });

    el.addEventListener("touchstart", function () {
        removeAllOn();
        addOnFromState(el);
    });
});


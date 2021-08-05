/* maps */
const wordStates = document.querySelectorAll(".list-of-states li");
const svgStates = document.querySelectorAll("#states > *");
const generalStates = document.querySelector('#states');
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
    generalStates.addEventListener(
        'mousemove',
        function (event) {
            wordState.style.top = event.pageY + 25 + 'px';
            wordState.style.left = event.pageX + 'px';
        }
      );
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

generalStates.addEventListener("mouseleave", function (e) {
    if (e.relatedTarget && (e.relatedTarget.classList.contains("svg-states") || e.relatedTarget.classList.contains("list-of-states"))) {
        document.querySelector('#kahramanmaras').classList.add("on")
        document.querySelector('[data-state=kahramanmaras]').classList.add("on")
        
    }
})
generalStates.addEventListener("mouseenter", function (e) {
    if (e.relatedTarget && (e.relatedTarget.classList.contains("svg-states") || e.relatedTarget.classList.contains("list-of-states"))) {
        document.querySelector('#kahramanmaras').classList.remove("on")
        document.querySelector('[data-state=kahramanmaras]').classList.remove("on")
    }
})






// const turkeyMap=function () {
//     const element = document.querySelector('.map-of-regions');
//     const info = document.querySelector('.city-names');

  
//     element.addEventListener('mouseover',function (event) {
  


//         if (event.target.tagName === 'path' ) {
//           info.innerHTML = [
//             '<div>',
//             event.target.getAttribute('data-city-name'),
//             '</div>'
//           ].join('');
//         }
//       }
//     );
  
//     element.addEventListener(
//       'mousemove',
//       function (event) {
//         info.style.top = event.pageY + 25 + 'px';
//         info.style.left = event.pageX + 'px';
//       }
//     );

  
  
//   }
// turkeyMap();  
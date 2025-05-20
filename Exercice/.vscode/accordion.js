// Accordion
function initAccordion() {
    const blocs = document.querySelectorAll(".accordion_bloc");

    blocs.forEach(bloc, function () {
        const title = bloc.querySelector("accordion_title");
        title.addEventListener("click", function () {
            toggleAccordion(bloc);
        })
    })
}
initAccordion();
function toggleAccordion(bloc) {
    let isOpen = bloc.classList.contains("active");
    let wrapper = bloc.querySelector(".accordion_answer-bloc");
    const content = bloc.querySelector(".accordion_answer");
    if (isOpen) {
        bloc.classList.remove("active");
        wrapper.style.height = "0";
    } else {

        bloc.forEach(function (el) {
            el.classList.remove("active");
            el.querySelector(".accordion_answer-bloc").style.height = "0";
        })
        bloc.classList.add("active");
        wrapper.style.height = content.clientHeight + "px";
    }
}

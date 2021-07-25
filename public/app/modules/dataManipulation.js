function elemento() {
    window.addEventListener('click', (e) => {
        var elemento = e.target;
        if (elemento.localName == "button") {
            elemento.parentElement.dataset.show = "false";
            setTimeout(() => {
                elemento.parentElement.remove();
            }, 700);
        }

    })
}

export { elemento }
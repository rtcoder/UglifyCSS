function formatCode() {
    var mode = parseInt(document.getElementById('mode').value)

    switch (mode) {
        case 1:
            MinifyCSS();
        break;
        case 2:
            MinifyCSS();
            BeautifyCSS();
        break;
        default: return false;
    }
}

document.onreadystatechange = function () {
    var select = document.getElementById('mode');
    var button = document.getElementById('start');

    select.addEventListener("change", function () {
        var val = parseInt(this.value);

        switch (val) {
            case 1:
                button.innerHTML = "MinifyCSS";
            break;
            case 2:
                button.innerHTML = "BeautifyCSS";
            break;
            default: return false;
        }
    });
}

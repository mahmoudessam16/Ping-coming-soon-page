document.forms[0].onsubmit = function (e) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(document.querySelector('input').value) === false) {
        e.preventDefault();
        document.querySelector(".error").style.display = 'block';
        document.querySelector("input").style.borderColor = 'hsl(354, 100%, 66%)';
    } else {
        document.querySelector(".error").style.display = 'none';
        document.querySelector("input").style.borderColor = 'hsl(223, 100%, 88%)';
        return true;
    }
}

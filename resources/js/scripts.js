function insert(num) {
    var equal = document.form.equalview.value;
    if (equal) {
        document.form.equalview.value = "";
        document.form.textview.value = "";
    }
    document.form.textview.value += num;
}

function insertOperator(operator) {
    var equal = document.form.equalview.value;
    if (equal) {
        document.form.textview.value = document.form.equalview.value;
        document.form.equalview.value = "";
    }
    document.form.textview.value += operator;
}


function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.equalview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = "";
    document.form.equalview.value = "";
}

function back() {
    if (equal) {
        document.form.equalview.value = "";
    }
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
/* LETRAS */

function buttomA(string) {
    if (text.value.length == 0) {
        text.value = string;
    }
    if (text.value.length >= 9) {
        buttom1('1');
    }
}

function buttomB(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero la letra A!", "error");
    } else {
        if (text.value.length == 1) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom2('2');
    }
}

function buttomC(string) {
    if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letra A y B!", "error");
    }
    if (number.value.length == 1) {
        swal("Oh oh!", "Debes ingresar primero la letra B!", "error");
    } else {
        if (text.value.length == 2) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom3('3');
    }
}

function buttomD(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero las letras A, B y C!", "error");
    } else if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letras B y C!", "error");
    } else if (text.value.length == 1 || text.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar la letra C!", "error");
    } else {
        if (text.value.length == 3) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom4('4');
    }
}

function buttomE(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero las letras A, B, C y D!", "error");
    } else if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letras  B, C y D!", "error");
    } else if (text.value.length == 1 || text.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero las letras C y D!", "error");
    } else if (text.value.length == 2 || text.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero la letra D!", "error");
    } else {
        if (text.value.length == 4) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom5('5');
    }
}

function buttomF(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero las letras A, B, C, D y E!", "error");
    } else if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letras  B, C, D y E!", "error");
    } else if (text.value.length == 1 || text.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero las letras C, D y E!", "error");
    } else if (text.value.length == 2 || text.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero las letras C, D y E!", "error");
    } else if (text.value.length == 3 || text.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero la letra E!", "error");
    } else {
        if (text.value.length == 5) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom6('6');
    }
}

function buttomG(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero las letras A, B, C, D, E y F!", "error");
    } else if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letras  B, C, D, E y F!", "error");
    } else if (text.value.length == 1 || text.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero las letras C, D, E y F!", "error");
    } else if (text.value.length == 2 || text.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero las letras D, E y F!", "error");
    } else if (text.value.length == 3 || text.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero las letras E y F!", "error");
    } else if (text.value.length == 4 || text.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero la letra F!", "error");
    } else {
        if (text.value.length == 6) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom7('7');
    }
}

function buttomH(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero las letras A a la G!", "error");
    } else if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letras  B a la G!", "error");
    } else if (text.value.length == 1 || text.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero las letras C a la G!", "error");
    } else if (text.value.length == 2 || text.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero las letras D a la G!", "error");
    } else if (text.value.length == 3 || text.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero las letras E a la G!", "error");
    } else if (text.value.length == 4 || text.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero las letras F y G!", "error");
    } else if (text.value.length == 5 || text.value.length <= 6) {
        swal("Oh oh!", "Debes ingresar primero la letra G!", "error");
    } else {
        if (text.value.length == 7) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom8('8');
    }
}

function buttomI(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero las letras A a la H!", "error");
    } else if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letras  B a la H!", "error");
    } else if (text.value.length == 1 || text.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero las letras C a la H!", "error");
    } else if (text.value.length == 2 || text.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero las letras D a la H", "error");
    } else if (text.value.length == 3 || text.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero las letras E a la H!", "error");
    } else if (text.value.length == 4 || text.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero las letras F y H!", "error");
    } else if (text.value.length == 5 || text.value.length <= 6) {
        swal("Oh oh!", "Debes ingresar primero las letras G y H!", "error");
    } else if (text.value.length == 6 || text.value.length <= 7) {
        swal("Oh oh!", "Debes ingresar primero la letra H!", "error");
    } else {
        if (text.value.length == 8) {
            string = text.value + string;
            text.value = string;
        }
    }
    if (text.value.length >= 9) {
        buttom9('9');
    }
}

function buttomJ(string) {
    if (text.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero las letras A a la I!", "error");
    } else if (text.value.length == 0 || text.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero las letras  B a la I!", "error");
    } else if (text.value.length == 1 || text.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero las letras C a la I!", "error");
    } else if (text.value.length == 2 || text.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero las letras D a la I", "error");
    } else if (text.value.length == 3 || text.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero las letras E a la I!", "error");
    } else if (text.value.length == 4 || text.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero las letras F a la I!", "error");
    } else if (text.value.length == 5 || text.value.length <= 6) {
        swal("Oh oh!", "Debes ingresar primero las letras G a la I!", "error");
    } else if (text.value.length == 6 || text.value.length <= 7) {
        swal("Oh oh!", "Debes ingresar primero las letras H e I!", "error");
    } else if (text.value.length == 7 || text.value.length <= 8) {
        swal("Oh oh!", "Debes ingresar primero la letra I!", "error");
    } else {
        if (text.value.length == 9) {
            string = text.value + string;
            text.value = string;
            swal("Gran trabajo!", "Has completado el primer nivel", "success");
        }
    }
    if (text.value.length >= 9) {
        buttom0('0');
    }
}
/* NÚMEROS */

function buttom1(string) {
    if (text.value.length >= 9) {
        string = number.value + string
        number.value = string;
    }
}

function buttom2(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero el número 1!", "error");
    } else if (number.value.length == 1) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom3(string) {
    if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números 1 y 2!", "error");
    }
    if (number.value.length == 1) {
        swal("Oh oh!", "Debes ingresar primero el número 2!", "error");
    } else if (number.value.length == 2) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom4(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero los números 1, 2 y 3!", "error");
    } else if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números  2 y 3!", "error");
    } else if (number.value.length == 1 || number.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero el número 3!", "error");
    } else if (number.value.length == 3) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom5(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero los números 1, 2, 3 y 4!", "error");
    } else if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números  2, 3 y 4!", "error");
    } else if (number.value.length == 1 || number.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero los números 3 y 4!", "error");
    } else if (number.value.length == 2 || number.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero el número 4!", "error");
    } else if (number.value.length == 4) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom6(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero los números 1, 2, 3, 4 y 5!", "error");
    } else if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números  2, 3, 4 y 5!", "error");
    } else if (number.value.length == 1 || number.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero los números 3, 4 y 5!", "error");
    } else if (number.value.length == 2 || number.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero los números 4 y 5!", "error");
    } else if (number.value.length == 3 || number.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero el número 5!", "error");
    } else if (number.value.length == 5) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom7(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero los números 1, 2, 3, 4, 5 y 6!", "error");
    } else if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números  2, 3, 4, 5 y 6!", "error");
    } else if (number.value.length == 1 || number.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero los números 3, 4, 5 y 6!", "error");
    } else if (number.value.length == 2 || number.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero los números 4, 5 y 6!", "error");
    } else if (number.value.length == 3 || number.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero los números 5 y 6!", "error");
    } else if (number.value.length == 4 || number.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero el número 6!", "error");
    } else if (number.value.length == 6) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom8(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero los números 1, 2, 3, 4, 5, 6 y 7!", "error");
    } else if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números  2, 3, 4, 5, 6 y 7!", "error");
    } else if (number.value.length == 1 || number.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero los números 3, 4, 5, 6 y 7!", "error");
    } else if (number.value.length == 2 || number.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero los números 4, 5, 6 y 7!", "error");
    } else if (number.value.length == 3 || number.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero los números 5, 6 y 7!", "error");
    } else if (number.value.length == 4 || number.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero los números 6 y 7!", "error");
    } else if (number.value.length == 5 || number.value.length <= 6) {
        swal("Oh oh!", "Debes ingresar primero el número 7!", "error");
    } else if (number.value.length == 7) {
        string = number.value + string;
        number.value = string;
    }
}

// :( Estas 2 últimás funciones me generan conflicto con las letras I y J: cuando se marca la letra, hala los alert del los números

/* function buttom9(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero los números del 1, al  8!", "error");
    } else if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números del  2, al 8!", "error");
    } else if (number.value.length == 1 || number.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero los números del 3, al 8!", "error");
    } else if (number.value.length == 2 || number.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero los números del 4 al 8!", "error");
    } else if (number.value.length == 3 || number.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero los números 5, 6, 7 y 8!", "error");
    } else if (number.value.length == 4 || number.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero los números 6, 7 y 8!", "error");
    } else if (number.value.length == 5 || number.value.length <= 6) {
        swal("Oh oh!", "Debes ingresar primero los números 7 y 8!", "error");
    } else if (number.value.length == 6 || number.value.length <= 7) {
        swal("Oh oh!", "Debes ingresar primero el número 8!", "error");
    } else if (number.value.length == 8) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom0(string) {
    if (number.value.length == 0) {
        swal("Oh oh!", "Debes ingresar primero los números del 1, al  9!", "error");
    } else if (number.value.length == 0 || number.value.length <= 1) {
        swal("Oh oh!", "Debes ingresar primero los números del  2, al 9!", "error");
    } else if (number.value.length == 1 || number.value.length <= 2) {
        swal("Oh oh!", "Debes ingresar primero los números del 3, al 9!", "error");
    } else if (number.value.length == 2 || number.value.length <= 3) {
        swal("Oh oh!", "Debes ingresar primero los números del 4 al 9!", "error");
    } else if (number.value.length == 3 || number.value.length <= 4) {
        swal("Oh oh!", "Debes ingresar primero los números del 5 al 9!", "error");
    } else if (number.value.length == 4 || number.value.length <= 5) {
        swal("Oh oh!", "Debes ingresar primero los números 6, 7, 8 y 9!", "error");
    } else if (number.value.length == 5 || number.value.length <= 6) {
        swal("Oh oh!", "Debes ingresar primero los números 7, 8 y 9!", "error");
    } else if (number.value.length == 6 || number.value.length <= 7) {
        swal("Oh oh!", "Debes ingresar primero los números 8 y 9!", "error");
    } else if (number.value.length == 7 || number.value.length <= 8) {
        swal("Oh oh!", "Debes ingresar primero el número 9!", "error");
    } else if (number.value.length == 9) {
        string = number.value + string;
        number.value = string;
    }
} */

// se hacen estas funciones sin alerts para que no se halen al marcar las letras
function buttom9(string) {
    if (number.value.length == 8) {
        string = number.value + string;
        number.value = string;
    }
}

function buttom0(string) {

    if (number.value.length == 9) {
        string = number.value + string;
        number.value = string;
    }
    if (number.value.length >= 9) {
        swal("Excelente!", "Has completado todos los niveles", "success");

    }
}

/* const borrar = (e) => {
    const borrarTodo = e.target.innerText

    if (borrarTodo == "Reset") {
        text.innerText = text.innerText.slice(8, -1)
    }
    if (borrarTodo == "Reset") {
        number.innerText = number.innerText.slice(8, -1)
    }
} */


function btnCalc() {
    if (text.value.length >= 9 && number.value.length >= 9) {
        window.location = "./assets/pages/calculadora.html"
    }
}
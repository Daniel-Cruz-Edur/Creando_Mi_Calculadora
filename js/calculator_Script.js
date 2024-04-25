//Definir objeto con las propiedades

var PO = {

    teclas: document.querySelectorAll("#Calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#Operaciones"),
    cantisig: 0,
    cantidecimal: false,
    resultado: false,
    Lista_Pantalla: []
}

//Objeto con funciones de la calculadora

var fun = {

    inicio: function()
    {
        for(var i=0; i< PO.teclas.length; i++)
        {
            PO.teclas[i].addEventListener("click", fun.oprimir_teclas)
        }
    },
    oprimir_teclas: function(tecla)
    {
        PO.accion = tecla.target.getAttribute("class");
        PO.digito = tecla.target.innerHTML;
        fun.calculadora(PO.accion, PO.digito);
    },
    calculadora: function(accion, digito)
    {
        switch(accion)
        {
            case "number":
                PO.cantisig = 0;
                if(PO.operaciones.innerHTML == 0)
                {
                    PO.operaciones.innerHTML = digito;
                }
                else
                {
                    if(PO.resultado)
                    {
                        PO.resultado = false;
                        PO.operaciones.innerHTML = digito;
                    }
                    else
                    {
                        PO.operaciones.innerHTML += digito;
                    }
                }
                guardarultimodigito();
                console.log('Presionaste un número. ');
            break
            case "simbol":
                PO.cantisig ++;
                if (PO.cantisig == 1)
                {
                    if(PO.operaciones.innerHTML == 0)
                    {
                        PO.operaciones.innerHTML = 0;
                    }
                    else
                    {
                        PO.operaciones.innerHTML += digito;
                        PO.cantidecimal = false;
                        PO.resultado = false;
                    }
                }
                guardarultimodigito();
                console.log('Simbol');
            break;
            case "simbol simbol-decimal":
                if (!PO.cantidecimal && PO.cantisig!=1)
                {
                    PO.operaciones.innerHTML += digito;
                    PO.cantidecimal = true;
                    PO.resultado = false;
                }
                console.log('decimal');
                guardarultimodigito();
            break;
            case "simbol simbol-igual":
                PO.operaciones.innerHTML = eval(PO.operaciones.innerHTML);
                PO.resultado = true;
                console.log('igual');
            break;
            case "simbol simbol-Del":
                PO.operaciones.innerHTML = PO.operaciones.borrarultimodigito;
                console.log("Del");
            break;
        }
    },
    borrarcalculadora: function()
    {
        PO.resultado = false;
        PO.operaciones.innerHTML = 0;
    },
    guardarultimodigito: function(digito)
    {
        Lista_Pantalla.append(digito);
        console.log(Lista_Pantalla)
    },
    borrarultimodigito: function()
    {
        Lista_Pantalla.pop();
        console.log(Lista_Pantalla)
    }
}

fun.inicio();
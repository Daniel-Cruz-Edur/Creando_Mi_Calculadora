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
            break;
            case "simbol simbol-igual":
                PO.operaciones.innerHTML = eval(PO.operaciones.innerHTML);
                PO.resultado = true;
                console.log('igual');
            break;
            case "simbol simbol-Del":
                let currentValue = PO.operaciones.innerHTML;
                if (currentValue.length > 1) 
                {
                PO.operaciones.innerHTML = currentValue.slice(0, -1);
                } 
                else 
                {
                PO.operaciones.innerHTML = "0";
                }
                console.log("Del");
            break;
            case "simbol simbol-other pi":
                let PI = Math.PI;
                if(PO.cantisig == 1)
                {
                    PO.operaciones.innerHTML += PI;
                }
                else
                {
                    console.log('Oh it was. ')
                }
                console.log("PI was pressed. ");
            break;
            case "simbol simbol-other cubo":
                let expression = PO.operaciones.innerHTML;
                let Current_Values = eval(expression);
                if (!isNaN(Current_Values)) {
                    PO.operaciones.innerHTML = Math.pow(Current_Values, 3);
                    PO.resultado = true;
                } else {
                    console.log("Invalid input for cube operation");
                }
                console.log("Cube was pressed.");
            break;
        }
    },
    borrarcalculadora: function()
    {
        PO.resultado = false;
        PO.operaciones.innerHTML = 0;
    }

}

fun.inicio();
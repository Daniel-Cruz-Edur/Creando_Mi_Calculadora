function validarformulario()
{
    var nombre_Valido = validarnombre();
    var apellido_Valido = validarapellido();
    var usuario_Valido = validarusuario();
    var email_Valido = validaremail();
    var password_Valido = validarcontraseña();

    if (nombre_Valido && apellido_Valido && usuario_Valido && email_Valido && password_Valido)
    {
        alert("Registro exitoso. ")
        return true;
    }
    else
    {
        alert("Verifique los campos nuevamente. ")
        return false;
    }
}

function validarnombre()
{
    var nombre = document.getElementById("nombre").value;
    if (nombre.trim()== "")
    {
        alert("Ingrese su nombre. ");
        return false;
    }
    return true;
}

function validarapellido()
{
    var apellido = document.getElementById("apellido").value;
    if (apellido.trim()== "")
    {
        alert("Ingrese su apellido. ");
        return false;
    }
    return true;
}

function validarusuario()
{
    var usuario = document.getElementById("usuario").value;
    if (usuario.trim()== "")
    {
        alert("Ingrese su nombre de usuario. ");
        return false;
    }
    return true;
}

function validaremail()
{
    var email = document.getElementById("email").value;
    if (email.trim()== "")
    {
        alert("Ingrese un email. ");
        return false;
    }
    else
    {
        if (!formato_Email(email))
        {
            alert("Ingrese un correo electronico válido. ");
            return false;
        }
    }
    return true;
}

function formato_Email(email)
{
    var re = /\S+@+\S+\.\S+/;
    return re.test(email);
}

function validarcontraseña()
{

    var expresion = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    var password = document.getElementById("password").value;

    if (password.trim() == "")
    {
        alert("Ingrese una contraseña. ");
        return false;
    }
    else if (!expresion.test(password))
    {
        alert("Por favor ingresa ingresa una contraseña valida. ");
        return false;
    }
    return true;
    /*
    var password = document.getElementById("password").value;
    var contine_Numero = /\d/.text(password);
    var contine_Mayuscula = /[A-Z]/.test(password);
    var contine_Minuscula = /[a-z]/.test(password);

    if (password == "")
    {
        alert("Ingrese una contraseña. ");
        return false;
    }
    else if (password.length < 9)
    {
        alert ("La contraseña debe contener al menos 8 caracteres. ");
        return false;
    }
    else if (!contine_Numero)
    {
        alert ("La contraseña debe tener al menos 1 número. ")
        return false;
    }
    else if (!contine_Mayuscula)
    {
        alert ("La contraseña debe tener al menos una letra mayuscula. ")
        return false;
    }
    else if (!contine_Minuscula)
    {
        alert ("La contraseña debe tener al menos una letra minuscula. ")
        return false;
    }
    return true;
*/

}
function go(){

    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USU'){ 
            document.form.submit(); 
            alert("Registrado");
        } 
        else{ 
            alert("Por favor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 
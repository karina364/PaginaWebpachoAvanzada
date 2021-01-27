function funcion1(){
    
    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USU'){ 
        //document.form.submit(); 
        alert("Registrado");
        document.getElementById('modal').style.display = 'none';
       
    } 
    else{ 
        alert("Por favor ingrese, nombre de usuario y contraseña correctos."); 
    } 
}


function funcion2(modal){
    
       let imagen = document.getElementById(modal);	
        if (!imagen){
            alert("El elemento selecionado no existe");
        } else {
            padre = imagen.parentNode;
            padre.removeChild(imagen);
        }
    
}

function funcion3(){
    document.getElementById('modal').style.display = 'block';
    document.getElementById('img').style.display = 'block';
}
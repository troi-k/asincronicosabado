
let datosUsuario={
    usuario:"jgallego@gmail.com",
    password:"admin123"
}

//declare(que hace) la funcion principal
//llamo a mi funccion secundaria o callback
function conectarConNetflix(datos,generarrespuestacallback){
console.log ("cargando datos...")
    setTimeout(function(){

    if (datos.usuario == "jgallego@gmail.com" && datos.password == "admin123" ){
        //login ok
        generarrespuestacallback(200,"Bienvenido a netflix")

    }

    else  {
        //login fail
        generarrespuestacallback(204,"No estas registrado registrate")
    }
},5000)

}

//utilizar (llamo) la function principal
//declaro lo que hace el callback
conectarConNetflix(datosUsuario,function(codigo,mensaje){

    if(codigo==200){
        console.log(mensaje)
        console.log("cargando peliculas");
    }else 
    console.log (mensaje)
})


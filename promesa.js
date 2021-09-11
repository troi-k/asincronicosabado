
let datosUsuario={
    usuario:"jgallego@gmail.com",
    password:"admin123"
}


function conectarConNetflix(datos){
    console.log ("cargando datos...");


    let promesa=new Promise(function(resolve,reject){
        setTimeout(function(){
    
            if (datos.usuario == "jgallego@gmail.com" && datos.password == "admin123" ){
                //login ok
                resolve("Bienvenido a netflix")
        
            }
        
            else  {
                //login fail
               reject("No estas registrado registrate")
            }
        },5000)
        
       
    })

    return promesa;

} 

conectarConNetflix(datosUsuario)
.then(function(respuesta){console.log(respuesta) })

.catch (function(respuesta){console.log(respuesta) })
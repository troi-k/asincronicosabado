
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

async function procesarPeticion(datosUsuario){

    try{
        let respuesta= await conectarConNetflix(datosUsuario);
        console.log(respuesta)

    }catch(error){
        console.log(error)
        
    }

}

procesarPeticion(datosUsuario)
// SIMULADOR DE PRESTAMOS ==================================================================

console.log("Bienvenido/a a PrestaFACIL");


//OBJETOS Y ARRAYS ==================================================================================

class Usuario {
    constructor(nombre, apellido, dni) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
    }
  }
  
  
  
  let array_usuarios = [];
  
  function crearUsuarios() {
  
    let respuesta = "";
    let monto = "";

  
    while (respuesta != "no") {
  
      array_usuarios.push(new Usuario (prompt("ingrese su nombre"),prompt("ingrese su apellido"), prompt("ingrese su dni")));
      respuesta = prompt("quiere cargar otro usuario?  (si/no)");
      monto = "";

      if(monto != "FIN"){
        monto = parseFloat (prompt("Solicitar prestamo"));
        let cuotas = parseInt ( prompt("Elija cantidad de cuotas 3-6-9-12 - FIN para salir"));
        console.log("Ingresaste: ", monto ,"$");
        console.log("En",cuotas ,"cuotas");
        console.log("Valor de cuota por mes: ",(monto + interes(monto, cuotas))/cuotas);
        console.log("Saldo a devolver: ",monto + interes(monto, cuotas));
      }
    }
  }
  
     crearUsuarios();
    
    array_usuarios.forEach(element => {
        console.log(element);
    });
  
  


//FUNCIONES ================================================================================

function interes(monto , cuotas){
    let interes;

    if(cuotas == 3){
        interes = monto * 0.08;
        return interes
    }

    else if(cuotas == 6){
        interes = monto * 0.14;
        return interes
    }

    else if(cuotas == 9){
        interes = monto * 0.30;
        return interes
    }

    else if(cuotas == 12){
        interes = monto * 0.65;
        return interes
    }

    else{
        return false
    }
}

//CICLO =================================================================================

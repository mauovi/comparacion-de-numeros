let p = document.getElementById('numero');
let s = document.getElementById('nume');
const pr = (numero, nume) => 
{
   if(numero > nume) {
     return `el numero ${numero} es mayor a ${nume}, la diferencia entre los numeros es de: ${numero - nume}`;
      
   }
  else if (numero == nume){
    return `el numero ${nume} es igual a ${numero}`;
  }
  else{
       return`el numero ${nume} es mayor a ${numero}, la diferencia entre los numeros es de: ${nume - numero}` ;
       
     }
  
}
  pr(5,6)
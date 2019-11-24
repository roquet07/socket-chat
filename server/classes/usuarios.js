

class Usuarios {

 constructor(){

     this.personas = [];

 }

 //Agrega una persona  al arreglo
 agregarPersona ( id, nombre, sala ){
     let persona = { id, nombre,sala };

     this.personas.push(persona);

     return this.personas;
     
 }
  //Obtiene una persona por el id en el arreglo
 getPersona ( id ) {

     let persona = this.personas.filter( persona => persona.id === id)[0];

     return persona;
 }

 //Obtiene todas las personas
 getPersonas(){
   return this.personas;
 }

 getPersonasPorSala( sala ){
     let personasEnSala = this.personas.filter ( persona => persona.sala ===sala );
     return personasEnSala;
 }

 //Elimina una persona del arreglo
 borrarPersona( id ){

    let personaBorrada = this.getPersona(id);

     this.personas = this.personas.filter( persona=> persona.id != id );

     return personaBorrada;
 }



}



module.exports = {
    Usuarios
}
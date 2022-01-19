/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$('p').click(function(e){
   
   console.log("Se presionó un parrafo del documento");

   if(e.target.textContent == "Tabla 2") console.log("Se presionó un parrafo de la tabla 2");
})

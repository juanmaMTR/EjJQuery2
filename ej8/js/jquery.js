/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$('button').eq(0).click(function(){
   let form = $(document.createElement('form'));
   let nombre = $(document.createElement('input'));
   let clave = $(document.createElement('input'));

   form.append(nombre)
   form.append(clave)

   $("body").append(form)

})

$('button').eq(1).click(function(){
   $("div:nth-child(1)").removeClass()

})

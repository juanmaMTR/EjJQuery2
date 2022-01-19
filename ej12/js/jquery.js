/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$("td").click(function(e){
   

   $(e.target).css("background-color", "yellow")

   setTimeout(() => $(e.target).css("background-color", "white"),2000)
   
})
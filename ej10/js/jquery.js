/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$('a').mouseover(function(e){
   
   $("body").css("background-color","red")
})


$('a').mouseleave(function(e){
   $("body").css("background-color","white")  
})

/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$('button:first').css({'color': 'red'})

$('button').eq(0).click(function(){
   $("div:nth-child(1)").addClass("prim")
})

$('button').eq(1).click(function(){
   $("div:nth-child(1)").removeClass()

})

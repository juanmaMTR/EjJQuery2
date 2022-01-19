/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$("input").focus(function(){
   $(this).css("color", "red")
})

$("input").focusout(function(){
   $(this).css("color", "blue")
})
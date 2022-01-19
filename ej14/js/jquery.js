/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$("input").focus(function(){
   console.log("ee");
   $(this).val("")
})
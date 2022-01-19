/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$("button").eq(1).click(function(){
   $("textarea").fadeIn("slow")
})

$("button").eq(0).click(function(){
   $("textarea").fadeOut("fast");
})
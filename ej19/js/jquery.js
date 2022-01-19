/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$("button").eq(1).click(function(){
   $("textarea").fadeTo("slow","0.4")
})

$("button").eq(0).click(function(){
   $("textarea").fadeTo("slow", "1");
})
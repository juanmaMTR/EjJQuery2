/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$("button").eq(0).click(function(){
   $("textarea").hide("slow")
})

$("button").eq(1).click(function(){
   $("textarea").show("fast");
})
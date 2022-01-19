/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'

$("button").eq(0).click(function(){
   $("ul").hide();
})

$("button").eq(1).click(function(){
   $("ul").show();
})

$("button").eq(2).click(function(){
   $("li:first").remove();

})


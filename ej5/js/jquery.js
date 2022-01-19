/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'
$('button:nth-child(1)').click(function(){
   alert($("p").text())
})

$('button:nth-child(2)').click(function(){
   $("p").text("adio")
})

$('button:nth-child(3)').click(function(){
   $("td").text("adio")
})
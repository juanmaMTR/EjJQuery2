/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'
$('button:nth-child(1)').click(function(){
   $("table").css("border","1px solid red")
})

$('button:nth-child(2)').click(function(){
  alert($("table").css("border"))
})

$('button:nth-child(3)').click(function(){
   $("table").css("border","0px")
})
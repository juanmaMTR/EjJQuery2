/**
 * jquery.js
 * @author Sergio Matamoros Delgado , Juan Manuel Toscano Reyes
 */
'use strict'




$.each($("p"), function(e, a) {
   if($(a).text().length < 100)
      $(a).css("background-color", "yellow")

})


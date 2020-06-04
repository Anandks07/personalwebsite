/* This file contains functions for

    --> Form validation
    --> Displaying or making a collapsible area on click
    --> Time
*/

function formValidation()
{
var docname = document.registration.fname;
var doccountry= document.registration.country;
var docemail= document.registration.email;

var a=Checkname(docname,docemail);
if(a==true)
{
        var c=Checkaddress(doccountry);
        if(c==true)
        {
            alert("HURRAY !!!!!!!!!!! Your form is successfully submitted...     The form was validated on following criterias.. Name contains only letters. Email has only small letters,numbers,dot and @. Country was chosen.No field was left empty");

        }
    }

}

function Checkname(x,y) 
{
    var letters=/^[A-Za-z" "]+$/;
    var emails=/^[0-9a-z@.]+$/;
  if (x.value.length == 0)
   { 
      alert("Name field is blank");  	
      return false; 
   } 
   if (y.value.length == 0)
   { 
      alert("email field is blank");  	
      return false; 
   } 	
   else if(x.value.match(letters) && y.value.match(emails) )
   {
        return true;
   }
   else{
       alert("Name field should contain alphabets only and email should contain only small letters and @");
       return false;
   }
 }


 function Checkaddress(y)
 {
     var def="Default";
     if(y.value.length==0 || y.value.match(def))
     {
        alert("Country field is blank");
        return false;
     }
     else return true;
 }


/* function for time*/

 function dat(){
    var d = new Date();
    document.getElementById("date").innerHTML = d;
    }

/*function for collapsible menu*/



function collaps(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
        }
     else {
      content.style.display = "block";
    }
  });
}
}
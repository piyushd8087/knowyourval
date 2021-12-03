  
  var firstq;
  var secondq;
  var thirdq;
  var fourth;
  var fifthq;
  var six;
  var seventhq;
  var eightq;
  var nineq;
  var tenq;
  var elevenq;
  var twelq;
  var thirdq;


 function first()
{  

   firstq = document.getElementById("a").value;
   console.log(firstq);
   
   if(firstq == '')
   {
      $('#myModal').modal('show');
   }

   else
   {

   document.getElementById("first").style.display = "none";
   document.getElementById("sec").style.display = "block";

   }
}

 function second()
{  
  secondq = document.getElementById("b").value;
  console.log(secondq);

  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

   
   if(secondq == '')
   {
      $('#myModal').modal('show');
   }

   else if(!secondq.match(email))
   {
         $('#myModal1').modal('show');
   }
   else
   {
   document.getElementById("sec").style.display = "none";
   document.getElementById("third").style.display = "block";
  }
} 

function third()

{
  
  thirdq = document.getElementById("c").value;
  console.log(thirdq);

  var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
   
   if(thirdq == '')
   {
      $('#myModal').modal('show');
   }
   else if(!thirdq.match(phone))
   {
      $('#myModal2').modal('show');
   }
   else
   {
   document.getElementById("third").style.display = "none";
   document.getElementById("fourth").style.display = "block";
   }
   
}
  
function fourth()
{

  fourthq = document.getElementById("d").value;
  console.log(fourthq);
   
   if(fourthq == '')
   {
     $('#myModal').modal('show');
   }
   else
   {
   document.getElementById("fourth").style.display = "none";
   document.getElementById("five").style.display = "block";
   }

}  

function five()
{

  fifthq = document.getElementById("e").value;
  console.log(fifthq);
   
   if(fifthq == '')
   {
     $('#myModal').modal('show');
   }
   else
   {
   document.getElementById("five").style.display = "none";
   document.getElementById("six").style.display = "block";
   }

}  

function six()
{

  sixq = document.getElementById("f").value;
  console.log(sixq);
   
   if(sixq == '')
   {
     $('#myModal').modal('show');
   }
   else
   {
   document.getElementById("six").style.display = "none";
   document.getElementById("seventh").style.display = "block";
   }

}  

function seventh()
{

  seventhq = document.getElementById("h").value;
  console.log(seventhq);
   
   if(seventhq == '')
   {
     $('#myModal').modal('show');
   }
   else
   {
   document.getElementById("seventh").style.display = "none";
   document.getElementById("eight").style.display = "block";
   }

}  


function eight()
{
  
  eightq = document.querySelector('input[name="i"]:checked'); 
  console.log(eightq);
   
   if(eightq == null)
   {
     $('#myModal3').modal('show');
   }
   else
   {
    console.log(eightq.value);
    eightq = eightq.value;
   document.getElementById("eight").style.display = "none";
   document.getElementById("nine").style.display = "block";
   }

}  


function nine()
{

  nineq = document.querySelector('input[name="j"]:checked');
  console.log(nineq);
   
   if(nineq == null)
   {
    $('#myModal3').modal('show');
   }
   else
   {
    console.log(nineq.value);
    nineq = nineq.value;
   document.getElementById("nine").style.display = "none";
   document.getElementById("ten").style.display = "block";
   }

}



function ten()
{

   tenq = document.querySelector('input[name="k"]:checked');
   console.log(tenq);
   
   if(!document.querySelector('input[name="k"]:checked'))
   {
    $('#myModal3').modal('show');
   }
   else
   {
    // console.log(tenq.value);
    // tenq = tenq.value; 
       if(eightq == 5000)
       {
         tenq = 1;
         console.log(tenq);
   
       }
       else if(eightq == 10000)
       {
           if(tenq.value == 1)
           {
               tenq = 1000;

           }
           else if(tenq.value == 2)
           {
               tenq = 5000;
           }
           else if(tenq.value == 3)
           {
               tenq = 10000;
           }
           else if(tenq.value == 4)
           {
               tenq = 20000;
           }
       }
       else if(eightq == 20000)
       {
            if(tenq.value == 1)
           {
               tenq = 2000;    
           }
           else if(tenq.value == 2)
           {
               tenq = 10000;
           }
           else if(tenq.value == 3)
           {
               tenq = 20000;
           }
           else if(tenq.value == 4)
           {
               tenq = 40000;
           }
       }
        else if(eightq == 50000)
       {
            if(tenq.value == 1)
           {
               tenq = 3000;    
           }
           else if(tenq.value == 2)
           {
               tenq = 15000;
           }
           else if(tenq.value == 3)
           {
               tenq = 30000;
           }
           else if(tenq.value == 4)
           {
               tenq = 60000;
           }
       }
        else if(eightq == 100000)
       {
            if(tenq.value == 1)
           {
               tenq = 4000;    
           }
           else if(tenq.value == 2)
           {
               tenq = 20000;
           }
           else if(tenq.value == 3)
           {
               tenq = 40000;
           }
           else if(tenq.value == 4)
           {
               tenq = 80000;
           }
       }

       else if(eightq == 150000)
       {
            if(tenq.value == 1)
           {
               tenq = 5000;    
           }
           else if(tenq.value == 2)
           {
               tenq = 25000;
           }
           else if(tenq.value == 3)
           {
               tenq = 50000;
           }
           else if(tenq.value == 4)
           {
               tenq = 100000;
           }
       }

       else if(eightq == 200000)
       {
            if(tenq.value == 1)
           {
               tenq = 6000;    
           }
           else if(tenq.value == 2)
           {
               tenq = 30000;
           }
           else if(tenq.value == 3)
           {
               tenq = 60000;
           }
           else if(tenq.value == 4)
           {
               tenq = 120000;
           }
       }
   console.log(tenq);
   document.getElementById("ten").style.display = "none";
   document.getElementById("eleven").style.display = "block";
   }

}    



function eleven()
{

  elevenq = document.querySelector('input[name="m"]:checked');
  console.log(elevenq);
   
   if(elevenq == null)
   {
    $('#myModal3').modal('show');
   }
   else
   {
    console.log(elevenq.value);
    elevenq = elevenq.value; 
   document.getElementById("eleven").style.display = "none";
   document.getElementById("twel").style.display = "block";
   }

}    



function twel()
{

  twelq = document.querySelector('input[name="n"]:checked');
  console.log(twelq);
   
   if(twelq == null)
   {
    $('#myModa3').modal('show');
   }
   else
   {
    console.log(twelq.value);
    twelq = twelq.value;
   document.getElementById("twel").style.display = "none";
   document.getElementById("thirteen").style.display = "block";
   }

}    



function thirteen()
{

  thirteenq = document.querySelector('input[name="o"]:checked');
  console.log(thirteenq);
   
   if(thirteenq == null)
   {
    $('#myModal3').modal('show');
   }

   else
   {

   
     
    console.log(thirteenq.value);
    thirteenq = thirteenq.value;   

    var contentworth = (eightq)*(elevenq)*(thirteenq)*(twelq)+(tenq);
    console.log(contentworth);

    var dollars = contentworth / 75.04;

    finalworth = "$"+ parseInt(dollars);
    console.log(finalworth);

    sessionStorage.setItem("contentworth",finalworth);
    console.log(sessionStorage.getItem("contentworth"));
    
    window.location.href = 'final.html';

     let Data = {first:firstq,second:secondq,third:thirdq,fourth:fourthq,fifth:fifthq,six:sixq,seventh:seventhq,eight:eightq,nine:nineq,ten:tenq,
                 eleven:elevenq,twel:twelq,thirteen:thirteenq} 

                  console.log(JSON.stringify(Data)); 
                  let frmdata = JSON.stringify(Data) ;             

        //           $.ajax({
        //     type: "POST",
        //     url: "your url with method that accpects the data",
        //     dataType: "json",
        //     data: frmdata,
        //     success: function (data) {
        //        alert('Success');
                           
        //     },
        //     error: function () {
        //      alert('Error');
        //     }
        // });
   }
  

}    

   window.onload = function exampleFunction() {
            $('input:text').attr('placeholder','Type your answer here');

             let rs =sessionStorage.getItem("contentworth");
             document.getElementById("result").innerHTML = rs;

            
               
        }




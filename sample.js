
function leapyear(){
	var y;

	y = document.getElementById('year').value

	if ((y%4 == 0) && (y%100 != 0) || (y%400 == 0)){

		  console.log(y+"is leap year")
		  l = y+"is leap year"
          document.getElementById("answer2").value= l;

		  }else{

	    console.log(y+"is leap not year")
	    l = y+"is leap not year"
        document.getElementById("answer2").value= l;

	

	}
}


function primeNo(){

	n = document.getElementById('prime').value
     

     if (n == 1){
     	l = n+"is not prime number"
          document.getElementById("answer3").value= l;
     }
     if (n == 2){
     	 l = n+"is prime number"
          document.getElementById("answer3").value= l;
     }

    for(var i=2 ; i<n/2 ; ++i){
    	if(n%i === 0){
    	  l = n+"is not prime number"
          document.getElementById("answer3").value= l;
          break; 
        }else{

  l = n+"is prime number"
  document.getElementById("answer3").value= l;
        }
     }
 
}

// n = document.getElementById('prime').value
// l = primeNo(n)
// document.getElementById('answer').innerHTML = l

function checkOddEven(){
        
        var num;
        num = document.getElementById('number').value

        if(num%2 == 0){

        	console.log(num+"is even number")
        	l = num+"ïs even number"
            document.getElementById("answer1").value= l;

        }else{

        	 console.log(num+"is odd number")
             l =  num+"is odd number"
            document.getElementById("answer1").value= l;

        }

}


function count(){

	for(var i=1 ; i<=50 ; i++)
		if(i%2 == 0){
			document.write(i+'even'+'<br>')
		}else{
			document.write(i+'odd'+'<br>')
		}
}


function factorial(){

var  n, fact;
fact=1;
n=document.getElementById("num").value;
for(var i=1; i<=n; i++)  
{
fact= fact*i;
}  
document.getElementById("answer").value= fact;
}


function addition(){
         
       x = document.getElementById('num1').value 
       y = document.getElementById('num2').value 

     var c;

	while(y!=0){
		c=x&y
		x=x^y
		y=c<<1
	}
    document.getElementById('ans4').value = x	

}

// console.log(addition(4,5))
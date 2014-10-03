function start(){
var keys = document.getElementsByTagName('span');

 var btnHold = [];
 var possibleNums = [1,2,3,4,5,6,7,8,9];
 var clickedNums = [];
  
for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function() {

      var input = document.querySelector('.screen');
      var rollInput = document.querySelector('.rollScreen')
      var inputVal = input.innerHTML;
      var rollInputVal = rollInput.innerHTML;
      var btnVal = this.innerHTML;
 
      if(btnVal == 'C') 
        {
        input.innerHTML = '';
          btnHold.length= 0;
         }
       else if(btnVal=='Roll')
         {
           if(rollInput.innerHTML =='Correct! Roll Again' || rollInput.innerHTML == '' || rollInput.innerHTML == 'You need to roll first!')
             {
               rollInput.innerHTML =  Math.floor(Math.random()*6) +1 + Math.floor(Math.random()*6) +1;
               input.innerHTML = '';
             }
         }  
        else if(btnVal== 'Check')
          {
            if(eval(rollInputVal)==eval(inputVal))
            {
              rollInput.innerHTML ='Correct! Roll Again';
              for(var p = 0; p<btnHold.length; p++)
                {
                  for(var q = 0; q<keys.length; q++)
                    {
                      if (keys[q].innerHTML == btnHold[p])
                        {
                          keys[q].innerHTML ='';
                        }
                    }

                }
              
             }

            else if(rollInputVal =='')
            {
              rollInput.innerHTML ='You need to roll first!';
              
            }
            
            btnHold.length= 0;

          }
      else if(btnVal=='End Game')
        {
          
          if(clickedNums.length == possibleNums.length){
            rollInput.innerHTML = "You Win";
          }
            
          else rollInput.innerHTML= "Sorry, you lose! Play Again";
          document.querySelector('.end').innerHTML="Play Again";
        
        }
    else if(btnVal =="Play Again"){
      location.reload();

    }
        
      else if(btnVal=='+' || inputVal.indexOf(btnVal) < 0){
         input.innerHTML += btnVal;
            if(btnVal !='+' && bthHold.length==0)
            {
              btnHold.push(btnVal);
              clickedNums.push(btnVal);
            }
          }
                   
     }
   }

}
start();



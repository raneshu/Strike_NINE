function start(){
var keys = document.getElementsByTagName('span');

 var btnHold = [];
 var possibleNums = [1,2,3,4,5,6,7,8,9];
 var clickedNums = [];
  
for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function() {

      var input = document.querySelector('.screen');
      var rollInput = document.querySelector('.rollScreen')
      var btnVal = this.innerHTML;

      switch(btnVal){
      case'C':
        input.innerHTML = '';
        btnHold.length= 0;
        break;
      case'Roll':
        if(rollInput.innerHTML=='Correct! Roll Again' || rollInput.innerHTML== '' || rollInput.innerHTML== 'You need to roll first!'){
               rollInput.innerHTML=  Math.floor(Math.random()*6) +1 + Math.floor(Math.random()*6) +1;
               input.innerHTML = '';
        }
        break;  

         //check------------------------------
      case'Check':            
            function getSum(arr){
              var sum =0;
              for(var i=0;i<arr.length;i++){
                sum+=parseInt(arr[i]);
              }
              return sum
            }
            if(rollInput.innerHTML==''){
              rollInput.innerHTML='You need to roll first!';
              
            }
            else if(eval(rollInput.innerHTML)== getSum(btnHold)){
              rollInput.innerHTML= 'Correct! Roll Again';
              for (var i=0;i<btnHold.length;i++){
                clickedNums.push(btnHold[i]);
              }
              for(var p = 0; p<btnHold.length; p++){
                  for(var q = 0; q<keys.length; q++){
                      if (btnHold[p] == keys[q].innerHTML){
                          keys[q].innerHTML ='';
                        }
                    }
                }
              
             }

           btnHold.length= 0;
          break;
          
      case 'End Game':
    
          if(clickedNums.length == possibleNums.length){
            rollInput.innerHTML= "You Win";
          }
            
          else rollInput.innerHTML= "Sorry, you lose! Play Again";
          document.querySelector('.end').innerHTML="Play Again";
        break;

      case "Play Again":
        location.reload();
        break;
       
      default:
       if (input.innerHTML.indexOf(btnVal) < 0){
            btnHold.push(btnVal);
            input.innerHTML = btnHold;            
            }
        break;
      }//for switch          
                   
     }
   }
 }
start();



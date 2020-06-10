// var er en container som opbevarer indhold - indholdet her er selve quizzen med ul, button, scorecard, questionbox, op1, op2, op3, op4
var ul=document.getElementById('ul'); // document refererer til HTML siden. den refererer her til id i HTML 'ul'
   var btn=document.getElementById('button'); //getElementById er en method(method) som giver adgang til vores id på HTML siden. en method en funktion, og kan tage og give værdier  */
   var scoreCard=document.getElementById('scoreCard'); // . betyder at vi er i gang med at tilføje en værdi til vores method 
   var quizBox=document.getElementById('questionBox'); // ('questionBox') er en såkaldt parameter som giver en værdi til vores method. og det fører tilbage til vores HTML. herefter tillader den os at lave forskellige ting med den */
  var op1=document.getElementById('op1'); 
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={ //app indeholder vores 10 spørgsmål
                questions:[ 
                          
                  
                          {q:'Hvilken brik er den stærkeste og mest effektive?', options:['Bonden','Kongen','Springeren','Dronningen'],answer:4},

                          {q:'Hvor er tårnet placeret på skakbrættet?',options:['Midten','Yderst','Forest','Tæt på Kongen'],answer:2},

                          {q:'Hvilket træk må en Løber tage?',options:['Kun skråt','Kun ligeud','Kun ét skridt','Kan tage alle skridt'],answer:1},

                          {q:'Hvilket træk må en Dronning tage?',options:['Kun skråt','Kun ligeud','Kun ét skridt','Kan tage alle skridt'],answer:4},

                          {q:'Hvor mange skakbrikker starter man med?',options:['13','14','12','16'],answer:4},
                          
                          {q:'Hvilken brik kan blive til en Dronning, hvis den når modstanderens ende af brættet?',options:['Tårnet','Bonden','Springeren','Løberen'],answer:2},

                          {q:'Hvilket udsagn bruger man, når modstanderen har tabt?',options:['Skakmat','Skakbrik','Taber','Skakfærdig'],answer:1},

                          {q:'Hvilken brik kan rykkes med en L-form?',options:['Løberen','Springeren','Dronningen','Tårnet'],answer:2},

                          {q:'Hvilken brik kan kun tage ét skridt, men i alle retninger?',options:['Bonden','Dronningen','Tårnet','Kongen'],answer:4},

                          {q:'Hvilken brik kan kun rykke ét skridt fremad og kun dræbe skråt?',options:['Tårnet','Kongen','Bonden','Dronningen'],answer:3},
                          ],
               
                
                index:0,
                load:function(){ //function udfører en opgave eller fastsætter en værdi
                	   if(this.index<=this.questions.length-1){       //if er hvis resultatet er rigtigt
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0]; /*innerHTML er hvad der er inde mellem tag'sne på selve HTML siden - her er det inde i svarmulighed nummer 1*/
                        op2.innerHTML=this.questions[this.index].options[1]; 
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard(); // this referrer til scorecard som viser hvor mange rigtige man har fået*/
                        }
                        else{     // else betyder at hvis resultatet er forkert - her vises det at de tre forkerte svar sker der ingenting med når man har valgt sit svar*/

                        quizBox.innerHTML=""      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){ //
                    this.index++; // ++ forøger
                    this.load(); //
                 },
                check:function(ele){ 
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){ 
                         	this.score++; // ++ forsøger scoren når man svarer rigtigt
                         	ele.className="korrekt"; // class name man style på i css
                         	ele.innerHTML="Korrekt"; // hvad op1, op2, op3, op4 viser når man svarer korrekt
                         	this.scoreCard(); // this refererer til scorecard 
                         }
                         else{   
                         	ele.className="forkert"; /*class navn når man styler i css*/
                         	ele.innerHTML="Forkert"; /*hvad skærmen viser når man har svaret forkert*/
                         }
                },
                notClickAble:function(){ 
                       for(let i=0;i<ul.children.length;i++){ 
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score; 
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){ //next er navnet på vores function
              app.next();
              app.clickAble();
         }

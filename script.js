/* var er en container som opbevarer alt indhold - her indeholder der spørgsmål, knap, spørgsmålsbokse, scorecard mm. */
var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
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
               
                /*function udfører en bestemt opgave*/
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){       /*if betyder at hvis resultatet er rigtigt*/
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard(); /* this referrer til scorecard som viser hvor mange rigtige man har fået*/
                        }
                        else{     /*else betyder at hvis resultatet er forkert - her vises det at de tre forkerte svar sker der ingenting med når man har valgt sit svar*/

                        quizBox.innerHTML=""      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++; /* den stiger dvs går videre til næste spørgsmål*/
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){ 
                         	this.score++; /*score stiger når man har svaret rigtigt*/
                         	ele.className="korrekt"; /*class navn man style på i css*/
                         	ele.innerHTML="Korrekt"; /*hvad skærmen viser når man har svaret korrekt*/
                         	this.scoreCard(); /*korrekte svar vises igen på scorecard*/
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

         function  next(){
              app.next();
              app.clickAble();
         }

/*
    name: Ahmed Sayed Hassan
    ID:   20190034
    Group:(9)
*/ 
function reload() { //Ajax
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "learn.html", true);
    xhttp.send();
}

var FirstScreen=document.getElementById("FirstScreen");
var SecondScreen =document.getElementById("SecondScreen");
var value={previous:null , new:null}
var Sympols ='';
var Check=false;

function insert(num){//Insert New Number
  var result; 
  if(value.previous=='.'){
    return Number(value.previous); 
  }if(value.new=='.'){
    return Number(value.new);
  }
  if(Check){
    if(value.new){
      result=value.new+''+num;
      value.new=result;
      return SecondScreen.value=result;

    }else{
      result=value.previous+''+num;
      value.previous=result;
      return SecondScreen.value=result;
    }
  }else{
    SecondScreen.value=num;
    if(value.previous){
      value.new=num;
    }else{
      value.previous=num;
    }
  }
  Check=true;
}

function operation(oper){//Insert Sympols
  Sympols=oper;
  return Check=false;
}

function calculate(){//Calculator 
  if(!value.new){
      return FirstScreen.value=SecondScreen.value;
  }else if(value.new && Sympols &&value.previous){
    if(Sympols==='+'){
      SecondScreen.value=value.previous+ '+' +value.new;
      var newNumber=Number(value.previous) + Number(value.new);
      value.previous=newNumber;
      return FirstScreen.value=value.previous;
    }
    if(Sympols==='-'){
      SecondScreen.value=value.previous+ '-' +value.new;
      var newNumber=Number(value.previous) - Number(value.new);
      value.previous=newNumber;
      return FirstScreen.value=value.previous;
    }
    if(Sympols==='*'){
      SecondScreen.value=value.previous+ '*' +value.new;
      var newNumber=Number(value.previous) * Number(value.new);
      value.previous=newNumber;
      return FirstScreen.value=value.previous;
    }
    if(Sympols==='/'){
      SecondScreen.value=value.previous+ '÷' +value.new;
      var newNumber=Number(value.previous) / Number(value.new);
      value.previous=newNumber;
      return FirstScreen.value=value.previous;
    }
  }
  Check=false;
}
function del(){//Delete All Number In Both Screen
  return (SecondScreen.value='' , FirstScreen.value='' ,value.new='' ,value.previous='');
}

function clearNumberByNumber(){//Clear Number From Both Screen
  SecondScreen.value = SecondScreen.value.substring(0,SecondScreen.value.length-1);
  if(!value.new){
    return value.previous=SecondScreen.value;
  }else{
    return value.new=SecondScreen.value;
  }
}
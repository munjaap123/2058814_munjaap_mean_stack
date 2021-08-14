
var array = [];
var array2 = [];

function storeData() {

    const table = localStorage.getItem("input");
    if (table === null) {
        array = [];
    }else {
        array2 = JSON.parse(table);
    }
    var clientName=document.getElementById("Client").value;
    var projectName=document.getElementById("Project").value;
    var budget=document.getElementById("Budget").value;


    var value = {client: clientName, p: projectName, b: budget,}
    array.push( value);

        localStorage.setItem("input", JSON.stringify(array));
        array.push.apply(array, array2);
}


function display() {
    
    
    let input = localStorage.getItem("input");
    let inputJson = JSON.parse(input);
    var tableContent = "";
    var sumOfbudget = 0;
    var startTable ="<table border=1><tr><th>Client</th><th>Project Name</th><th>Budget</th></tr>"
    for(var i=0; i<inputJson.length; i++) {
        tableContent +="<tr><td>"+inputJson[i].client+"</td><td>"+inputJson[i].p +"</td><td>"+"$"+ inputJson[i].b + "</td></tr>"
        sumOfbudget += Number(inputJson[i].b); 
    }
    tableContent +="<tr><td>"+"Total Budget"+"</td><td>"+"</td><td>"+"$"+sumOfbudget+"</td></tr>"
  
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("table").innerHTML=tableContent;
} 


function deleteEntry(){
        localStorage.removeItem('input');
       // alert("Cleared all data");
    
}
   
   
   
 

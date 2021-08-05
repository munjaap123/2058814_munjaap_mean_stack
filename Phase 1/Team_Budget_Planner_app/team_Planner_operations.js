function display() {
    
        // take value from text field using id or name
        //we can store json object. but we have to convert 
        // into string. 
        
        let clientName = JSON.parse(localStorage.getItem("Client") || "[]");

        var tableContent = "";
        var startTable ="<table border=1><tr><th>Id</th><th>Name</th><th>Age</th></tr>"
        clientName.forEach(element => {tableContent ="<tr><td>"+clientName.id+"</td><td>"+projectName.name+"</td><td>"+budget.age+"</td></tr>"});
        var endTable = "</table>";
        tableContent = startTable + tableContent + endTable;
        document.getElementById("table").innerHTML=tableContent;
    
    }
    
    function storeData() {
        clientName=document.getElementById("Client").value;
        projectName=document.getElementById("Project").value;
        budget=document.getElementById("Budget").value;
    }

    /* var startTable ="<table border=1><tr><th>Id</th><th>Name</th><th>Age</th></tr>"
    
    tableContent ="<tr><td>"+empJson.id+"</td><td>"+empJson.name+"</td><td>"+empJson.age+"</td></tr>"

clientName=document.getElementById(client).value;

let projectName = JSON.parse(localStorage.getItem("Project") || "[]");
        var tableContent = "";
    
        companies.push(company);
        localStorage.setItem("companies", JSON.stringify(companies)) */
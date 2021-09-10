
var shopcart:{name:string; price:string}[] = [];
var alt:{name:string; price:string}[] = [];
//let price: string;
var currentCount = 0;
//let item: string;
var items: {item: string, price: string};
var itemStrings;
var currentCount = 0;
var i: number = shopcart.length;;

var tableContent;
//var shopAwayCart: any[] = [];
//var item:string = "";

function addItem(item, price){
   //item = {nm: name, p: price, qty: currentCount};
    //console.log(item);
    //console.log(price);
    const cart:string = localStorage.getItem('entryObj') || '{}';
    if(cart === null){
      shopcart = [];
    }else{
      alt = JSON.parse(cart);
    }
  

  let names = (<HTMLInputElement>document.getElementById("name")).innerHTML;
  let prices = (<HTMLInputElement>document.getElementById("price")).innerHTML;
    var counting = document.createElement("keys");
    document.getElementById("cartItems").appendChild(counting);
    currentCount++;
    
      
    let entry:{name:string; price:string;} = {name:names, price:prices};
    shopcart.push(entry);
    shopcart.push.apply(shopcart, alt);
    localStorage.setItem("entryObj",JSON.stringify(shopcart));
    currentCount++;
    //items = { i: item, p: price};
    //itemStrings = JSON.stringify(item);
    //localStorage.setItem("Items", itemStrings);
    

    //shopAwayCart.push(items);
    //localStorage.setItem("Shopping Items:", JSON.stringify(shopAwayCart));
    }

function display(): any{

  let entryObj:string = localStorage.getItem('entryObj') || '{}';
  let entryJson:{item:string; price:string;}[] = JSON.parse(entryObj);
  var tableContent:string="";
  var startTable:string ="<table border=1><tr><th>Item name</th><th>    </th><th>price</th></tr>"
  var sum:number = 0;
  //let table= <HTMLDivElement>document.getElementById('table-content');

  
  for( i = 0; i<entryJson.length; i++) {
    tableContent += "<tr><td>" + entryJson[i].item + entryJson[i].price;
    //tableContent += "<tr><td>" + 
}


/*function removeItem(itemName:string){
    let comps = JSON.parse(sessionStorage.getItem("comps") || "[]");
    let filtered;
    console.log(comps);
    for(let i:number=0; i<comps.length;i++){
        filtered = comps.filter(o => !(o.it.includes("Peach")));
    }
    comps = filtered;
    console.log(comps);
} */
}

  

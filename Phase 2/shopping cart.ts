

var price: string;
var currentCount = 0;
var item: string;
var items: any;
var itemStrings;
var currentCount = 0;
var i: number;

var tableContent;
var shopAwayCart: any[] = [];
//var item:string = "";

function addItem(){
   //item = {nm: name, p: price, qty: currentCount};
    console.log(item);
    console.log(price);
    var counting = document.createElement("keys");
    document.getElementById("cartItems").appendChild(counting);
    currentCount++;

    items = { i: item, p: price, qty: currentCount};
    itemStrings = JSON.stringify(item);
    localStorage.setItem("Items", itemStrings);


    shopAwayCart.push(items);
    localStorage.setItem("Shopping Items:", JSON.stringify(shopAwayCart));

    for( i = 0; i<items.length; i++) {
    tableContent += "<tr><td>" + items[i].item;
    tableContent += "<tr><td>" + items[i].price;
    tableContent += "<tr><td>" + items[i].item;

    }
}

function display(): any{
  let table= <HTMLDivElement>document.getElementById('table-content');

  if(table){
      table.innerHTML = tableContent;
  }
  for( i = 0; i<items.length; i++) {
    tableContent += "<tr><td>" + items[i].i;
    tableContent += "<tr><td>" + items[i].p;
    tableContent += "<tr><td>" + items[i].item;
}



//var counting = document.createElement("keys");

//document.getElementById("cartItems").appendChild(counting);
//currentCount++;


//item = {nm: name, p: price, qty: currentCount};
//itemStrings = JSON.stringify(item);
/*localStorage.setItem("Items", itemStrings);


shopAwayCart.push(item);
localStorage.setItem("Shopping Items:", JSON.stringify(shopAwayCart));

  
}

function display(){

let table= <HTMLDivElement>document.getElementById('table-content');

if(table){
    table.innerHTML = tableContent;
}

}*/

/*function removeItem(itemName:string){
    let comps = JSON.parse(sessionStorage.getItem("comps") || "[]");
    let filtered;
    console.log(comps);
    for(let i:number=0; i<comps.length;i++){
        filtered = comps.filter(o => !(o.it.includes("Peach")));
    }
    comps = filtered;
    console.log(comps);
}



/*type Offer = {
    price: number,
    amount: number,
  }
  
  type Product = {
    id: string,
    name: string,
    price: number,
    offer: Offer | null,
  }

  const products: Array<Product> = [
    {id: 'peach', name: 'Peach', price: 50, offer: {price: 130, amount: 3}},
    {id: 'grapes', name: 'Grapes', price: 30, offer: {price: 45, amount: 2}},
    {id: 'watermelon', name: 'Watermelon', price: 60, offer: null},
    //{id: 'T34', name: 'Tangerine', price: 99, offer: null},
  ];
  export const checkout = (itemIds: Array<string>): number => {
    let total: number = 0;
    const talliedIds: Array<Array<string>> = (
      products.map((product: Product): Array<string> => (
        itemIds.filter((item: string): boolean => item === product.id)
      ))
    );
  
    talliedIds.forEach((talliedId: Array<string>) => {
      let tally: number = 0;
      talliedId.forEach((id: string, i: number) => {
        const product: Product | undefined = products.find((p: Product) => p.id === id);
        if (product) {
          const { offer, price } = product;
          if (offer) {
            const { price: offerPrice, amount } = offer;
            if (tally < amount - 1) {
              tally ++;
              if (i === talliedId.length -1) {
                total += tally * price;
              }
            } else {
              tally = 0;
              total += offerPrice;
            }
          } else {
            total += price;
         }
         }
      });
    });
  
    return total;
  };
  
  export const getFullTotal = (itemIds: Array<string>): number => (
    itemIds.map((id: string) => {
      const product: Product | undefined = products.find((p: Product) => p.id === id);
      return product ? product.price : 0;
    }).reduce((a: number, b: number) => a + b, 0)
  );
  
  export const getTotal = () => {
    const itemIds: Array<string> = process.argv.slice(1);
    itemIds.forEach((id: string) => {
      const product: Product | undefined = products.find((p: Product) => p.id === id);
      console.log(product ? `${product.name}: ${product.price}` : `Product ${id} not found`);
    });
    const checkoutTotal = checkout(itemIds);
    const savedAmount = getFullTotal(itemIds) - checkoutTotal;
    console.log(`The total is ${checkoutTotal}${savedAmount ? `, you saved ${savedAmount} today.` : `.`}`);
  } */
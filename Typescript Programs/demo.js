console.log("Welcome to typescript");
/*declare class Map<T, U> {
    set(t:T, u:U):Map<T, U>
    has(t:T):boolean;
    delete(t:T):Map<T,U>
    count:number;
}

type SKU = string;

type Item = {
    sku: SKU,
    quantity: number
};

type Items = Map<SKU, Item>;


// Cart states.

// enum tags let you get nominal types instead of structural
// which in turn lets us differentiate between Loaded and Paid carts
// that have the same structure

enum TEmpty{}
enum TLoaded{}
enum TPaid{}

class Empty {
    private tag:TEmpty;
}
class Loaded {
    private tag:TLoaded;
    constructor(public items:Map<SKU, Item>) {}
}
class Paid {
    private tag:TPaid;
    constructor(public items:Map<SKU, Item>) {}
}

type Cart = Empty | Loaded | Paid

export function create():Empty {
    return new Empty();
}

// Add an item to a cart that isn't in the paid state.
export function addItem(cart: Loaded | Empty, item: Item):Loaded {
    var items: Map<SKU, Item>;
    if (cart instanceof Loaded) {
        items = cart.items;
    }
    else {
        items = new Map();
    }
    return new Loaded(items.set(item.sku, item));
};

// Remove an item from a non-empty, non-paid cart.  Note: you may receive a
// loaded or an empty cart back, so your code *must* branch after this call
// or flow will fail to compile your code!
export const removeItem
    : (cart: Loaded, item: Item) => Loaded | Empty
    = (cart, item) => {
        const items = cart.items;
        if (!items.has(item.sku)) {
            throw new Error(`Item is not in cart: ${ item.sku }.`);
        }
        var res = items.delete(item.sku);
        return res.count === 0
            ? new Empty()
            : new Loaded(res);
    };

// Replace an item in a non-empty, non-paid cart.
export const replaceItem
    : (cart: Loaded, item: Item) => Loaded
    = (cart, item) => {
        const items = cart.items;
        if (!items.has(item.sku)) {
            throw new Error(`Item is not in cart: ${ item.sku }.`);
        }
        return new Loaded(items.set(item.sku, item));
    };

// Pay for a non-empty, non-paid cart.
export const pay
    : (cart: Loaded) => Paid
    = (cart) => {
        // do some payments stuff here
        return new Paid(cart.items);
    };

// Some example code:

const emptyCart = create(); // cart is Empty
const singleItemCart = addItem(emptyCart, { sku: '123213', quantity: 2 }); // cart is Loaded
const paidCart = pay(singleItemCart);

// Some example code that does *not* compile.

// this line should fail to type-check since you can't call `removeItem` with
// an empty cart (removeItem does not accept `Empty`):
const cart = removeItem(create(), { sku: '123213', quantity: 2 });

// this is also an error, as you can only pay loaded carts, but not paid. The enum tag
// ensures that the type's structure is different.
const twicePaidCart = pay(paidCart) */ 

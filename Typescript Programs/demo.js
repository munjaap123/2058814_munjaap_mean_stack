// Cart states.
// enum tags let you get nominal types instead of structural 
// which in turn lets us differentiate between Loaded and Paid carts
// that have the same structure
var TEmpty;
(function (TEmpty) {
})(TEmpty || (TEmpty = {}));
var TLoaded;
(function (TLoaded) {
})(TLoaded || (TLoaded = {}));
var TPaid;
(function (TPaid) {
})(TPaid || (TPaid = {}));
class Empty {
}
class Loaded {
    constructor(items) {
        this.items = items;
    }
}
class Paid {
    constructor(items) {
        this.items = items;
    }
}
export function create() {
    return new Empty();
}
// Add an item to a cart that isn't in the paid state.
export function addItem(cart, item) {
    var items;
    if (cart instanceof Loaded) {
        items = cart.items;
    }
    else {
        items = new Map();
    }
    return new Loaded(items.set(item.sku, item));
}
;
// Remove an item from a non-empty, non-paid cart.  Note: you may receive a
// loaded or an empty cart back, so your code *must* branch after this call
// or flow will fail to compile your code!
export const removeItem = (cart, item) => {
    const items = cart.items;
    if (!items.has(item.sku)) {
        throw new Error(`Item is not in cart: ${item.sku}.`);
    }
    var res = items.delete(item.sku);
    return res.count === 0
        ? new Empty()
        : new Loaded(res);
};
// Replace an item in a non-empty, non-paid cart.
export const replaceItem = (cart, item) => {
    const items = cart.items;
    if (!items.has(item.sku)) {
        throw new Error(`Item is not in cart: ${item.sku}.`);
    }
    return new Loaded(items.set(item.sku, item));
};
// Pay for a non-empty, non-paid cart.
export const pay = (cart) => {
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
const twicePaidCart = pay(paidCart);

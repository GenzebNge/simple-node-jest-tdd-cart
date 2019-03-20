'use strict';

class CartItem {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }
}

function fmtItemizedList(list) {
    return list.map(i => `${i.item.name} x${i.quantity} - $${i.quantity * i.item.price}.00`);
}

module.exports = class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, quantity = 1) {
        this.items.push(new CartItem(item, quantity));
    }

    totalPrice() {
        var total = 0;
        this.items.forEach(i => total += (i.item.price * i.quantity));
        return total;
    }

    itemQuantities() {
        return this.items.map(i => `${i.item.name} - x${i.quantity}`);
    }

    itemizedList() {
        return fmtItemizedList(this.items);
    }

    onSaleItems() {
        return fmtItemizedList(this.items.filter(i => i.item.onSale));
    }

}
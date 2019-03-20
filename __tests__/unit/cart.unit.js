const Cart = require('../../cart');
const Item = require('../../item');

describe('Unit test suite for Cart', () => {
    describe('upon initialization', () => {
        it('cart should be empty', () => {
            let cart = new Cart();
            expect(cart.items).not.toBe(undefined);
            expect(cart.items.length).toBe(0);
        });
    });
    describe('when i add an item', () => {
        let cart = new Cart();
        cart.addItem(new Item('foo', 1));
        it('cart should have an item and the correct total', () => {
            expect(cart.items.length).toBe(1);
            expect(cart.totalPrice()).toBe(1);
        });
        it('cart should have two items with correct price', () => {
            cart.addItem(new Item('bar', 2), 2);
            expect(cart.items.length).toBe(2);
            expect(cart.totalPrice()).toBe(5);
        });
    });
    describe('when i add multiple items', () => {
        let cart = new Cart();
        cart.addItem(new Item('foo', 1));
        cart.addItem(new Item('bar', 2), 2);
        it('cart should reflect correct quantities', () => {
            expect(cart.itemQuantities().length).toBe(2);
            expect(cart.itemQuantities()[0]).toBe('foo - x1');
            expect(cart.itemQuantities()[1]).toBe('bar - x2');
        });
        it('cart should reflect correct itemized list', () => {
            expect(cart.itemizedList().length).toBe(2);
            expect(cart.itemizedList()[0]).toBe('foo x1 - $1.00');
            expect(cart.itemizedList()[1]).toBe('bar x2 - $4.00');
        });
        it('cart should reflect correct sale items list', () => {
            expect(cart.onSaleItems().length).toBe(0);
            cart.addItem(new Item('foobar', 5, true), 5);
            expect(cart.onSaleItems().length).toBe(1);
            expect(cart.onSaleItems()[0]).toBe('foobar x5 - $25.00');
        });
    });

});
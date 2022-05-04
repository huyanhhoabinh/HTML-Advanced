const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if(typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
            return this._meal;
        }
    },
    get todaysSpecial() {
        if(typeof this._meal === 'string' && typeof this._price === 'number')   {
            console.log(`Today’s Special is ${this._meal} for $${this._price}!`);
        } else {
            console.log('Meal or price was not set correctly!');
        }
    },
    set price(priceToCheck) {
        if(typeof priceToCheck  === 'number') {
            this._price = priceToCheck;
            return this._price;
        }
    }
};
menu.meal = 'beaf';
menu.price = 10;
menu.todaysSpecial;




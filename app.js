

class Product {
    
    #id;
    #title;
    #description;
    #price;
    #thumbnail;
    #code;
    #stock;

    constructor(id, title, description, price, thumbnail, code, stock) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#thumbnail = thumbnail;
        this.#price = price;
        this.#code = code;
        this.#stock = stock;
    }

    get id(){
        return this.#id;
    }

    set id(_id){
        this.#id = _id;
    }

    get title() {
        return this.#title;
    }
    set title(_title) {
        this.#title = _title;
    }

    get description() {
        return this.#description;
    }
    set description(_description) {
        this.#description = _description;
    }

    get price() {
        return this.#price;
    }
    set price(_price) {
        this.#price = _price;
    }
    
    get thumbnail(){
        return this.#thumbnail;
    }

    set thumbnail(_thumbnail){
        this.#thumbnail = _thumbnail;
    }

    get thumbnail() {
        return this.#thumbnail;
    }
    set thumbnail(_thumbnail) {
        this.#thumbnail = _thumbnail;
    }

    get code() {
        return this.#code;
    }
    set code(_code) {
        this.#code = _code;
    }

    get stock() {
        return this.#stock;
    }
    set stock(_stock) {
        this.#stock = _stock;
    }

    toString() {
        return `Product: { id: ${this.#id}, title: ${this.#title}, description: ${this.#description}, price: ${this.#price}, thumbnail: ${this.#thumbnail}, code: ${this.#code}, stock: ${this.#stock} }`;
    }
}

class ProductManager {

    constructor(){
        this.products = [];
    }

    addProduct( title, description, price, thumbnail, code, stock ){

        if(this.products.find(p => p.code === code)){
            console.error(`ERR: ${code} ya existe!`)
            return;
        }

        if( !title.trim().length || 
            !description.trim().length || 
            parseFloat(price) <= 0 ||
            !thumbnail.trim().length ||
            !code.trim().length ||
            stock <= -1
            ){
            
            console.error('ERR: Todos los campos son obligatorios!')
            return;
        }

        let last_id = 0
        if (this.products.length > 0){
            last_id = this.products[this.products.length - 1 ].id + 1;
        }

        const p = new Product(last_id, title, description, price, thumbnail, code, stock);
        this.products.push(p);
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const p = this.products.find(p => p.id == id)
        if(!p){
            console.error('ERR: Not found!')
            return;
        }
        return p;
    }

}

function main(){
    const pManager = new ProductManager();
    console.log(pManager.getProducts());
    pManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    console.log(pManager.getProducts());
    pManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    console.log(pManager.getProductById(0).toString());
    pManager.getProductById(1);
}

main();

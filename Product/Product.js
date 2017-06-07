
class Product{

    constructor(id, qnt){

        this.id = id;
        this.qnt = qnt;

        this.description = 'Unknown product';

    }

    getId(){
        return this.id;
    }

    getQnt(){
        return this.qnt;
    }

    setQnt(value){
        this.qnt = value;
    }

    getDescription(){
        return this.description;
    }

}

export default Product;



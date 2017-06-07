import Product from './Product';


class Carrot extends Product{

    constructor(id, carrotQnt){

        super(id, carrotQnt);

        this.description = 'Carrot';

    }

}


export default Carrot;
import RabbitProfile from './RabbitProfile';


class RabbitProfilePickerDecorator extends RabbitProfile{

    constructor(rabbit){

        super(rabbit);

        this.pickedStock = [];

    }


    addStock(product){


    }

    removeStock(product){



    }



}


export default RabbitProfilePickerDecorator;

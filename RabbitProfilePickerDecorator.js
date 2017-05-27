import RabbitProfile from './RabbitProfile';


class RabbitProfilePickerDecorator extends RabbitProfile{

    constructor(rabbit){

        super(rabbit);

        this.data = Object.assign(this.data, {pickedStock : []});

    }


    addStock(product){

        this.pickedStock.push(product);

    }

    removeStock(product){



    }



}


export default RabbitProfilePickerDecorator;

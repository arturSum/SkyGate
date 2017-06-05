
import RabbitProfile from './RabbitProfile';


class PickerRabbitProfile extends RabbitProfile{

    constructor(profileName){

        super(profileName);

        this.pickedStock = [];

    }


    getPickedStock(){

        return this.pickedStock;
    }


    addStock(product){

        this.pickedStock.push(product);

    }

    removeStock(product){

        this.addStock(product);

    }


}

export default PickerRabbitProfile;
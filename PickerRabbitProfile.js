
import RabbitProfile from './RabbitProfile';


class PickerRabbitProfile extends RabbitProfile{

    constructor(profileName){

        super(profileName);

        this.pickedStock = [



        ];

    }

    getData(){

        return{

            pickedStock : this.pickedStock

        }

    }



    addStock(product){

        this.pickedStock.push(product);

    }

    removeStock(product){

        this.addStock(product);

    }


}

export default PickerRabbitProfile;

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

    removeStock(productId, qnt){

        var productQnt,
            valueAfterCount;


        for(var product of this.pickedStock){

            if(product.getId() === productId){

                productQnt = product.getQnt();

                valueAfterCount = productQnt + qnt;

                if( valueAfterCount < 0 ){

                    this.pickedStock.shift();

                }
                else{

                    product.setQnt(valueAfterCount);
                    break;
                }

            }

        }

    }

}

export default PickerRabbitProfile;
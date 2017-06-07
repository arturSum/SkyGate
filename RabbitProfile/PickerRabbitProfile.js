
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

        var productQnt = 0,
            product,
            valueAfterCount = 0,
            pickedStockLength = this.pickedStock.length,

            pickedStockCopy = this.pickedStock.slice();


        for(var i=0; i<pickedStockLength; i++){

            product = pickedStockCopy[i];

            if(product.getId() === productId){

                productQnt = product.getQnt();

                valueAfterCount = productQnt + qnt;

                if( valueAfterCount < 0 ){

                    this.pickedStock.shift();
                    qnt += productQnt;

                }
                else{

                    this.pickedStock[i].setQnt(valueAfterCount);
                    break;
                }

            }

        }


    }

}

export default PickerRabbitProfile;
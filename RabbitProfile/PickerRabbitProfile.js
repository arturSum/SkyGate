
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
            product = null,
            valueAfterCount = 0,
            i = this.pickedStock.length;

        while(i--){

            product = this.pickedStock[i];

            if(product.getId() === productId){

                productQnt = product.getQnt();

                valueAfterCount = productQnt + qnt;

                if( valueAfterCount > 0 ){

                    product.setQnt(valueAfterCount);

                    this.pickedStock.splice(i, 1, product);

                    break;

                }
                else{

                    this.pickedStock.splice(i, 1);

                    qnt += productQnt;

                }

            }




        }






    }

}

export default PickerRabbitProfile;
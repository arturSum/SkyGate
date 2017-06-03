
import LocalStorageModelStore from './LocalStorageModelStore';

import RabbitFactory from './RabbitFactory';
import ProductFactory from './ProductFactory';



var KingdomModelStorageManager = ((ModelStoreStrategy)=>{



    var translateDataOnModel = data=>{

        var modelStorage = {},
            rabbitProfile = null,
            pickedProductStock = null,
            profileId = null;


        for(profileId in data){

            if(data.hasOwnProperty(profileId)){

                rabbitProfile = RabbitFactory.createNewProfile(profileId);

                pickedProductStock = data[profileId]['pickedStock'];

                pickedProductStock.forEach(product=>{

                    rabbitProfile.addStock(
                        ProductFactory.createNew(product.id, product.qnt)
                    );

                });

                modelStorage[profileId] = rabbitProfile;
            }

        }

        return modelStorage;
    };




    return{


        addData(data){

            ModelStoreStrategy.add(
                data.getName(),
                {
                    pickedStock : data.getPickedStock()
                }
            );
        },

        updateData(data){

            this.addData(data);
        },

        deleteData(id){

            ModelStoreStrategy.delete(id);
        },



        //------------------



        getAllData(){

            return this.getData('all');

        },

        getData(dataId){

            var receivedData = ModelStoreStrategy.get(dataId),
                model = null;

            if(receivedData !== false){

                model = translateDataOnModel(receivedData);

            }

            return dataId === 'all'? model : model[dataId];
        },

        hasData(dataId){

            return ModelStoreStrategy.get(dataId) !== false;


        }


    }



})(new LocalStorageModelStore());


export default KingdomModelStorageManager;
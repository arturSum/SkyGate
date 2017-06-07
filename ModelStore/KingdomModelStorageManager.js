
import LocalStorageModelStore from './LocalStorageModelStore';

import RabbitFactory from '../RabbitProfile/RabbitFactory';
import ProductFactory from '../Product/ProductFactory';



var KingdomModelStorageManager = ((ModelStoreStrategy)=>{



    var translateDataOnModel = data=>{

        var modelStorage = [],
            rabbitProfile = null,
            pickedProductStock = null;


        for(var [profileId, profileObj] of data){

                rabbitProfile = RabbitFactory.createNewProfile(profileId);

                pickedProductStock = profileObj['pickedStock'];

                pickedProductStock.forEach(product=>{

                    rabbitProfile.addStock(
                        ProductFactory.createNew(product.id, product.qnt)
                    );

                });

                modelStorage.push(rabbitProfile);

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

            ModelStoreStrategy.update(data.getName(), data);

        },

        deleteData(id){

            ModelStoreStrategy.delete(id);
        },



        //------------------



        getAllData(){

            return this.getData('all');

        },

        getData(dataId){


            var receivedData = JSON.parse(ModelStoreStrategy.get(dataId)),
                model = [];

            if(receivedData !== false && receivedData.length !== 0){

                model = translateDataOnModel(receivedData);

            }

            if(dataId !== 'all'){

                model = model[0];
            }


            return model;
        },

        hasData(dataId){

            return ModelStoreStrategy.get(dataId) !== false;


        }


    }



})(new LocalStorageModelStore());


export default KingdomModelStorageManager;
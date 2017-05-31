
import LocalStorageModelStore from './LocalStorageModelStore';

import RabbitFactory from './RabbitFactory';
import ProductFactory from './ProductFactory';



var KingdomModelStorageManager = ((ModelStoreStrategy)=>{



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


            var pickedStockList = data.getPickedStock.map(product=>{

                return{
                    id : product.getId(),
                    qnt : product.getQnt(),
                    description : product.getDescription()
                }

            });


            ModelStoreStrategy.update(
                data.getName(),
                {
                    pickedStock : pickedStockList
                }
            );
        },

        deleteData(id){

            ModelStoreStrategy.delete(id);
        },



        //------------------



        getAllData(){


            var modelData = this.getData('all'),
                modelStorage = {},

                rabbitProfile = null,
                pickedProductStock = null;


            for(var profileId in modelData){

                if(modelData.hasOwnProperty(profileId)){

                    rabbitProfile = RabbitFactory.createNewProfile(profileId);





                    pickedProductStock = modelData[profileId]['pickedStock'];

                    pickedProductStock.forEach(product=>{

                        rabbitProfile.addStock(
                            ProductFactory.createNew(product.id, product.qnt)
                        );

                    });

                    modelStorage[profileId] = rabbitProfile;
                }

            }

            return modelStorage;
        },

        getData(dataId){



            return ModelStoreStrategy.get(dataId);



        },

        hasData(dataId){

            return ModelStoreStrategy.get(dataId) !== false;


        }


    }



})(new LocalStorageModelStore());


export default KingdomModelStorageManager;

import LocalStorageModelStore from './LocalStorageModelStore';





var KingdomModelStorageManager = ((ModelStoreStrategy)=>{



    return{


        addData(data){

            ModelStoreStrategy.add(data.getName(), data.getData());
        },

        updateData(data){

            ModelStoreStrategy.update(data.getName(), data.getData());
        },

        deleteData(id){

            ModelStoreStrategy.delete(id);
        },



        //------------------



        getAllData(){

            return this.getData('all');
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
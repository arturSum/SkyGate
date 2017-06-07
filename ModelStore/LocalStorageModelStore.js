

import ModelStoreStrategy from './ModelStoreStrategy';


class LocalStorageModelStore extends ModelStoreStrategy{


    constructor(){

        super();


        if(!localStorage['RabbitKingdomModel']){

            localStorage['RabbitKingdomModel'] = JSON.stringify([]);

        }

        this.model = JSON.parse(localStorage['RabbitKingdomModel']);

    }


    add(id, data){

        this.model.push([id, data]);

        this.save();
    }


    update(dataId, data){

        this.delete(dataId);

        this.add(dataId, data);
    }


    delete(dataId){

        this.model.forEach((singleData, index)=>{

            if(singleData[0] === dataId){

                this.model.splice(index, 1);

            }

        });

        this.save();
    }


    get(id = 'all'){

        if(id === 'all'){

            return JSON.stringify(this.model);
        }

        for(var singleData of this.model){

            if(singleData[0] === id){

                return JSON.stringify([singleData])

            }

        }


        return false;

    }

    deleteAll(){

        this.model = [];
        this.save();
    }


    //--------------------------

    save(){

        localStorage['RabbitKingdomModel'] = JSON.stringify(this.model);

    }

}



export default LocalStorageModelStore;
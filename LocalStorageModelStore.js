

import ModelStoreStrategy from './ModelStoreStrategy';


class LocalStorageModelStore extends ModelStoreStrategy{


    constructor(){

        super();

        if(!localStorage['RabbitKingdomModel']){

            localStorage['RabbitKingdomModel'] = JSON.stringify({});

        }

        this.model = JSON.parse(localStorage['RabbitKingdomModel'])

    }


    add(id, data){

        this.model[id] = data;

        this.save();
    }


    update(dataId, data){

        this.model[dataId] = data;

        this.save();

    }


    delete(dataId){

        if(this.model.hasOwnProperty(dataId)){

            delete this.model[dataId];

            this.save();
        }

    }


    get(id = 'all'){

        if(id === 'all'){

            return this.model;
        }

        return this.model.hasOwnProperty(id)? {[id]:this.model[id]} : false;

    }



    //--------------------------

    save(){

        localStorage['RabbitKingdomModel'] = JSON.stringify(this.model);

    }



}



export default LocalStorageModelStore;
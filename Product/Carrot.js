


class Carrot{

    constructor(id, carrotQnt){

        this.id = id;
        this.qnt = carrotQnt;

        this.description = 'Carrot';

    }

    getId(){
        return this.id;
    }

    getQnt(){
        return this.qnt;
    }

    setQnt(value){
        this.qnt = value;
    }

    getDescription(){
        return this.description;
    }


}


export default Carrot;
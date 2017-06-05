


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
    getDescription(){
        return this.description;
    }


}


export default Carrot;
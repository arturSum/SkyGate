

class RabbitProfile{

    constructor(profileName){

        this.name  = profileName;
    }

    getName(){

        return this.name;
    }

    getData(){
        throw 'Method getData must be implements'
    }



}

export default RabbitProfile;
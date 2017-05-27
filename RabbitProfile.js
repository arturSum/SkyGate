
class RabbitProfile{

    constructor(rabbit){

        this.data = {

            memberDetails : rabbit
        }

    }

    getData(){

        return this.data;
    }


}

export default RabbitProfile;

import Carrot from './Carrot';



var ProductFactory = (()=>{

    return{

        createNew(stockId, qnt){



            switch(stockId){

                case '#carrot':
                default:

                    return new Carrot(stockId, qnt);

            }



        }

    }


})();


export default ProductFactory;
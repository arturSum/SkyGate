

var KingdomDataStorageManager = (DataStoreStrategy=>{


    return{

        getAllEntries(){

            return DataManipulationStrategy.getAll();

        },

        updateEntry(){

            DataManipulationStrategy.update();

        },

        saveEntry(){

            DataManipulationStrategy.save();

        },

        deleteEntry(){

            DataManipulationStrategy.delete();

        }


    }



});


export default KingdomDataStorageManager;
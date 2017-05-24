
var IdGenerator = (()=>{

    function *numberGenerator(){

        var currentNumber = 1;

        while(true){
            yield currentNumber++;
        }

    }

    var it = numberGenerator();


    return{

        getNextAvailableValue(){

            return it.next().value;

        }

    }

})();



export{

    IdGenerator

};
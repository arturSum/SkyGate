
import SortingFilter from './SortingFilter';


class CountingSortingFilter extends SortingFilter{

    constructor(){
        super();
    }



    sortData(data, productId = '#carrot'){console.time('sort');


    debugger;

        var singleProfileId = '',
            countedProductQntList = [],
            productObjListInCertainProfile = [],
            currentProductObjNumber = 0,
            productObj = null,
            profileProductQuantity = 0;


        for(singleProfileId in data){

            if(data.hasOwnProperty(singleProfileId)){

                productObjListInCertainProfile = data[singleProfileId].getPickedStock();

                currentProductObjNumber = productObjListInCertainProfile.length;

                while(currentProductObjNumber--){

                    productObj = productObjListInCertainProfile[currentProductObjNumber];

                    if(productObj.getId() === productId){

                        profileProductQuantity =+ productObj.getQnt();
                    }

                }

                countedProductQntList.push(profileProductQuantity);
            }

            profileProductQuantity = 0;
        }


        console.log(countedProductQntList.length);

        //############### SORTING ALGORITHM ################



        var maxProductQnt = Math.max(...countedProductQntList),

            productStateList = Array.from({length:maxProductQnt+1}, ()=>0),

            countedProductQntListLength = countedProductQntList.length,
            qntState = 0,
            productQnt = 0;


        for(var i=1; i<=countedProductQntListLength; i++){

            productQnt = countedProductQntList[i-1];

            qntState = productStateList[productQnt];

            qntState++;

            productStateList[productQnt] = qntState;
        }


        //-----------------------------------------------------------


        var currentStateValue, previousStateValue,
            productStateListLength = productStateList.length;

        for(var x=1; x<productStateListLength; x++){

            currentStateValue = productStateList[x];
            previousStateValue = productStateList[x-1];

            productStateList[x] = currentStateValue + previousStateValue;
        }


        //-----------------------------------------------------------


        var profileIdList = Object.keys(data),
            searchingValue = null,
            searchingValuePositionInSortedList,
            sortedProductQntList = [null];

        while(countedProductQntListLength--){

            searchingValue = countedProductQntList[countedProductQntListLength];

            searchingValuePositionInSortedList =  productStateList[searchingValue];

            sortedProductQntList[searchingValuePositionInSortedList] = profileIdList[countedProductQntListLength];

            productStateList[searchingValue]--;

        }



        //########## SORTING ALGORITHM END ###########



        sortedProductQntList = sortedProductQntList.slice(1);

        var sortedData = {},
            sortedProductQntListLength = sortedProductQntList.length;

        for(var z=0; z<sortedProductQntListLength; z++){

            sortedData[sortedProductQntList[z]] = data[sortedProductQntList[z]];
        }


        console.timeEnd('sort');

        console.log('sort inside', sortedData);


        return sortedData;
    }

}

export default CountingSortingFilter;
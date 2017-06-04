
import SortingFilter from './SortingFilter';
import CountingSortingFilter from './CountingSortingFilter';



var SortingFilterFactory = {


    createNew(methodId = ''){

        switch(methodId){

            case 'counting':
                return new CountingSortingFilter();

            default:
                return new SortingFilter();

        }

    }


};


export default SortingFilterFactory;

import CountingSortingFilter from './../../ModelFilter/CountingSortingFilter';
import PanelController from  './../../PanelController';



var pageController = new PanelController(),
    sortingFilter = new CountingSortingFilter(),

    profileId = 0,


    makeSomeProfile = (productQntArray)=>{

        for(var i=0; i<productQntArray.length; i++){

            profileId++;

            pageController.createNewProfile(profileId + '');

            pageController.addProduct(
                (profileId + ''),
                '#carrot',
                productQntArray[i]
            );

        }

    };




var sortData = (direction)=>{

        var sortedModel = sortingFilter.sortData(pageController.getAllKingdomMembersProfile(), direction),

            sortedQntList = [],
            productList;

        for(var profile of sortedModel){

            productList = profile.getPickedStock();

            sortedQntList.push(productList[0].getQnt());
        }

        return sortedQntList;
    };




//###################################



describe('CountingSortingFilter', ()=>{

    beforeEach(()=>{

        window.localStorage.clear();

    });


    it('should sort data in proper way', ()=>{

        makeSomeProfile([1, 5, 3, 2, 4]);
        expect(sortData('asc')).toEqual([1, 2, 3, 4, 5]);

        makeSomeProfile([0, 0]);
        expect(sortData('asc')).toEqual([0, 0, 1, 2, 3, 4, 5]);

        makeSomeProfile([1, 1, 1000]);
        expect(sortData('asc')).toEqual([0, 0, 1, 1, 1, 2, 3, 4, 5, 1000]);

        expect(sortData('desc')).toEqual([1000, 5, 4, 3, 2, 1, 1, 1, 0, 0]);

        makeSomeProfile([43, 82]);
        expect(sortData('desc')).toEqual([1000, 82, 43, 5, 4, 3, 2, 1, 1, 1, 0, 0]);

    });

});
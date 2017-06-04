



var buildData = function(dataFromMainScript){



    var [pageController, testQnt, progressTickCounter] = dataFromMainScript;
    console.log(testQnt);

    var profileId = 0,
        buildCounterSize = testQnt*progressTickCounter;



    for(var i=0; i<testQnt; i++){

        profileId++;

        pageController.createNewProfile(profileId + '');

        pageController.addProduct(
            (profileId + ''),
            '#carrot',
            Math.floor(Math.random()*10)
        );


        if(i%buildCounterSize == 0){

            postMessage();
        }



    }

    var model = pageController.getAllKingdomMembersProfile();
};


addEventListener('message', function(e){

    buildData(e.data);

}, true);
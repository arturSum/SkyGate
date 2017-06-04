
import PanelController from './PanelController';
import SortingFilterFactory from './SortingFilterFactory';


var pageController = new PanelController(),
    sortingFilter = SortingFilterFactory.createNew('counting'),

    runButton = null,
    buildButton = null,
    buildTestProgressBar = null,
    buildTestDoneMarker = null,

    sortingModel = null,

    testQnt = 5,
    buildCounterSize = testQnt*0.1,

    progressBarMaxLength = 100,
    progressBarStep = progressBarMaxLength*(buildCounterSize/testQnt),


    profileId = 0,

    model = null;




var runTest = function(){

        var deltaTime = 0;

        runButton.className = 'btn-disabled';


        var timeStart = performance.now();

        sortingModel = sortingFilter.sortData(model);


        var timeEnd = performance.now();

        deltaTime = timeEnd - timeStart;


        //console.log("Call to doSomething took " + deltaTime + " milliseconds.");

    },

    buildTest = function(){


        buildButton.className = 'btn-disabled';

        var i = 0,

            loop = function(){

                    if(i<testQnt){

                            profileId++;

                            pageController.createNewProfile(profileId + '');

                            pageController.addProduct(
                                (profileId + ''),
                                '#carrot',
                                Math.floor(Math.random()*10)
                            );


                            if(i%buildCounterSize == 0){

                                buildTestProgressBar.style.width =  parseInt(buildTestProgressBar.style.width, 10) + progressBarStep + 'px';
                            }

                            i++;

                            setTimeout(function(){

                                loop();

                            }, 100);

                    }
                    else{

                        model = pageController.getAllKingdomMembersProfile();

                        buildTestProgressBar.style.display = "none";
                        buildTestDoneMarker.style.display = 'block';

                        runButton.className = '';

                    }
            };


        loop();




    };




window.onload = function(){


    runButton = document.getElementById('runTest');
    buildButton = document.getElementById('buildTest');

    buildTestProgressBar = document.getElementById('buildTestProgressBar');
    buildTestDoneMarker = document.getElementById('buildTestDoneMarker');

    runButton.onclick = runTest;
    buildButton.onclick = buildTest;

};













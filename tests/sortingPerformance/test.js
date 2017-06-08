
import PanelController from '../../PanelController';
import SortingFilterFactory from '../../ModelFilter/SortingFilterFactory';


//tested profile qnt
var testQnt = 100;



var pageController = new PanelController(),
    sortingFilter = SortingFilterFactory.createNew('counting'),

    runButton = null,
    buildButton = null,
    buildTestProgressBar = null,
    buildTestDoneMarker = null,
    testScore = null,
    barBorder = null,

    sortedModel = null,

    buildCounterSize = testQnt*0.1,
    maxTestedDataLength = 20000,


    progressBarMaxLength = 100,
    progressBarStep = progressBarMaxLength*(buildCounterSize/testQnt),


    profileId = 0,

    model = null;

var runTest = function(){

        runButton.className = 'btn-disabled';

        var timeStart = performance.now();

        sortedModel = sortingFilter.sortData(model);

        var timeEnd = performance.now(),

            testedSizeDeltaTime = parseFloat(timeEnd - timeStart).toFixed(2),

            allDeltaTime = parseFloat((testedSizeDeltaTime*(maxTestedDataLength/testQnt))/1000).toFixed(2);

        testScore.innerText = `Sorting ${testQnt} qnt time: ${testedSizeDeltaTime} millisecond. For ${maxTestedDataLength} will be ${allDeltaTime} second`;

    },

    buildTest = function(){


        buildButton.className = 'btn-disabled';

        barBorder.style.width = progressBarMaxLength + 'px';
        barBorder.style.outline = 'solid 1px blue';


        var i = 0,


            loop = function(){

                    if(i<testQnt){

                            profileId++;

                            pageController.createNewProfile(profileId + '');


                            pageController.addProduct(
                                    (profileId + ''),
                                    '#carrot',
                                    Math.floor(Math.random()*maxTestedDataLength)
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
                        barBorder.style.outline = 'none';

                    }
            };

        loop();

    };




window.onload = function(){


    localStorage['RabbitKingdomModel'] = JSON.stringify([]);

    runButton = document.getElementById('runTest');
    buildButton = document.getElementById('buildTest');

    buildTestProgressBar = document.getElementById('buildTestProgressBar');
    buildTestDoneMarker = document.getElementById('buildTestDoneMarker');

    testScore = document.getElementById('testScore');
    barBorder = document.getElementById('barBorder');


    runButton.onclick = runTest;
    buildButton.onclick = buildTest;

};













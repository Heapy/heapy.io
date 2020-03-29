'use strict';

var jetApp = angular.module('jetApp', [
    'ngRoute',
    'ngSanitize'
]);

jetApp.config(routeMenu);
jetApp.config(routeAutumn2015);
jetApp.config(routeSpring2016);
jetApp.config(routeAutumn2016);

jetApp.controller("programController", programController);
jetApp.controller("speakersController", speakersController);
jetApp.controller("speakerSpecialController", speakerSpecialController);
jetApp.controller("historyController", historyController);
jetApp.controller("historySpeakerController", historySpeakerController);

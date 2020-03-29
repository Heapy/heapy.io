var speakerRoute = { templateUrl: 'pages/speakers/speaker.special.html' };

var speakersPath = [
            '/jeanfrancois_arcand', '/jeremie_papillon',
            '/andrus_adamchik', '/tagir_valeev',
            '/volker_simonis', '/tomasz_nurkiewicz',
            '/rustam_mehmandarov', '/philipp_krenn',
            '/nikita_lipsky', '/axel_fontaine',
            '/jaroslaw_ratajski', '/tomer_gabel',
            '/vladislav_zablotsky'
];

var routeAutumn2016 = function($routeProvider) {
    speakersPath.forEach(function(speakerPath   ) {
        $routeProvider.when(speakerPath, speakerRoute);
    });
};
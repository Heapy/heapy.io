var speakerHistoryRoute = { templateUrl: 'pages/history/history.speaker.html' };

var speakersAutumn2015Path = [
                '/history/2015/adam_warski', '/history/2015/alexander_slesarenko',
                '/history/2015/alexey_fyodorov', '/history/2015/rafael_winterhalter',
                '/history/2015/alexey_zinoviev', '/history/2015/andrei_pangin',
                '/history/2015/baruch_sadogursky', '/history/2015/bruce_eckel',
                '/history/2015/evgeny_borisov', '/history/2015/mikalai_alimenkou',
                '/history/2015/rafael_winterhalter','/history/2015/roman_grebennikov',
                '/history/2015/uladzimir_liashkevich', '/history/2015/volker_simonis'
];

var speakersSpring2016Path = [
                '/history/2016/spring/baruch_sadogursky', '/history/2016/spring/alparslan_avci',
                '/history/2016/spring/yegor_bugayenko', '/history/2016/spring/kirill_tolkachev',
                '/history/2016/spring/alexey_zinoviev', '/history/2016/spring/andrus_adamchik',
                '/history/2016/spring/duyhai_doan', '/history/2016/spring/jaroslaw_palka',
                '/history/2016/spring/vladislav_zablotsky', '/history/2016/spring/nicolas_frankel',
                '/history/2016/spring/alexey_buzdin', '/history/2016/spring/tomasz_borek',
                '/history/2016/spring/sebastian_malaca', '/history/2016/spring/dmitry_jemerov',
                '/history/2016/spring/anton_keks', '/history/2016/spring/ruslan_ibragimov'
];

var routeAutumn2015 = function($routeProvider) {
    speakersAutumn2015Path.forEach(function(speakerPath) {
        $routeProvider.when(speakerPath, speakerHistoryRoute);
    });
};

var routeSpring2016 = function($routeProvider) {
    speakersSpring2016Path.forEach(function(speakerPath) {
        $routeProvider.when(speakerPath, speakerHistoryRoute);
    });
};
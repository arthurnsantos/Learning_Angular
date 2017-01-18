angular.module('App', [])

    .controller('MainCtrl', function ($scope) {

        $scope.characters = [
            {"name": 'Jason', "cor": 'Vermelho'},
            {"name": 'Trini', "cor": 'Amarelo' },
            {"name": 'Billy', "cor": 'Azul'},
            {"name": 'Zack', "cor": 'Preto'},
            {"name": 'Kimberly', "cor": 'Rosa'},
            {"name": 'Tomy', "cor": 'Branco'}
        ];

        $scope.zords = [
            {"name":'Dinozords'},
            {"name":'Dragonzord'},
            {"name":'Titanus'},
            {"name":'Thunderzords'},
            {"name":'Tigerzord'},
            {"name":'Tor'},
            {"name":'Ninja Zords'},
            {"name":'Shogun Zords'},
            {"name":'Falconzord'},
            {"name":'Battle Borgs'}
        ];

        $scope.filmes = [
            {"name": 'Mighty Morpin'},
            {"name": 'Turbo'}
        ];

        $scope.series = [
            {"name":'Mighty Morphin Power Rangers',"ano":'1993-1996',"episodios":'155 Episodes'},
            {"name":'Power Rangers Zeo',"ano":'1996-1997',"episodios":'50 Episodes'},
            {"name":'Power Rangers Turbo',"ano":'1997-1998',"episodios":'45 Episodes'},
            {"name":'Power Rangers In Space',"ano":'1998-1999',"episodios":'43 Episodes'},
            {"name":'Power Rangers Lost Galaxy',"ano":'1999-2000',"episodios":'45 Episodes'},
            {"name":'Power Rangers Lightspeed Rescue',"ano":'2000-2001',"episodios":'40 Episodes'},
            {"name":'Power Rangers Time Force',"ano":'2001-2002',"episodios":'40 Episodes'},
            {"name":'Power Rangers Wild Force',"ano":'2002-2003',"episodios":'40 Episodes'},
            {"name":'Power Rangers Ninja Storm',"ano":'2003-2004',"episodios":'38 Episodes'},
            {"name":'Power Rangers Dino Thunder',"ano":'2004-2005',"episodios":'38 Episodes'},
            {"name":'Power Rangers SPD',"ano":'2005-2006',"episodios":'38 Episodes'},
            {"name":'Power Rangers Mystic Force',"ano":'2006-2007',"episodios":'32 Episodes'},
            {"name":'Power Rangers Operation Overdrive',"ano":'2007-2008',"episodios":'32 Episodes'},
            {"name":'Power Rangers Jungle Fury',"ano":'2008-2009',"episodios":'32 Episodes'},
            {"name":'Power Rangers RPM',"ano":'2009',"episodios":'32 Episodes'},
            {"name":'Power Rangers Samurai / Super Samurai',"ano":'2011-2012',"episodios":'44 Episodes'},
            {"name":'Power Rangers Megaforce',"ano":'2013',"episodios":'22 Episodes'},
            {"name":'Power Rangers Super Megaforce',"ano":'2014',"episodios":'20 Episodes'},
            {"name":'Power Rangers Dino Charge / Super Dino Charge',"ano":'2015',"episodios":'20 Episodes'}
        ];

        $scope.viloes = [
            {"name":'Rita Repulsa'},
            {"name":'Lord Zedd'},
            {"name":'Lord Zedd e Rita Repulsa'},
            {"name":'Dom Ritão'}
        ];



});

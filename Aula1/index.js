angular.module('App', [])

    .controller('MainCtrl', function ($scope) {
        
        $scope.author = "Arthur";

        $scope.jarJarBinks = function(nome){
            alert ("DROGBA NO CORINTHIANS " + $scope.nomeDoDonoDoJarJarBinks);
        };

        $scope.characters = [
            {"name": "Leia", "jedi": false},
            {"name": "Han Solo", "jedi": true },
            {"name": "Luke Skywalker", "jedi": true},
            {"name": "Darth Vader", "jedi": false},
            {"name": "R2D2", "jedi": false},
            {"name": "C3Po", "jedi": false},
        ];
});
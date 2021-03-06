'use strict';

/**
 * @ngdoc function
 * @name testTableAppApp.controller:Main2Ctrl
 * @description
 * # Main2Ctrl
 * Controller of the testTableAppApp
 */
angular.module('testTableAppApp')
  .controller('Main2Ctrl', function ($scope, $filter, $log, $window) {


        //Services variables
        $scope.competitors = {
            'names': [
                'Juan',
                'Martin',
                'Raul'
            ]
        };

        //Init function

        var init = function () {

            var createScores = function (competitors) {
                var len = competitors.names.length;
                var scoresDefault = {};

                for (var i = 0; i < len; i++) {
                    var iName = competitors.names[i];
                    scoresDefault[iName] = {};

                    for (var j = 0; j < len; j++) {
                        var jName = competitors.names[j];

                        if (jName !== iName) {
                            scoresDefault[iName][jName] = 0;
                        }
                    }
                }

                return scoresDefault;
            };
            $scope.scoresTable = createScores($scope.competitors);


        };
        init();

        //Scope variables
        $scope.headers = {
            'titles': [
                'Victories',
                'Hits Scored',
                'Hits Received',
                'Difference',
                'Position'
            ]
        };

        var orderBy = $filter('orderBy');

        //Scope functions
        $scope.isSameComp = function(name1, name2){
            return name1 === name2;
        };

        $scope.sameCompChar = function(name1, name2){
            return name1 === name2 ? 'X' : '';
        };

        $scope.addCompetitor = function(name){
            var duplicateCompetitor = false;
            angular.forEach($scope.competitors.names, function(comp){
               if(comp === name){
                   duplicateCompetitor = true;
               }
//                $log.log(name == comp);
            });
                if(duplicateCompetitor === false) {
//                    $log.log("ASDASDSDASD");
                    $scope.competitors.names.push(name);
                    $scope.scoresTable[name] = {};
                    angular.forEach($scope.scoresTable, function (value, key) {
                        $scope.scoresTable[name][key] = 0;
                        value[name] = 0;
                        //                $log.log(value);
                    });
//                    $log.log($scope.scoresTable);
                } else {
                    $window.alert(name+' ya está compitiendo! Elegí un apodo como \"'+name+'MASTER\" o rebautizalo definitivamente.');
                }
        };


        $scope.$watch('scoresTable', function() {
            updateHS($scope.scoresTable);
            updateHR($scope.scoresTable);
            updateDiff($scope.tableHS, $scope.tableHR);
            updateVictories($scope.scoresTable);
            updateCompetitorsTable($scope.competitors.names, $scope.tableHS, $scope.tableHR, $scope.tableDiff, $scope.tableVictories);
            updatePositions($scope.competitorsTable);
        }, true);

        $scope.tableHS = {};
        var updateHS = function(scores){
            angular.forEach(scores, function(value, key) {
                var sum = 0;
                angular.forEach(value, function(value2){
                    sum += parseInt(value2, 10);
                });
                $scope.tableHS[key] = sum;
            });
//           $log.log($scope.tableHS);
        };

        $scope.tableHR = {};
        var updateHR = function(scores){
            angular.forEach(scores, function(value, key) {
                var sum = 0;
                angular.forEach(scores, function(value2, key2) {
                    if (key !== key2) {
                        sum += parseInt(value2[key], 10);
                    }
                });
                $scope.tableHR[key] = sum;
                //$log.log($scope.tableHR);
            });
        };

        $scope.tableDiff = {};
        var updateDiff = function(tableHS, tableHR){
            angular.forEach(tableHS, function(value, key) {
                $scope.tableDiff[key] = tableHS[key] - tableHR[key];
            });
        };

        $scope.tableVictories = {};
        var updateVictories = function(scores){
            angular.forEach(scores, function(value, key){
                var victories = 0;
                angular.forEach(scores, function(value2, key2){
                    if (key !== key2){
//                        $log.log(scores[key][key2]);
                           if (parseInt(scores[key][key2]) > parseInt(scores[key2][key])){
                               victories++;
                           }
                    }
                });
                $scope.tableVictories[key] = victories;
            });
//           $log.log($scope.tableVictories);
        };

        var updateCompetitorsTable = function(names,tableHS, tableHR, tableDiff, tableVictories){
            $scope.competitorsTable = [];
            angular.forEach(names, function(value){
                var competitor = {};
                competitor.name = value;
                competitor.Victories = tableVictories[value];
                competitor.HS = tableHS[value];
                competitor.HR = tableHR[value];
                competitor.Diff = tableDiff[value];
                //$log.log(value);
                $scope.competitorsTable.push(competitor);
            });
            //$log.log(JSON.stringify($scope.competitorsTable));
        };

        $scope.tablePositions = {};
        var updatePositions = function(competitorsTable){
            var samePosition = function(a, b){
//                $log.log(b);
                if (a.Victories === b.Victories && a.Diff === b.Diff && a.HR === b.HR) {
                    return true;
                }
                return false;
            };
            var orderedComp = [];
            orderedComp = orderBy(competitorsTable, ['Victories', 'Diff', '-HR', '-name'], true); //defensive es mejor que aggresive. Ordena por nombre al final.

            var pos = 1;
//            $log.log(orderedComp[0]);
            angular.forEach(orderedComp, function(value, key){
//                $log.log(orderedComp[key]);
                if (orderedComp[key-1] !== undefined){
                    if (samePosition(orderedComp[key], orderedComp[key-1])){
                        $scope.tablePositions[value.name] = $scope.tablePositions[orderedComp[key-1].name];
//                        pos++; si quiero puestos vacíos.
                    } else {
                        $scope.tablePositions[value.name] = pos++;
                    }
                } else {
                    $scope.tablePositions[value.name] = pos++;
                }
            });
        };
//
//        $scope.myData = [
//            {
//                "firstName": "Cox",
//                "lastName": "Carney"
//            }];
$scope.newCompetitor = 'test';



  });

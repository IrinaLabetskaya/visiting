var myApp = angular.module('myApp', []);
myApp.controller("purchaseController", function ($scope) {
    $scope.halue =  [];//появление инпутов
    $scope.items = boxs;//добавление массива
    $scope.sortType     = 'pushAge'; // значение сортировки по умолчанию
    $scope.sortReverse  = false;  // обратная сортировка
    $scope.addField = function(note){
//        $scope.halue = [];
        $scope.halue.push('');
        console.log($scope.halue);
    };
    $scope.addItem = function (firstData, firstName, firstTime, wage, itemOrg, halue ) {
        wage = parseFloat(wage); // преобразуем введенное значение к числу
        if(firstName != "" && itemOrg != "" && !isNaN(wage)){ // если текст установлен и введено число, то добавляем
            $scope.items.push({pushData: firstData, pushName: firstName, pushTime: firstTime, pushAge: wage, pushOrg: itemOrg, pushNote: halue});
            $scope.halue = [];
            console.log($scope.items);
            var obgJsonNew = JSON.stringify(boxs);
            localStorage.setItem("newLS", obgJsonNew);
        } else{
            alert('введите число в поле возраст');
        }
    };
});

var boxs =  [
        {
            pushData: "18/18/15",
            pushName: "Ron",
            pushTime: "10:00",
            pushAge: 28,
            pushOrg: "Second"
//            pushNote: ""
        },
        {
            pushData: "18/18/15",
            pushName: "Илья",
            pushTime: "10:45",
            pushAge: 22,
            pushOrg: "First"
//            pushNote: ""
        },
        {
            pushData: "18/18/15",
            pushName: "Michail",
            pushTime: "12:00",
            pushAge: 25,
            pushOrg: "Last"
//            pushNote: ""
        }
    ];

var obgJson = JSON.stringify( boxs );
localStorage.setItem("newLS", obgJson);

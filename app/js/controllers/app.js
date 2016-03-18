var myApp = angular.module('myApp', []);

myApp.controller("purchaseController", function ($scope) {

    $scope.sortType     = 'pushAge'; // значение сортировки по умолчанию
    $scope.sortReverse  = false;  // обратная сортировка




    $scope.halue =  [];

    $scope.addField = function(){
        $scope.halue.push('');
        console.log($scope.halue);
    };

console.log($scope.halue);
    $scope.items = boxs;
    $scope.addItem = function (firstName, wage, itemOrg, halue ) {

        wage = parseFloat(wage); // преобразуем введенное значение к числу
        if(firstName != "" && itemOrg != "" && !isNaN(wage)) // если текст установлен и введено число, то добавляем
        {
            $scope.items.push({ pushName: firstName, pushAge: wage, pushOrg: itemOrg, pushNote: halue});

            var obgJsonNew = JSON.stringify(boxs);
            localStorage.setItem("newLS", obgJsonNew);
            console.log(localStorage);
        }
//        else if(firstName == "" && itemOrg == ""){
//            alert('поле не заполненно');
//        }
        else{
            alert('введите число в поле возраст');
        }
    };



});

var boxs =  [
        {
            pushName: "Ron",
            pushAge: 28,
            pushOrg: "Second",
            pushNote: ""
        },
        {
            pushName: "Илья",
            pushAge: 22,
            pushOrg: "First",
            pushNote: ""
        },
        { pushName: "Michail",
            pushAge: 25,
            pushOrg: "Last",
            pushNote: ""
        }
    ];

var obgJson = JSON.stringify( boxs );
localStorage.setItem("newLS", obgJson);






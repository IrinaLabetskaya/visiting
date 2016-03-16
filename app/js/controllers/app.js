var myApp = angular.module('myApp', []);

myApp.controller("purchaseController", function ($scope) {

    $scope.list = model;
    $scope.addItem = function (firstName, wage, itemOrg ) {
        wage = parseFloat(wage); // преобразуем введенное значение к числу
        if(firstName != "" && itemOrg != "" && !isNaN(wage)) // если текст установлен и введено число, то добавляем
        {
            $scope.list.items.push({ pushName: firstName, pushAge: wage, pushOrg: itemOrg});

            var obgJsonNew = JSON.stringify( model );
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


//    var retrievedData = localStorage.getItem("newLS");
//    var movies2 = JSON.parse(newLS);

});
//
//var model = [
//    {
//        pushName: "Илья",
//        pushAge: 1,
//        pushOrg: "First"
//    },
//    {
//        pushName: "Ron",
//        pushAge: 15,
//        pushOrg: "Second"
//    },
//    {
//        pushName: "Michail",
//        pushAge: 2,
//        pushOrg: "Last"
//    }
//];

var model = {
    items: [
        { pushName: "Илья", pushAge: 22 ,pushOrg: "First"},
        { pushName: "Ron", pushAge: 28 ,pushOrg: "Second"},
        { pushName: "Michail", pushAge: 25 ,pushOrg: "Last"}
    ]
};

var obgJson = JSON.stringify( model );
localStorage.setItem("newLS", obgJson);






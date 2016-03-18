$(function () {

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return b.pushAge-a.pushAge;
    }

    function addSort() {
        var retrievedData = localStorage.getItem("newLS");
        var storage = JSON.parse(retrievedData);
//        var myArray = storage.items;
        console.log(storage);

//        var ageArray = [];
//        for (i = 0; i < storage.length; i++) {
//            ageArray.push(myArray[i].pushAge);
//        }
        console.log(storage.sort(compareNumeric));
    }

    $('#elemAge').on('click', function () {
//        addSort();
    });

});


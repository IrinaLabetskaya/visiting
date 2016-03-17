$(function () {

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return b.pushAge-a.pushAge;
    }

    function addSort() {
        var retrievedData = localStorage.getItem("newLS");
        var storage = JSON.parse(retrievedData);
        var myArray = storage.items;
        console.log(myArray);

//        var ageArray = [];
        for (i = 0; i < myArray.length; i++) {
//            alert(myArray[i].pushAge);
//            ageArray.push(myArray[i].pushAge);
        }
        console.log(myArray.sort(compareNumeric));
//        console.log(ageArray.sort(compareNumeric));
    }


    $('#elemAge').on('click', function () {
        addSort();
    });

//    $("#sort").click(function () {
//        var mylist = $('#menu');
//        var listitems = mylist.children('div').get();
//        listitems.sort(function(a, b) {
//            var compA = $(a).text().toUpperCase();
//            var compB = $(b).text().toUpperCase();
//            return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
//        })
//        $.each(listitems, function(idx, itm) { mylist.append(itm); });
//    });

});


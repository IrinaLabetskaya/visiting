$(function () {

    var sortWrap = $('.all_info_wrap');
    $('#elemAge').on('click', function(){
        sortWrap.find('.new_info_item').hide();
        sortWrap.find('.info_age').show();
    });
    $('#elemOrg').on('click', function(){
        sortWrap.find('.new_info_item').hide();
        sortWrap.find('.info_name').show();
    });

    $('#elemAll').on('click', function(){
        sortWrap.find('.new_info_item').show();
    });



    $('.btn_1').on('click', function(){
        var lengthAgeSelf = $('.all_info').first();
        var lengthAge = lengthAgeSelf.find('.info_age');
        var lengthName = lengthAgeSelf.find('.info_name');
        console.log(lengthAgeSelf);
        if(lengthAge.is(":hidden")  && lengthName.is(":visible")){
            sortWrap.find('.new_info_item').hide();
            sortWrap.find('.info_name').show();
        }
        else if(lengthAge.is(":visible")  && lengthName.is(":hidden")){
            sortWrap.find('.new_info_item').hide();
            sortWrap.find('.info_age').show();
        }
    });

});
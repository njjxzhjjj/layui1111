

function adde(dom){
    //获取下标大于0的所有行
    var trs = $("table tr:gt(0)")
    var len = trs.length;
    console.log(len)
    //随机获取一行的下标
    var randomNumber = parseInt(len * Math.random())
    console.log(randomNumber)
    var number1 = $("table tr:gt(0)").eq(randomNumber).children('td').eq(3).children().eq(1).val()
    $("table tr:gt(0)").eq(randomNumber).children('td').eq(3).children().eq(1).val(++number1);
    var price1 = 32.9
    var price2 = 3339
    var sum1=(price1 * number1).toFixed(2)
    var sum2=(price2 * number1).toFixed(2)
    if (randomNumber == 0) {
        $("table tr:gt(0)").eq(randomNumber).children('td').eq(2).text("￥" + sum1 + "元")
    } else {
        $("table tr:gt(0)").eq(randomNumber).children('td').eq(2).text("￥" + sum2 + "元")
    }
     
         
}

//雨伞的数量增加
function addn(dom) {
    var wd = $(dom).prev();
    wd.val(parseInt(wd.val()) + 1);
    var sum = parseFloat(wd.val() * (32.9)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");
}
//雨伞的数量减少
function sub(dom) {
    var wd = $(dom).next().val();
    if (wd == 1) {
        return;
    }
    $(dom).next().val(--wd);
    var sum = parseFloat(wd * (32.9)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");
}

//手机的数量增加
function addp(dom) {
    var wd = $(dom).prev();
    wd.val(parseInt(wd.val()) + 1);
    var sum = parseFloat(wd.val() * (3339)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");
}
//手机的数量减少
function sup(dom) {
    var wd = $(dom).next().val();
    if (wd == 1) {
        return;
    }
    $(dom).next().val(--wd);
    // toLocaleString()  toFixed(2)
    var sum = parseFloat(wd * (3339)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");

}
function checkall(dom) {
    //全选

    $.each($('table tr td input'), function (index, value) {
        $(this).prop('checked', !$(this).prop('checked'));

    })


         
  
 }
 
$(function () {

    //批量删除
    $('#delBatch').click(function () {
        $('table input:checked').parent().parent().remove();
    })


    //删除
    $('.del').click(function () {
        $(this).parent().parent().remove();
    })


})
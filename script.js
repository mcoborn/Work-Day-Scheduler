var currentDay = $("dayDispay");
var currentTime = getTime();

function displayTime() {
    $(document).ready(function() {
        $("#dayDisplay").text(moment().format("ddd MMM Do, YYYY"));
    });
}

setInterval(displayTime, 1000);
function getTime() {
    return moment().hour()
}

var currentHour = Date.now();
$('.hour').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','green');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','Grey');
    }else if(val === currentHour){
        $(this).css('background-color','Red');
    }else{
        $(this).css('background-color','White');
    }
});
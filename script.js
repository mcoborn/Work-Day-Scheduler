var currentDay = $("dayDisplay");
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
$('.blockInput').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','green');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','grey');
    }else if(val === currentHour){
        $(this).css('background-color','red');
    }else{
        $(this).css('background-color','white');
    }
});

// $(."saveBtn").on("click", function() {
  //     var
  // })
$(document).ready(function() {

var currentDay = $("#dayDisplay");
var currentTime = getTime();

function displayTime() {
    $("#dayDisplay").text(moment().format("ddd MMM Do, YYYY"));
}
setInterval(displayTime, 1000);
function getTime() {
    return moment().hour()
}

var currentHour = new Date().getHours();
$('.blockInput').each(function(){
    var val = parseInt($(this).prev().attr('id'));
    if(val > currentHour && val < currentHour+8){
        $(this).css('background-color','green');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','grey');
    }else if(val === currentHour){
        $(this).css('background-color','red');
    }else{
        $(this).css('background-color','white');
    }
});

$(".saveBtn").on("click", function(event) {
    event.preventDefault()
            var myContent = document.getElementById(prev().attr('id')).value;
            localStorage.setItem("myContent", myContent);
    document.getElementById("textArea").value = myContent;
})

});

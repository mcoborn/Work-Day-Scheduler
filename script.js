$(document).ready(function() {
var currentDay = $("#dayDisplay");
var currentTime = getTime();
var tasks = [];
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
    // Go to the HTML element above the button
    var textArea = $(this).prev().val();
    //Go to the html element with a class of hour and get the id
    var hourSibling = $(this).siblings('.hour').attr('id');
    // Create an object that stores both
    var tasks = {
        hour: hourSibling,
        text: textArea
    }
    //push to array in global scope
    tasks.push(tasks);
    // convert array to JSON string and store in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
});
function getAllTasks() {
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
}
    if (tasks.length > 0) {
        for (var i = 0; i < tasks.length;
            i++) {
                var hourSibling = $('#{tasks[i].hour}');
                    console.log(hourSibling);
                hourSibling.next().val(tasks[i].text);
            }
        }
    }
    getAllTasks();
});


var currentDay = $('#current-day');
var timeBlocks = $('.time-block');
var saveButton = $('.saveBtn')



function displayTime() {

  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

function setTimeBlocks() {
  var currentTime = dayjs().hour()
  timeBlocks.each(function () {
    console.log(this)
    var timeBlockTime = parseInt($(this).attr("id").split("-")[1])
    console.log(timeBlockTime, currentTime)
    if (currentTime > timeBlockTime) {
      $(this).addClass('past')

    } else if (currentTime < timeBlockTime) {
      $(this).addClass('future')
    } else {
      $(this).addClass('present')
    }
    var savedNote = localStorage.getItem($(this).attr("id"))
    console.log(savedNote)

  })
}
setTimeBlocks()

saveButton.on('click', function () {
  var value = $(this).siblings()[1].value
  var key = $(this).parent().attr('id')

  localStorage.setItem(key, value)
});

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));




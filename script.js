// TODO: Add code to display the current date in the header of the page.
var currentDay = $('#current-day');
var timeBlocks = $('.time-block');
var saveButton = $('.saveBtn')



function displayTime() {

  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {

// }
// TODO: Add a listener for click events on the save button. This code should

// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
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

    // var displayNote = localStorage.getItem($(this).attr("id"))

    //Select this timeBlock ($(this).attr("id") children and select text area. Set value equal to savedNote
  })
}
setTimeBlocks()

saveButton.on('click', function () {
  var value = $(this).siblings()[1].value
  var key = $(this).parent().attr('id')

  localStorage.setItem(key, value)
})

// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//


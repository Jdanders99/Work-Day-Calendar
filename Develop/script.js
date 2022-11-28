// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDate = $('#currentDay');
var saveButton = $('.saveBtn');
var timeBlk = $('#time-block');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function() {
    localStorage.setItem('tasks', timeBlk.value);
    console.log("Saved!");
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function timeSet() {
    var currentTime = dayjs().hour();
    for (var i = 0; i < hours.length; i++) {
      var element = $("div[id="+hours[i]+"]");
      var elementId = $("div[id="+hours[i]+"]").attr("id");
      if (elementId < currentTime) {
        element.addClass('past')
      }
      else if (elementId == currentTime) {
        element.addClass('present')
      }
      else {
        element.addClass('future')
    };
  };
  };
  timeSet();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function getStorage() {
    var value = localStorage.getItem('tasks');
    timeBlk.value = value;
  };
  getStorage();


  // TODO: Add code to display the current date in the header of the page.
  // Function to get current time, set the format and display on page.
  function displayDate() {
    var rightNow = dayjs().format('dddd, MMMM D');
    currentDate.text(rightNow);
  }
  // Calls the displayTime function to display the date on the page.
  displayDate();
});
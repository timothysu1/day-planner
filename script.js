var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var hour = $(".hour");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //When button is clicked
  saveBtn.on("click", saveEvent)
  //Input for corresponding button is saved to local storage
  function saveEvent() {
    var targetHour = $(this).parent();
    var textArea = $(this).parent().find('.description').val();
    console.log(targetHour.attr("id"));
    localStorage.setItem(targetHour.attr("id"), textArea);

  }



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
var currentHour = dayjs().format('H');
console.log(currentHour);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  function retrieveEvent () {
    for (i = 9; i < 18;i++){
      var hourKey= localStorage.getItem("hour-"+i);
      console.log(hourKey);
      var localEvent = $("#hour-"+i).find('.description');
      localEvent = hourKey;
    }
    
  }
retrieveEvent();
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var today = dayjs().format('dddd, MMMM DD, YYYY');
    currentDay.text(today);
  }
  displayTime();
  //checks if the date is correct every minute
  setInterval(displayTime, 1000 * 60);
});

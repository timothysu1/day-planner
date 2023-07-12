var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");

$(function () {
  
  //When button is clicked
  saveBtn.on("click", saveEvent)
  //Input for corresponding button is saved to local storage
  function saveEvent() {
    var targetHour = $(this).parent();
    var textArea = $(this).parent().find('.description').val();
    localStorage.setItem(targetHour.attr("id"), textArea);
  }

//Changes class of each div 
  function hourColor() {
    var currentHour = dayjs().format('H');
    for (var i = 9; i < 18; i++) {
      var hourEl = $('#hour-'+i)
      if (currentHour == i) {
        var presentTime = "row time-block present";
        hourEl.removeClass().addClass(presentTime);
      } else if (currentHour < i) {
        var futureTime = "row time-block future";
        hourEl.removeClass().addClass(futureTime);
      }else if (currentHour > i) {
        var pastTime = "row time-block past";
        hourEl.removeClass().addClass(pastTime);
      }
    }
  }
  hourColor();

  //only need to iterate through 9am - 5pm
  function retrieveEvent() {
    for (var i = 9; i < 18; i++) {
      var hourKey = localStorage.getItem("hour-" + i);
      $('#hour-' + i).find('.description').val(hourKey);
    }
  }
  retrieveEvent();

  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var today = dayjs().format('dddd, MMMM DD, YYYY');
    currentDay.text(today);
  }
  displayTime();

  //checks if the date and time is correct every minute
  setInterval(function(){
    hourColor();
    displayTime();
  }, 1000 * 60);
});

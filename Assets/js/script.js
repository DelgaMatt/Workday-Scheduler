// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

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

  // function saving input content onto local storage
  $('.saveBtn').on('click', function () { //setting an event listener to the saveBtn class on click
    var text = $(this).siblings('.description').val(); // recieving informatio from the textarea element because it has the class of 'description'
    var time = $(this).parent().attr('id'); //recieving the changges made from it's relative time block // the id will be used to pull information from the local storage onto user interface
    localStorage.setItem(time, text); //linking both timeblock value and text value to local storage
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function hourTracker () {
    var currentHour = dayjs().hour();
  
      $('.timeBlock').each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
  
        if (hourBlock > currentHour) {
          $(this).addClass("future");
        } else if (hourBlock === currentHour) {
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future");
        } else {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future")
        }
        
      })};
    hourTracker();


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
   //grabbing the timeblock(id) and its text content(.description) from local storage via the block's id name
   $('#hour9 .description').val(localStorage.getItem('hour9'));
   $('#hour10 .description').val(localStorage.getItem('hour10'));
   $('#hour11 .description').val(localStorage.getItem('hour11'));
   $('#hour12 .description').val(localStorage.getItem('hour12'));
   $('#hour13 .description').val(localStorage.getItem('hour13'));
   $('#hour14 .description').val(localStorage.getItem('hour14'));
   $('#hour15 .description').val(localStorage.getItem('hour15'));
   $('#hour16 .description').val(localStorage.getItem('hour16'));
   $('#hour17 .description').val(localStorage.getItem('hour17'));


  // TODO: Add code to display the current date in the header of the page.
  function timeDisplay() {
    var timeDisplayEl = $('#currentDay');
    var rightNow = dayjs().format('dddd, MMMM DD YYYY. h:mm:ss');
    timeDisplayEl.text(rightNow);
  };
  timeDisplay();
  setInterval(timeDisplay, 1000);



});

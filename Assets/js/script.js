// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // function saving input content onto local storage
  $('.saveBtn').on('click', function () { //setting an event listener to the saveBtn class on click
    let text = $(this).siblings('.description').val(); // recieving informatio from the textarea element because it has the class of 'description'
    let time = $(this).parent().attr('id'); //recieving the changges made from it's relative time block // the id will be used to pull information from the local storage onto user interface
    localStorage.setItem(time, text); //linking both timeblock value and text value to local storage
  });

  function hourTracker () {
    let nowHour = dayjs().hour();
  
      $('.timeBlock').each(function () {
        let hourBlock = parseInt($(this).attr("id").split("hour")[1]);
  
        if (hourBlock > nowHour) {
          $(this).addClass("future");
        } else if (hourBlock === nowHour) {
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


  // code to display the current date in the header of the page.
  function timeDisplay() {
    let timeDisplay = $('#currentDay');
    let currentTime = dayjs().format('dddd, MMMM DD YYYY. h:mm:ss');
    timeDisplay.text(currentTime);
  };

  timeDisplay();
  setInterval(timeDisplay, 1000);
  
});

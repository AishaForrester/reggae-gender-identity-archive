$(document).ready(function () {
  // Initialize the book
  $("#book").turn({
    width: 1200,
    height: 600,
    autoCenter: true,
    gradients: true,        
    acceleration: true,     
    duration: 900,          
    easing: "easeInOutCubic"
  });

  
   
let currentAudio = null;

$("#book").bind("turned", function(event, page, view) {
  console.log("Turned to page: " + page);
  document.title = "Page: " + page; // Update the document title for debugging

  let newAudio = null;

  if (page >= 6 && page <= 8)   newAudio = $("#got-a-date-audio")[0];
  else if (page >= 10 && page <= 14) newAudio = $("#no-woman-audio")[0];
  else if (page >= 16 && page <= 20) newAudio = $("#mother-liza-audio")[0];
  else if (page >= 22 && page <= 26) newAudio = $("#girlie-girlie-audio")[0];
  else if (page >= 28 && page <= 34) newAudio = $("#sycamore-audio")[0];
  else if (page >= 36 && page <= 42) newAudio = $("#its-a-pity-audio")[0];
  else if (page >= 44 && page <= 48) newAudio = $("#majesty-audio")[0];
  else if (page >= 50 && page <= 54) newAudio = $("#toast-audio")[0];

  // Only change audio if it's different
  if (newAudio !== currentAudio) {

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = newAudio;

    if (currentAudio) {
      currentAudio.play();
    }
  }

});

  

  // Auto-open to page 2 on load (just pass the page number — no duration arg)
  setTimeout(function () {
    $("#book").turn("page", 2);
  }, 1200);

  // next() and previous() take no arguments in Turn.js
  $(".controls button.next").on("click", function () {
    $("#book").turn("next");
  });

  $(".controls button.prev").on("click", function () {
    $("#book").turn("previous");
  });

});


 



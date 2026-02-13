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

  // When a page turns
  $("#book").bind("turned", function(event, page, view) {
    // Stop all audio first
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });

    // If it's the "No Woman No Cry" page, play its audio
    if (page === 4) { // page number starts at 1, where the cover is one. 
      $("#no-woman-audio")[0].play();
    }
  });


  // Automatic turn to page 2 on load
  setTimeout(() => {
    $("#book").turn("page", 2, 900);
  }, 1200);

  // Function to add a subtle wobble after page turn
  function addWobble() {
    const book = $("#book");
    // quick small rotation to simulate curl
    book.css({ transform: "rotateY(0deg)" });
    setTimeout(() => {
      book.css({ transform: "rotateY(1deg)" });
      setTimeout(() => {
        book.css({ transform: "rotateY(0deg)" });
      }, 150);
    }, 150);
  }

  // Graceful next/previous page functions with wobble
  function nextPage() {
    $("#book").turn("next", {
      duration: 900,
      easing: "easeInOutCubic",
      when: {
        turned: addWobble
      }
    });
  }

  function prevPage() {
    $("#book").turn("previous", {
      duration: 900,
      easing: "easeInOutCubic",
      when: {
        turned: addWobble
      }
    });
  }

  // Attach buttons
  $(".controls button.prev").on("click", prevPage);
  $(".controls button.next").on("click", nextPage);
});

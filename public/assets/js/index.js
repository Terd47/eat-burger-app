// Make sure we wait to attach our handlers until the DOM is fully loaded.
$( document ).ready(function() {
  
  $( function() {
    $( ".draggable" ).sortable({connectWith: '.droppable'});
    $( ".droppable" ).sortable({
      receive: function( event, ui ) {
        let burgerName = $(ui.item).html();
        let id =$(ui.item).attr('id');
        console.log($(ui.item).attr('id'));
        let newBurger = { burger_name: burgerName, devoured: true, id:id };
        console.log(burgerName + newBurger)
        console.log(newBurger);
         // Send the PUT request.
         console.log($(ui.item))
         console.log(ui)

      $.ajax("/api/burger", {
        method: "PUT",
        data: newBurger
      }).then(
        function() {
          console.log("burger changed to", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
        console.log('inside drop function')
      }
    });
  } );

});

$(function() {
    $(".change-sleep").on("click", function(event) {
      let id = $(this).data("id");
      let devoured = $(this).data("devoured");
  
      let newBurger= {
        state: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        method: "PUT",
        data: newBurger
      }).then( function() {
          console.log("burger changed to", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false,
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  
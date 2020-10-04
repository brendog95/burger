$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      //var newSleep = $(this).data("newsleep");
  
      var newDevourState = {
       devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          //console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#newBurger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("Inside burger click");
  
      var newBurg = {
        name: $("#bName").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
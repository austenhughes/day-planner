$(document).ready(function() {

      $(".saveBtn").on("click", function(){
      var textarea = $(".textarea12").val();
      var time = $(".time-block12").text();
      localStorage.setItem("newTask" , textarea);
      console.log(textarea)
      var getTask = localStorage.getItem("newTask");
      console.log(getTask)  
      });

      loadPage ();
      function loadPage (){
        var getTask = localStorage.getItem("newTask");
          console.log(getTask);
          $(".textarea12").text(getTask);
      }

      //display data corectly
      //make work for all time blocks
      //load page - look for saved things in local storage
      // color code time blocks based on reatime hrs
      // display day and time
      // clear page and or clear task 

})




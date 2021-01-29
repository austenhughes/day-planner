$(document).ready(function() {

      var displayTask = $("#12AMToDo")

      $(".saveBtn").on("click", function(){
      var textarea = $(".textarea12").val();
      localStorage.setItem("to do" , textarea);
      console.log(textarea)
      var getTask = localStorage.getItem("to do");
      displayTask.append(getTask)
      console.log(getTask)
          
      });

      //display data corectly
      //make work for all time blocks
      //load page - look for saved things in local storage
      // color code time blocks based on reatime hrs
      // display day and time
      // clear page and or clear task 



})




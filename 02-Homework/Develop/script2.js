$(document).ready(function() {

    $(".Btn1am").on("click", function(){
        var textarea = $(".textarea1am").val();
        localStorage.setItem("newTask1am" , textarea);
        console.log(textarea)
        });

    $(".Btn2am").on("click", function(){
        var textarea = $(".textarea2am").val();
        localStorage.setItem("newTask2am" , textarea);
        console.log(textarea)
        });

    $(".Btn3am").on("click", function(){
        var textarea = $(".textarea3am").val();
        localStorage.setItem("newTask3am" , textarea);
        console.log(textarea)
        });

    $(".Btn4am").on("click", function(){
        var textarea = $(".textarea4am").val();
        localStorage.setItem("newTask4am" , textarea);
        console.log(textarea)
        });

    $(".Btn5am").on("click", function(){
        var textarea = $(".textarea5am").val();
        localStorage.setItem("newTask5am" , textarea);
        console.log(textarea)
        });

    $(".Btn6am").on("click", function(){
        var textarea = $(".textarea6am").val();
        localStorage.setItem("newTask6am" , textarea);
        console.log(textarea)
        });

    $(".Btn7am").on("click", function(){
        var textarea = $(".textarea7am").val();
        localStorage.setItem("newTask7am" , textarea);
        console.log(textarea)
        });

    $(".Btn8am").on("click", function(){
        var textarea = $(".textarea8am").val();
        localStorage.setItem("newTask8am" , textarea);
        console.log(textarea)
        });

    $(".Btn9am").on("click", function(){
        var textarea = $(".textarea9am").val();
        localStorage.setItem("newTask9am" , textarea);
        console.log(textarea)
        });

    $(".Btn10am").on("click", function(){
        var textarea = $(".textarea10am").val();
        localStorage.setItem("newTask10am" , textarea);
        console.log(textarea)
        });

    $(".Btn11am").on("click", function(){
        var textarea = $(".textarea11am").val();
        localStorage.setItem("newTask11am" , textarea);
        console.log(textarea)
        });

    $(".Btn12pm").on("click", function(){
        var textarea = $(".textarea12pm").val();
        localStorage.setItem("newTask12pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn1pm").on("click", function(){
        var textarea = $(".textarea1pm").val();
        localStorage.setItem("newTask1pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn2pm").on("click", function(){
        var textarea = $(".textarea2pm").val();
        localStorage.setItem("newTask2pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn3pm").on("click", function(){
        var textarea = $(".textarea3pm").val();
        localStorage.setItem("newTask3pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn4pm").on("click", function(){
        var textarea = $(".textarea4pm").val();
        localStorage.setItem("newTask4pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn5pm").on("click", function(){
        var textarea = $(".textarea5pm").val();
        localStorage.setItem("newTask5pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn6pm").on("click", function(){
        var textarea = $(".textarea6pm").val();
        localStorage.setItem("newTask6pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn7pm").on("click", function(){
        var textarea = $(".textarea7pm").val();
        localStorage.setItem("newTask7pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn8pm").on("click", function(){
        var textarea = $(".textarea8pm").val();
        localStorage.setItem("newTask8pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn9pm").on("click", function(){
        var textarea = $(".textarea9pm").val();
        localStorage.setItem("newTask9pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn10pm").on("click", function(){
        var textarea = $(".textarea10pm").val();
        localStorage.setItem("newTask10pm" , textarea);
        console.log(textarea)
        });
    
    $(".Btn11pm").on("click", function(){
        var textarea = $(".textarea11pm").val();
        localStorage.setItem("newTask11pm" , textarea);
        console.log(textarea)
        });
   
    $(".Btn12am").on("click", function(){
        var textarea = $(".textarea12am").val();
        localStorage.setItem("newTask12am" , textarea);
        console.log(textarea)
        });

    loadPage ();
    function loadPage (){

        setday();
        function setday() {
        var day = moment().format("MMMM Do YYYY");
        var displayDay = document.createElement('div');
        displayDay.textContent = day
        $("#currentDay").append(displayDay);
        }

        checkTime ();
        function checkTime(){
        }

      var getTask12pm = localStorage.getItem("newTask12pm");
      var getTask11pm = localStorage.getItem("newTask11pm");
      var getTask10pm = localStorage.getItem("newTask10pm");
      var getTask9pm = localStorage.getItem("newTask9pm");
      var getTask8pm = localStorage.getItem("newTask8pm");
      var getTask7pm = localStorage.getItem("newTask7pm");
      var getTask6pm = localStorage.getItem("newTask6pm");
      var getTask5pm = localStorage.getItem("newTask5pm");
      var getTask4pm = localStorage.getItem("newTask4pm");
      var getTask3pm = localStorage.getItem("newTask3pm");
      var getTask2pm = localStorage.getItem("newTask2pm");
      var getTask1pm = localStorage.getItem("newTask1pm");
      var getTask12am = localStorage.getItem("newTask12am");
      var getTask11am = localStorage.getItem("newTask11am");
      var getTask10am = localStorage.getItem("newTask10am");
      var getTask9am = localStorage.getItem("newTask9am");
      var getTask8am = localStorage.getItem("newTask8am");
      var getTask7am = localStorage.getItem("newTask7am");
      var getTask6am = localStorage.getItem("newTask6am");
      var getTask5am = localStorage.getItem("newTask5am");
      var getTask4am = localStorage.getItem("newTask4am");
      var getTask3am = localStorage.getItem("newTask3am");
      var getTask2am = localStorage.getItem("newTask2am");
      var getTask1am = localStorage.getItem("newTask1am");
      
        $(".textarea12pm").text(getTask12pm);
        $(".textarea1pm").text(getTask1pm);
        $(".textarea2pm").text(getTask2pm);
        $(".textarea3pm").text(getTask3pm);
        $(".textarea4pm").text(getTask4pm);
        $(".textarea5pm").text(getTask5pm);
        $(".textarea6pm").text(getTask6pm);
        $(".textarea7pm").text(getTask7pm);
        $(".textarea8pm").text(getTask8pm);
        $(".textarea9pm").text(getTask9pm);
        $(".textarea10pm").text(getTask10pm);
        $(".textarea11pm").text(getTask11pm);
        $(".textarea12am").text(getTask12am);
        $(".textarea1am").text(getTask1am);
        $(".textarea2am").text(getTask2am);
        $(".textarea3am").text(getTask3am);
        $(".textarea4am").text(getTask4am);
        $(".textarea5am").text(getTask5am);
        $(".textarea6am").text(getTask6am);
        $(".textarea7am").text(getTask7am);
        $(".textarea8am").text(getTask8am);
        $(".textarea9am").text(getTask9am);
        $(".textarea10am").text(getTask10am);
        $(".textarea11am").text(getTask11am);
    }

    //make work for all time blocks
    // color code time blocks based on reatime hrs
    // display day and time
    // clear page and or clear task 

})
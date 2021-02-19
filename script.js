$(document).ready(function() {

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


    loadPage ();
    function loadPage (){

        setday();
        function setday() {
        var day = moment().format("MMMM Do YYYY");
        var displayDay = document.createElement('div');
        displayDay.textContent = day
        $("#currentDay").append(displayDay);
        }

      var getTask5pm = localStorage.getItem("newTask5pm");
      var getTask4pm = localStorage.getItem("newTask4pm");
      var getTask3pm = localStorage.getItem("newTask3pm");
      var getTask2pm = localStorage.getItem("newTask2pm");
      var getTask1pm = localStorage.getItem("newTask1pm");
      var getTask12pm = localStorage.getItem("newTask12pm");
      var getTask11am = localStorage.getItem("newTask11am");
      var getTask10am = localStorage.getItem("newTask10am");
      var getTask9am = localStorage.getItem("newTask9am");
      
        $(".textarea9am").text(getTask9am);
        $(".textarea10am").text(getTask10am);
        $(".textarea11am").text(getTask11am);
        $(".textarea12pm").text(getTask12pm);
        $(".textarea1pm").text(getTask1pm);
        $(".textarea2pm").text(getTask2pm);
        $(".textarea3pm").text(getTask3pm);
        $(".textarea4pm").text(getTask4pm);
        $(".textarea5pm").text(getTask5pm);
         
        checkTime ();
        function checkTime(){
            var getTime = moment().format("LT");
            console.log(getTime);
            
            var setTime9am = moment(9,"HH").format("LT");
            console.log(setTime9am);

            if (getTime === setTime9am){
                $(".time-block9am").addClass("present");
            } else if (getTime > setTime9am){
                $(".time-block9am").addClass("past")
            } else if (getTime < setTime9am){
                $(".time-block9am").addClass("future") 
            }

            var setTime10am = moment(10,"HH").format("LT");
            console.log(setTime10am);

            if (getTime === setTime10am){
                $(".time-block10am").addClass("present");
            } else if (getTime > setTime10am){
                $(".time-block10am").addClass("past")
            } else if (getTime < setTime10am){
                $(".time-block10am").addClass("future") 
            }

            var setTime11am = moment(11,"HH").format("LT");
            console.log(setTime11am);

            if (getTime === setTime11am){
                $(".time-block11am").addClass("present");
            } else if (getTime > setTime11am){
                $(".time-block11am").addClass("past")
            } else if (getTime < setTime11am){
                $(".time-block11am").addClass("future") 
            }

            var setTime12pm = moment(12,"HH").format("LT");
            console.log(setTime12pm);

            if (getTime === setTime12pm){
                $(".time-block12pm").addClass("present");
            } else if (getTime > setTime12pm){
                $(".time-block12pm").addClass("past")
            } else if (getTime < setTime12pm){
                $(".time-block12pm").addClass("future") 
            }

            var setTime1pm = moment(13,"HH").format("LT");
            console.log(setTime1pm);

            if (getTime === setTime1pm){
                $(".time-block1pm").addClass("present");
            } else if (getTime > setTime1pm){
                $(".time-block1pm").addClass("past")
            } else if (getTime < setTime1pm){
                $(".time-block1pm").addClass("future") 
            }

            var setTime2pm = moment(14,"HH").format("LT");
            console.log(setTime2pm);

            if (getTime === setTime2pm){
                $(".time-block2pm").addClass("present");
            } else if (getTime > setTime2pm){
                $(".time-block2pm").addClass("past")
            } else if (getTime < setTime2pm){
                $(".time-block2pm").addClass("future") 
            }

            var setTime3pm = moment(15,"HH").format("LT");
            console.log(setTime3pm);

            if (getTime === setTime3pm){
                $(".time-block3pm").addClass("present");
            } else if (getTime > setTime3pm){
                $(".time-block3pm").addClass("past")
            } else if (getTime < setTime3pm){
                $(".time-block3pm").addClass("future") 
            }

            var setTime4pm = moment(16,"HH").format("LT");
            console.log(setTime4pm);

            if (getTime === setTime4pm){
                $(".time-block4pm").addClass("present");
            } else if (getTime > setTime4pm){
                $(".time-block4pm").addClass("past")
            } else if (getTime < setTime4pm){
                $(".time-block4pm").addClass("future") 
            }

            var setTime5pm = moment(17,"HH").format("LT");
            console.log(setTime5pm);

            if (getTime === setTime5pm){
                $(".time-block5pm").addClass("present");
            } else if (getTime > setTime5pm){
                $(".time-block5pm").addClass("past")
            } else if (getTime < setTime5pm){
                $(".time-block5pm").addClass("future") 
            }

            }
        }
    })
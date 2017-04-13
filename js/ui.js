////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////


$(document).ready(function() {

  // call draggable function (from external library)
  var $draggable = $('.draggable').draggabilly({
  })



  //  begin animation function, with two arguments
  var animate = function(word, after) {
      $("#invisible").show();

    // create a variable to tell the loop how many times to run (dependent upon the length of the first argument (ex: a string) that is passed)
    var times = word.length;
    // split the first argument into an array
    var splitWord = word.split("");

    // create a loop that increments down to 0 from the number stored in "times" variable
    (function myLoop (i) {
      // this is a timing function, separating each iteration of the loop by 600 milliseconds
      setTimeout(function () {
        // toggle (show and hide) the two origami images
        $(".run").toggle();
        // targeting the letters div, this will go through each letter in splitWord array
        // the math in this argument comes from i, which is originally intended to count DOWN from the length of the word, to 0
        // This value is manipulated in order to call the index values of out splitWord array, in the appropriate order
        $("#letters").text(splitWord[(i-times)*-1]);

        // if i is 'truthy' continue to call our loop function
        if (--i) {
          myLoop(i); // < thats this
          } else {
            // once i reaches 0 / 'falsey,' then we will show() a div determined by our second argument
            $(after).show();
            // clear the letters div
            $("#letters").text("");
            $("#invisible").hide();

          }
      }, 600)
    })(times);
  }
  // end animation

  // instantiate new user object instance
  var newUser = new User("", "");



  $("#name").click(function() {
    var inputtedName = $("#userName").val();//collect & store user input for name
    newUser.name = inputtedName;
      $(".section").hide();
      var showThis = "#color-div";
    // animation function, passing name
    animate(inputtedName, showThis);

  });



  //---------------------------------------------------------------color input
  $("#color").click(function() {
    var inputtedColor =$("#userColor").val(); //collect ui for color
    newUser.color = inputtedColor;

    $(".section").hide();
    var showThis = "#output";
    // animation function, passing name
    animate(inputtedColor, showThis);

    // check to see if total length of both inputs are even or odd
    if (shuffle(newUser.name, newUser.color) === "even") {
      var options = newFortuneTeller.availOptions[1];
    }
    else {
      var options = newFortuneTeller.availOptions[0];
    }

    $("#output").text("Available options: ");
    // loop through the options, and for each option, append to the output
    options.forEach(function(option, i = 0) {
      $("#output").append("<span class='option-span'>" + option + "</span> ");
      $('.hover-click:nth-child(' + (i+1) + ')').attr('data-value', option);
    // $("#output").html("<p>Available options: </p>");
    // // loop through the options, and for each option, append to the output
    // options.forEach(function(option) {
    // $("#output").append("<span class='option-span'>" + option + "</span> ");
    //
    //
    });

    $("area").click(function() {
      var fortune = ($(this).attr('alt') -1);

      $(".final-output").show();
      $("#teller-wrapper").hide();
      $(".final-output").html("<p>" + newFortuneTeller.fortunes[fortune] + "</p>");
      $("#output").hide();
      $(".final-output").append("<div id='play-again' onClick='window.location.reload()'>Play Again</div>");
    });
    //----------------------------------------------------------option click
    // $(".option-span").click(function() {
    //   $(".final-output").show();
    //   $("#teller-wrapper").hide();
    //   $(".final-output").html("<p>" + newFortuneTeller.fortunes[$(this).text()-1] + "</p>");
    //   $("#output").hide();
    //   $(".final-output").append("<div id='play-again' onClick='window.location.reload()'>Play Again</div>");
    //
    //   $("#number-div").hide();
    // });

    });


  });

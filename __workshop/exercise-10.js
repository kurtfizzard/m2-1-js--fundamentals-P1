function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  function makeLine(length) {
    var line = "";
    for (var x = 1; x <= length; x++) {
      line += "#";
    }
    return line + "\n";
  }

  function buildTriangle(length) {
    var triangle = "";
    for (var x = 1; x <= length; x++) {
      triangle += makeLine(x);
    }
    return triangle;
  }
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;

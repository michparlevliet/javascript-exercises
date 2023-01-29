//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TESTS ==========


function test__checkHumbrId(valueIn, expected) {
  "use strict";

// VARIABLE TO HOLD RESULT OF CALLING FUNCTION WITH PROVIDED VALUE
  let result = checkHumbrId(valueIn);
  if (result === true && result === expected) {
    result = "==PASSED==";
  }
  else {
    result = "==FAILED==";
  }

// PRINT VALUE, RESULT, AND EXPECTED
  let data = "<strong>Value tested:</strong> "+ valueIn +" <strong>Expected result:</strong> "+ expected +" <strong>"+ result +"</strong><br />";

// INSERT RESULTS TO HTML 
  let dataBox = document.getElementById("data");
  dataBox.innerHTML += data;
}

// RUN UNIT TEST FUNCTION
// TEST-TO-PASS
test__checkHumbrId("N01551725", true);
test__checkHumbrId("n12345678", true);
// TEST-TO-FAIL
test__checkHumbrId("r12345678", false);
test__checkHumbrId("N1234", false);
test__checkHumbrId(null, false);
// BOUNDARY TESTS 
test__checkHumbrId("N1234567", false);
test__checkHumbrId("NN01234567", false);
test__checkHumbrId("n987654321", false);

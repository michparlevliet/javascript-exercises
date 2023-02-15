/** checkLogin Function
 * Validates input as a proper username and password.
 * Returns true if input validates
 * @param {string} userIn
 * @param {string} pwIn
*/
function checkLogin(userIn, pwIn) {
  "use strict";

  // VARIABLES - AUTHENTICATED USER
  var realUser = "whoever";
  var realPw = "whatever";
  // VARIABLES - ERROR MESSAGES
  var invalidIn = "Invalid Username or Password.";
  var emptyUser = "No username entered.";
  var emptyPw = "No password entered.";

  // CHECK FOR USER AND PW MATCH
  if (userIn === realUser && md5Encrypt(pwIn) === md5Encrypt(realPw)) {
    return true;
  // CHECK FOR EMPTY STRING (USER)
  }else if (userIn === "") {
    return emptyUser;
  // CHECK FOR EMPTY STRING (PW)
  }else if (pwIn === "") {
    return emptyPw;
  }
  // CATCH-ALL ELSE STATEMENT TO HANDLE INCORRECT USER/PW
  else {
    return invalidIn;
  }
}
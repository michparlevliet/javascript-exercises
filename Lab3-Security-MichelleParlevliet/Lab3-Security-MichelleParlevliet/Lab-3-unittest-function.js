//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
// var humbrId = /[n|N]\d{8}/;
function checkHumbrId(idIn) {
  "use strict";
  let humbrId = /^(n|N)\d{8}$/;
  let isIdValid = false;

  console.log(humbrId.test(idIn));

  let check = humbrId.test(idIn);

  if (check === true) {
    isIdValid = true;
    // isIdValid = "==PASSED==";
  }
 
  // else {
  //   isIdValid = "xxFAILEDxx";
  // }

  return isIdValid;
}// end checkHumbrId

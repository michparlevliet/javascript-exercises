// REGEX VARIABLE FOR ENCRYPTED PW
let pwEncrypt = /^[a-f0-9]{32}$/;
// VARIABLES FOR USERNAME AND PW:
var realUser = "whoever";
var realPw = "whatever";

// TEST TO PASS FOR MD5ENCRYPT FUNCTION
describe("md5Encrypt function", function() {
  it("should return a string of the hashed value(as 32 hexadecimal characters).", function() {
    let pwIn = "example1";
    expect ( md5Encrypt(pwIn) ).toMatch(pwEncrypt);
  });
});

// TEST TO PASS FOR CHECKLOGIN FUNCTION
describe("checkLogin Test to pass", function() {
  it("should return the Boolean true if the username and the password match a known username and matching password.", function() {
    expect ( checkLogin(realUser, realPw) ).toEqual(true);
  });
});

// TEST TO FAIL FOR CHECKLOGIN FUNCTION
  describe("checkLogin Test to fail", function() {
    it("The checkLogin function should return 'Invalid Username or Password.' if the username input does not match a known username or if the password input does not match a known password.", function() {
      let userIn = "whomever";
      let pwIn = "however";
      expect ( checkLogin(userIn, pwIn) ).toEqual("Invalid Username or Password.");
    });
    it("The checkLogin function should return 'Invalid Username or Password.' if a valid username is input with an invalid password.", function() {
      let pwIn = "however";
      expect ( checkLogin(realUser, pwIn) ).toEqual("Invalid Username or Password.");
    });
    it("The checkLogin function should return 'Invalid Username or Password.' if an invalid username is input with a valid password.", function() {
      let userIn = "forever";
      expect ( checkLogin(userIn, realPw) ).toEqual("Invalid Username or Password.");
    });
    it("The checkLogin function should return 'No username entered.' if the username is an empty string.", function() {
      let userIn = "";
      expect ( checkLogin(userIn, realPw) ).toEqual("No username entered.");
    });
    it("The checkLogin function should return 'No password entered.' if the password is an empty string.", function() {
      let pwIn = "";
      expect ( checkLogin(realUser, pwIn) ).toEqual("No password entered.");
    });
  });


window.onload = function(){

  var login__form = document.forms.login__form;
  var login__name = login__form.login__name;
  var login__password = login__form.login__password;
  var result = document.getElementById("result");

  login__form.onsubmit = function(){
    let userIn = login__name.value;
    let pwIn = login__password.value;

    var checkResult = checkLogin(userIn, pwIn);
    if (checkResult === true) {
      result.innerHTML = "Welcome back!"
    } else {
      result.innerHTML = checkResult;
    }

    result.style.display = "block";
    return false;
  }; 
};
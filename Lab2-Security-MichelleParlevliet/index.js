window.onload = function(){

   var login__form = document.forms.login__form;

  var login__name = login__form.login__name;
  var login__password = login__form.login__password;

  var result = document.getElementById("result");
  var result__name = document.getElementById("result__name");
  var result__password = document.getElementById("result__password");

  login__form.onsubmit = function(){
    // result.classList.add("result__visible");
       result__name.innerHTML = "User Name: " + login__name.value;
    result__password.innerHTML = "Password: " + login__password.value;

    if (login__name.value === ""){
         login__name.classList.add("login__input_error");
      login__name.focus();
      return false;
    }
    if (login__password.value === ""){
         login__password.classList.add("login__input_error");
      login__password.focus();
      return false;
    }
    result.style.display = "block";


    return false;
  };

};
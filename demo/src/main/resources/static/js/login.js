
$("#login-form").submit(function (event) {
  event.preventDefault();

  email= $("#email").val(),
  password = $("#password").val()

  $.ajax({
  type: "Get",
  url: "/users/login/"+email+"/"+password,
  contentType: "application/json",
  success: function (user) {
  localStorage.setItem("id", user.id);
      alert("You have Login successfully!");
   window.location.href="/index.html"
},
  error: function (error) {
  alert("Wrong Email Or Password ", error);
}
});
});
});

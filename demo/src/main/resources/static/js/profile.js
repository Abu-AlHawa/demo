
  $.ajax({
type:"GET",
 url: "/user/findUserId/"+localStorage.getItem("id"),
 success: function (user) {
 document.getElementById("name").innerText = user.name;
 document.getElementById("age").innerText = user.age;
 document.getElementById("address").innerText = user.address;
 document.getElementById("email").innerText = user.email;

 document.getElementById("password").innerText = user.password;
   },
  error: function (error) {
    console.log("Error finding your account", error);
      }});

      function findUserById(id) {
          $.ajax({
              type: "Get",
              url: "/user/findUserId/"+id,
              success: function (user) {
                  alert("find user successfully id="+user.id);
                  window.location.href = "/index.html?id="+user.id;//+ encodeURIComponent(user.id);

              },
              error: function (error) {
                  console.log("Error saving person: ", error);
              }
          });

      }
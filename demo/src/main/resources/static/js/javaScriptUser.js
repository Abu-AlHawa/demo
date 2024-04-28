

   /* $(document).ready(function () {
    // Fetch data using AJAX

    function addRow(user) {
        $("#usersList").append("<tr><td>" + user.id + "</td>" +
            "<td>" + user.name +
            "</td><td>" + user.age + "</td>" +
            "<td>"+user.email+"</td>" +"<td>"+user.address+"</td>"+
            "<td>"+"<td><td>" + user.password + "</td>" +
                               "<td>"+
            "<button onclick='findUserById(" + user.id + ")'>" + "Profile" + "</button>" +
            "</td>"+
            "</tr>");
    }
*/


 /* $("#profile-form").submit(function (event) {
    $.ajax({
    type: "GET",
    url: "/users/getAll2",
    success: function (users) {
    // Iterate through the products and display them in the table
    const usersList = $("#usersList");
    users.forEach(function (users) {
    if(users.id == '38'){


    usersList.append("<tr>" +
    "<td>" + users.id + "</td>"
    +"<td>"+ users.name + "</td>"
    +"<td>"+ users.age +"</td>"+
    "<td>"+ users.email+"</td>"+
    "<td>"+users.address+"</td>"+
        "<td>"+ users.password+"</td>"+
    "<td>" +
    "<button onclick='findUserById(" + users.id + ")'>" + "Profile" + "</button>" +
    "</td>"
    +"</tr>");
    }
});
},
    error: function (error) {
    console.error("Error fetching product data: ", error);
}
});
*/

/*
alert(localStorage.getItem("id"))
$.ajax({
    type: "GET",
    url: "/user/findUserId/1", // + localStorage.getItem("id"),
    success: function (user) {
    alert(JSON.stringify(user))
        // Update HTML elements with user data
        document.getElementById("name").innerText = user.name;
        document.getElementById("age").innerText = user.age;
        document.getElementById("address").innerText = user.address;
        document.getElementById("email").innerText = user.email;
        document.getElementById("password").innerText = user.password;

        // Store user data in localStorage
        localStorage.setItem("name", user.name);
        localStorage.setItem("age", user.age);
        localStorage.setItem("address", user.address);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
    },
    error: function (error) {
        console.log("Error finding your account", error);
    }
});
*/




/*
  $.ajax({
type:"GET",
 url: "/user/findUserId/"+localStorage.getItem("id"),
 success: function (user) {
 document.getElementById("name").innerText = user.name;
 document.getElementById("age").innerText = user.age;
 document.getElementById("address").innerText = user.address;
 document.getElementById("email").innerText = user.email;
 document.getElementById("password").innerText = user.password;
 localStorage.setItem("name",user.name);
  localStorage.setItem("age",user.age);
 localStorage.setItem("address",user.address);
 localStorage.setItem("email",user.email);
 localStorage.setItem("password",user.password);

   },
  error: function (error) {
    console.log("Error finding your account", error);
      }});
      */

function getAll() {
      $.ajax({
          type: "GET",
          url: "/user/getAll/" + localStorage.getItem("id"),
          success: function (user) {
              // Update input fields with user data
               document.getElementById("address").value = user.address;
              document.getElementById("email").value = user.email;
              document.getElementById("name").value = user.name;
              document.getElementById("password").value = user.password;

              // Store user data in localStorage
               localStorage.setItem("address",user.address);
              localStorage.setItem("email", user.email);
              localStorage.setItem("name", user.name);
              localStorage.setItem("password", user.password);
          },
          error: function (error) {
              console.log("Error finding your account", error);
          }
      });
}


     $("#signup-form").submit(function (event) {
        event.preventDefault();
        let user = {
            address: $("#address").val(),
        email: $("#email").val(),
        name: $("#name").val(),
        password: $("#password").val(),
    };
    //alert(JSON.stringify(user))
        $.ajax({
        type: "POST",
        url: "/user/addUser",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function () {
        alert("user saved successfully!");
             window.location.href="/main.html"

    //    window.onload = function() {
    //            var signupForm = document.getElementById('signup-form');
    //            signupForm.addEventListener('submit', function(event) {
    //                event.preventDefault();
    //                // Perform form submission using AJAX if needed
    //                // After successful submission, redirect to index.html
//    document.addEventListener('DOMContentLoaded', function() {
    //          // Get the login link element
    //          var form-link = document.getElementById('login.html');
    //
    //          // Add click event listener
    //          form-link.addEventListener('click', function(event) {
    //            // Prevent the default behavior of the link (preventing it from navigating to #)
    //            event.preventDefault();
    //
//                    window.location.href = 'login.html';
    //            });
    //        };

    },
        error: function (error) {
        console.log("Error saving person: ", error);
    }
});
});


$("#edit-form").submit(function (event) {
  event.preventDefault();
     $("#name").removeAttr('readonly');
      $("#address").removeAttr('readonly');
   $("#email").removeAttr('readonly');
   $("#password").removeAttr('readonly');

  });








$("#login-form").submit(function (event) {
  event.preventDefault();

  email= $("#email").val(),
  password = $("#password").val()

  $.ajax({
  type: "Get",
  url: "/users/login/"+email+"/"+password,
  contentType: "application/json",
  success: function (user) {
//  alert(user.id)
  if (user.id == 0) {
  alert("Wrong Email Or Password ");
  }
  else {
  localStorage.setItem("id", user.id);
        alert("You have Login successfully!");
     window.location.href="/main.html"
  }

},
  error: function (error) {
  alert("Wrong Email Or Password ", error);
}
});
});



function save_data(){

 //$("#save-form").submit(function (event) {
     //event.preventDefault();
     let user = {
          address: $("#address").val(),
       email: $("#email").val(),
     name: $("#name").val(),
     password: $("#password").val(),

  };
  alert(JSON.stringify(user))
      $.ajax({
      type: "PUT",
      url: "/update/1",
      contentType: "application/json",
      data: JSON.stringify(user),
      success: function () {
     alert("user saved successfully!");
     },
//       error: function (error) {
//       alert("Wrong Email Or Password ", error);
//     }
     });

//});


}

    function findUserById(id) {
    $.ajax({
        type: "Get",
        url: "/user/findUserId/"+id,
        success: function (user) {
            alert("find user successfully id="+user.id);
            window.location.href = "/main.html?id="+user.id;//+ encodeURIComponent(user.id);

        },
        error: function (error) {
            console.log("Error saving person: ", error);
        }
    });

}

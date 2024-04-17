
    $("#signup-form").submit(function (event) {
    event.preventDefault();
    let user = {
        address: $("#address").val(),
    age: $("#age").val(),
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
//    window.onload = function() {
//            var signupForm = document.getElementById('signup-form');
//            signupForm.addEventListener('submit', function(event) {
//                event.preventDefault();
//                // Perform form submission using AJAX if needed
//                // After successful submission, redirect to index.html
//                window.location.href = 'index.html';
//            });
//        };

},
    error: function (error) {
    console.log("Error saving person: ", error);
}

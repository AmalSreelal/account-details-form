$(document).ready(function () {
    $("#accountForm").on("submit", function (e) {
        e.preventDefault(); 

        $(".error").text("");

        let isValid = true;

        const name = $("#name").val();
        if (name.length < 3 || name.length > 50) {
            $("#nameError").text("Name must be between 3 and 50 characters.");
            isValid = false;
        }

        const email = $("#email").val();
        if (!email) {
            $("#emailError").text("Email is required.");
            isValid = false;
        }

        const phone = $("#phone").val();
        if (phone.length < 10 || phone.length > 14) {
            $("#phoneError").text("Phone must be between 10 and 14 characters.");
            isValid = false;
        }

        const age = parseInt($("#age").val());
        if (isNaN(age) || age < 18 || age > 120) {
            $("#ageError").text("Age must be between 18 and 120.");
            isValid = false;
        }

        const gender = $("#gender").val();
        if (gender.length < 4 || gender.length > 15) {
            $("#genderError").text("Gender must be between 4 and 15 characters.");
            isValid = false;
        }

        const address = $("#address").val();
        if (address.length > 50) {
            $("#addressError").text("Address cannot exceed 50 characters.");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
        }
    });
});

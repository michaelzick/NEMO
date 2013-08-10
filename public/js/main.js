$(function () {
	// contact form
    $('#contact_form .submit').click(function () {
        var userInfo = {
            num: $('#num_field').val(),
            firstName: $('#first_name_field').val(),
            lastName: $('#last_name_field').val()
        };

        $.ajax({
            url: "/",
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(userInfo),
            complete: function (data) {
                console.log("success!");
            }
        });
    });
	// /contact form
});
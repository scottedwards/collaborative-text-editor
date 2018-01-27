$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        var password = $("#pswd").val()
        var code = $("#t-editor").val()
        $.ajax({
            url: "php/run_code.php",
            type: "POST",
            dataType: "json",
            data: {
                "password": password,
                "program-code": code
            }
        }).done(function(data) {
            $("#code-output").empty();
            for (var key in data) {
                $("#code-output").append(data[key] + "\n");
            }
            $('html,body').animate({scrollTop: $("#output").offset().top}, 800);
            $("#output").effect("shake",{direction: "down", times: 1, distance: 10}, 500);
        }).fail(function(data) {
            console.log("oh no!");
            console.log(data);
        });
    });
});

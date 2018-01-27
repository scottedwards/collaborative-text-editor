$(document).ready(function() {

    //get the code from the server
    getCode();

    $("#btn-load").click(function() {
        getCode();
        highlight($(this));
    });

    $("#btn-save").click(function() {
        if ($("#t-editor").val() != "") {
            saveCode();
        } else {
            alert("There is nothing to save!"); 
        }
        highlight($(this));
    });
})

function highlight(input) {
    input.animate({
        backgroundColor: "#00AA00",
        color: "#fff",
    },600);
    input.animate({
        backgroundColor: "#FFFFFF",
        color: "#000",
    },600);
}

function getCode() {
    $.ajax({
        url: "php/get_code.php",
        type: "GET",
        dataType: "json"
    }).done(function(data) {
        $("#t-editor").val('');
        var code = "";
        for (var key in data) {
            code += data[key];
        }
        console.log("code: ");
        console.log(code);
        $("#t-editor").val(code);
    }).fail(function(data) {
        console.log("get error");
        console.log(data);
    });
}
function saveCode() {
    var code = $("#t-editor").val(); 
    $.ajax({
        url: "php/save_code.php",
        type: "POST",
        dataType: "json",
        data: {
            "program-code": code
        }
    }).done(function(data) {
        console.log(data);
    }).fail(function(data) {
        console.log("save error");
        console.log(data);
    });
}

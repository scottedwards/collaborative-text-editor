function init() {
    //// Initialize Firebase.
    var config = {
        apiKey: "AIzaSyC_JdByNm-E1CAJUkePsr-YJZl7W77oL3g",
        authDomain: "firepad-tests.firebaseapp.com",
        databaseURL: "https://firepad-tests.firebaseio.com"
    };
    firebase.initializeApp(config);
    //// Get Firebase Database reference.
    var firepadRef = getExampleRef();
    //// Create ACE
    var editor = ace.edit("firepad-container");
    editor.setTheme("ace/theme/monokai");
    editor.setShowPrintMargin(false);
    var session = editor.getSession();
    session.setUseWrapMode(true);
    session.setUseWorker(false);
    session.setMode("ace/mode/python");
    //// Create Firepad.
    var firepad = Firepad.fromACE(firepadRef, editor, {
        defaultText: 'print("Hello, world!")'
    });

    //run code when the run button is submitted
    $("#run-code").click(function() {
        var password = $("#pswd").val()
        var code = firepad.getText();
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
}
// Helper to get hash from end of URL or generate a random one.
function getExampleRef() {
    var ref = firebase.database().ref();
    var hash = window.location.hash.replace(/#/g, '');
    if (hash) {
        ref = ref.child(hash);
    } else {
        ref = ref.push(); // generate unique location.
        window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
    }
    if (typeof console !== 'undefined') {
        console.log('Firebase data: ', ref.toString());
    }
    return ref;
}


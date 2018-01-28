<?php
if ($_POST["password"] == "python") {
    $program_code =  $_POST["program-code"];
    $myfile = fopen("../code/input_code.py", "w") or die("Unable to open file!");
    fwrite($myfile, $program_code);
    fclose($myfile);

    exec("python ../code/input_code.py 2>&1", $output);
    echo(json_encode($output));
} else {
    $output = array(
        "error" => "Password is Incorrect!"
    );
    echo json_encode($output);
}

?>

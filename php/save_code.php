<?php
$output = array();

$output["code"] = $_POST["program-code"];

if (isset($_POST["program-code"])) {
    $program_code = $_POST["program-code"];
    $myfile = fopen("../code/shared_code.py", "w") or die("Unable to open file!");
    fwrite($myfile, $program_code);
    fclose($myfile);
    $output["response"] = true;
} else {
    $output["response"] = false;
}

echo json_encode($output);
?>

<?php
$file_handle = fopen("../code/shared_code.py", "r");
$output = array();
$counter = 0;
while (!feof($file_handle)) {
    $line = fgets($file_handle);
    $output[$counter++] = $line;
}
fclose($file_handle);
echo json_encode($output);
?>

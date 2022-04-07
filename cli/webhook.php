<?php

error_reporting(E_ALL); // Error engine - always TRUE!

ini_set('ignore_repeated_errors', TRUE); // always TRUE

ini_set('display_errors', TRUE); // Error display - FALSE only in production environment or real server

ini_set('log_errors', TRUE); // Error logging engine

ini_set('error_log', 'request.log'); // Logging file path

ini_set('log_errors_max_len', 1024); // Logging file size

// set_time_limit(0); // unlimited max execution time
header('Content-Type: application/json');
$request = file_get_contents('php://input');
$req_dump = print_r( $request, true );

$data = json_decode($request, true);
$ci = curl_init();
$url = "https://api.github.com/repos/Rahul-Varma8070/Rahul-Varma8070.github.io/tarball/master" ; // Source file
$fp = fopen("repo.zip", "w"); // Destination location
// curl_setopt_array( $ci, array(
//     CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
//     CURLOPT_URL => $url,
//     CURLOPT_TIMEOUT => 3600,
//     // CURLOPT_FILE => $fp
// ));
// $contents = curl_exec($ci); // Returns '1' if successful
$context = stream_context_create(
    array(
        "http" => array(
            "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
        )
    )
);
$contents = file_get_contents($url, false, $context);
echo $contents;
file_put_contents( 'repo.zip', ($contents) );
// curl_close($ci);
// fclose($fp);
// $fp = file_put_contents( 'request.log', ($r) );


?>
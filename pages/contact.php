<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "freshgreens";

// connection
$conn = new mysqli($servername, $username, $password, $dbname);


if($conn-> connect_error) {
    die("Connection failed: " .$conn->connect_error);
}

// Retrieve form data
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$message = $_POST["message"];

// Insert data into the database
$sql = "INSERT INTO contact (firstname, lastname, email, message) VALUES ('$firstname', '$lastname', '$email', '$message')";

if($conn -> query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " .$sql . "<br>" . $conn->error;
}

$conn -> close();

header("Location: contact.html");
exit();

?>
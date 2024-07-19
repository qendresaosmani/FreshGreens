<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "freshgreens";

// Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$message = $_POST["message"];

// Sanitize input data
$firstname = $conn->real_escape_string($firstname);
$lastname = $conn->real_escape_string($lastname);
$email = $conn->real_escape_string($email);
$message = $conn->real_escape_string($message);

// Insert data into the database
$sql = "INSERT INTO contact (firstname, lastname, email, message) VALUES ('$firstname', '$lastname', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

// Redirect after successful submission
header("Location: contact.html");
exit();

?>
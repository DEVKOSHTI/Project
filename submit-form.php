<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = 'youremail@example.com';

// Set the subject line
$subject = 'New contact form submission';

// Set the email body
$body = "Name: $name\nEmail: $email\nMessage: $message";

// Send the email
if (mail($to, $subject, $body)) {
  // If the email was sent successfully, redirect to a success page
  header('Location: success.html');
} else {
  // If the email failed to send, redirect to an error page
  header('Location: error.html');
}
?>

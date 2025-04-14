// JavaScript for form validation
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill out both fields.");
        return;
    }

    // In a real-world scenario, you would send this data to your server here
    alert(`Welcome back, ${email}! You have successfully signed in.`);

    // Redirect to the index.html page after successful sign-in
    window.location.href = 'index.html';  // Redirects to the index page
});

function analyzePassword() {
    var password = document.getElementById('password').value;
    var resultElement = document.getElementById('result');

    // Reset result
    resultElement.innerHTML = '';

    // Minimum length requirement
    if (password.length < 8) {
        resultElement.innerHTML = 'Your password is too short. Please enter at least 8 characters.';
        return;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        resultElement.innerHTML = 'Your password should contain at least one uppercase letter.';
        return;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        resultElement.innerHTML = 'Your password should contain at least one lowercase letter.';
        return;
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
        resultElement.innerHTML = 'Your password should contain at least one digit.';
        return;
    }

    // Check for at least one special character
    var specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if (!specialCharacters.test(password)) {
        resultElement.innerHTML = 'Your password should contain at least one special character.';
        return;
    }

    // Password is considered strong
    resultElement.innerHTML = 'Your password is strong and can be used.';
}

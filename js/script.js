// Carousel - Revolving Pictures Side to Side
let currentImageIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-item');

function slideImages() {
    carouselImages.forEach((img, index) => {
        img.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    });
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
}

setInterval(slideImages, 5000); // Change image every 5 seconds

// Testimonial Carousel - Slide side to side
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function slideTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    });
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

setInterval(slideTestimonials, 5000);  // Slide testimonials every 5 seconds

// BMI Calculator
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    if (!isNaN(height) && !isNaN(weight)) {
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('bmi-result').textContent = `Your BMI is ${bmi}`;
        localStorage.setItem('bmi', bmi);  // Save BMI to localStorage
    } else {
        alert('Please enter valid height and weight');
    }
});

// Body Fat Calculator
document.getElementById('body-fat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const waist = parseFloat(document.getElementById('waist').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const hip = parseFloat(document.getElementById('hip').value) || 0;
    if (!isNaN(waist) && !isNaN(neck)) {
        const bodyFat = ((waist + hip - neck) / 2.2).toFixed(2);
        document.getElementById('body-fat-result').textContent = `Your estimated body fat is ${bodyFat}%`;
        localStorage.setItem('bodyFat', bodyFat);  // Save Body Fat to localStorage
    } else {
        alert('Please enter valid measurements');
    }
});

// Load saved progress on page load
window.addEventListener('load', function() {
    const savedBMI = localStorage.getItem('bmi');
    const savedBodyFat = localStorage.getItem('bodyFat');
    if (savedBMI) {
        document.getElementById('bmi-result').textContent = `Last recorded BMI: ${savedBMI}`;
    }
    if (savedBodyFat) {
        document.getElementById('body-fat-result').textContent = `Last recorded Body Fat: ${savedBodyFat}%`;
    }
});

// Load saved progress (BMI and Body Fat) on the progress page
window.addEventListener('load', function() {
    const savedBMI = localStorage.getItem('bmi');
    const savedBodyFat = localStorage.getItem('bodyFat');
    if (savedBMI) {
        document.getElementById('bmi-progress-display').textContent = savedBMI;
    }
    if (savedBodyFat) {
        document.getElementById('body-fat-progress-display').textContent = savedBodyFat;
    }
});

// Social Media Login Buttons with Logos
document.querySelector('.google-login').innerHTML = '<img src="images/google.png" alt="Google Logo" /> Sign in with Google';
document.querySelector('.facebook-login').innerHTML = '<img src="images/facebook.jpeg" alt="Facebook Logo" /> Sign in with Facebook';
document.querySelector('.apple-login').innerHTML = '<img src="images/apple.png" alt="Apple Logo" /> Sign in with Apple';

// Sign-Up and Login Functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if user exists in localStorage
    const storedPassword = localStorage.getItem(email);
    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});

// Forgot Password Logic
document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    const email = prompt('Enter your email to reset your password:');
    if (email) {
        const userExists = localStorage.getItem(email);
        if (userExists) {
            alert('Password reset link has been sent to your email.');
        } else {
            alert('No account found with that email.');
        }
    }
});

// Sign-Up Link Click
document.getElementById('sign-up-link').addEventListener('click', function() {
    const email = prompt('Enter your email to sign up:');
    const password = prompt('Enter your password:');
    if (email && password) {
        localStorage.setItem(email, password);
        alert('Sign-up successful! You can now log in.');
    }
});

// Social Media Login Buttons (demo functionality)
document.querySelector('.google-login').addEventListener('click', function() {
    alert('Sign in with Google is not yet implemented.');
});

document.querySelector('.facebook-login').addEventListener('click', function() {
    alert('Sign in with Facebook is not yet implemented.');
});

document.querySelector('.apple-login').addEventListener('click', function() {
    alert('Sign in with Apple is not yet implemented.');
});

// Fitness Levels Section Hover Effect and Redirection (workout page)
const fitnessLevels = document.querySelectorAll('.fitness-level');
fitnessLevels.forEach(level => {
    level.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    level.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Redirect to exercise plan (replace with your own logic)
    level.addEventListener('click', function() {
        alert(`You selected the ${this.querySelector('h3').textContent} Plan!`);
    });
});

// Sign-Up and Login Functionality for Workout Page
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if user exists
    const storedPassword = localStorage.getItem(email);
    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});

// BMI Calculator and Tracker
document.getElementById('progress-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch BMI and Body Fat Values
    const bmi = parseFloat(document.getElementById('bmi-progress-input').value);
    const bodyFat = parseFloat(document.getElementById('body-fat-progress-input').value);
    
    // Store the values in local storage
    if (!isNaN(bmi) && !isNaN(bodyFat)) {
        localStorage.setItem('bmi', bmi);
        localStorage.setItem('bodyFat', bodyFat);
        displayProgress();
    } else {
        alert('Please enter valid numbers for BMI and Body Fat.');
    }
});

// Display stored BMI and Body Fat
function displayProgress() {
    const savedBMI = localStorage.getItem('bmi');
    const savedBodyFat = localStorage.getItem('bodyFat');
    
    document.getElementById('bmi-progress-display').textContent = savedBMI ? savedBMI : 'No data available';
    document.getElementById('body-fat-progress-display').textContent = savedBodyFat ? savedBodyFat + '%' : 'No data available';
}

// Call the function to display any previously stored progress when the page loads
window.onload = function() {
    displayProgress();
};

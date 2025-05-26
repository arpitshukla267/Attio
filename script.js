const dropdownContainer = document.getElementById('dropdown-container'); 
const dropdown = document.querySelector('.dropdown'); 
const dropdownContainer2 = document.getElementById('dropdown-container2'); 
const dropdown2 = document.querySelector('#dropdown2'); 

dropdown.style.opacity = '0'; // Show the dropdown
dropdown.style.pointerEvents = 'none'; // Disable interaction with the dropdown

dropdownContainer.addEventListener('mouseover', function () {
    dropdown.style.opacity = '1'; // Show the dropdown
    dropdown.style.pointerEvents = 'auto'; // Allow interaction with the dropdown
});

dropdownContainer.addEventListener('mouseout', function () {
    dropdown.style.opacity = '0'; // Hide the dropdown
    dropdown.style.pointerEvents = 'none'; // Disable interaction with the dropdown
});

dropdown2.style.opacity = '0'; // Show the dropdown
dropdown2.style.pointerEvents = 'none'; // Disable interaction with the dropdown

dropdownContainer2.addEventListener('mouseover', function () {
    dropdown2.style.opacity = '1'; // Show the dropdown
    dropdown2.style.pointerEvents = 'auto'; // Allow interaction with the dropdown
});

dropdownContainer2.addEventListener('mouseout', function () {
    dropdown2.style.opacity = '0'; // Hide the dropdown
    dropdown2.style.pointerEvents = 'none'; // Disable interaction with the dropdown
});

const search = document.querySelector('#search');
const chat = document.querySelector('#chat');

search.style.opacity = '0'; // Initially hide the search bar
search.style.pointerEvents = 'none'; // Disable interaction with the search bar

chat.addEventListener('click', function () {
    if (search.style.opacity === '0') {
        search.style.opacity = '1';
        search.style.pointerEvents = 'auto'; 
        chat.style.backgroundColor = 'black'; 
    }
    else {
        search.style.opacity = '0'; 
        chat.style.backgroundColor = 'white'; 
    }
});

const searchInput = document.querySelector('#search-input'); // Select the search input field
const chatMessages = document.querySelector('#chat-messages'); // Select the chat messages container

// Add event listener for the search input
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { // Check if the Enter key is pressed
        const searchValue = searchInput.value.trim(); // Get the value of the input and trim whitespace
        if (searchValue !== '') { // Only add non-empty messages
            const message = document.createElement('div'); // Create a new div for the message
            message.classList.add('chat-message'); // Add a class for styling

            const messageText = document.createElement('span'); // Create a span for the message text
            messageText.textContent = searchValue; // Set the text content
            messageText.classList.add('message-text'); // Add a class for styling the text

            const messageTime = document.createElement('span'); // Create a span for the time
            const currentTime = new Date(); // Get the current time
            const hours = currentTime.getHours().toString().padStart(2, '0'); // Format hours
            const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Format minutes
            messageTime.textContent = `${hours}:${minutes}`; // Set the time text
            messageTime.classList.add('message-time'); // Add a class for styling the time

            message.appendChild(messageText); // Append the text to the message
            message.appendChild(messageTime); // Append the time to the message
            chatMessages.appendChild(message); // Append the message to the chat messages container

            searchInput.value = ''; // Clear the input field
        }
    }
});

const imgs = document.getElementsByClassName('img'); // Select all elements with the class 'img'
const imgHover = document.querySelector('.img-hover'); // Select the image with the class 'img-hover'

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseover', function () {
        imgs[i].style.transform = 'scale(1.1)'; // Scale the image on hover
        imgHover.style.opacity = '1'; // Show the hover effect
        imgHover.innerText = "Were moving quickly and meaningfully together, creating truly great things with momentum. It's hard not to be inspired by this. Luci 🇬🇧 Operations";
    });

    imgs[i].addEventListener('mouseout', function () {
        imgs[i].style.transform = 'scale(1)'; // Reset the scale on mouse out
        imgHover.style.opacity = '0'; // Show the hover effect
        imgHover.innerText = "";
    });
};

const submitButton = document.getElementById('submit-btn'); // Select the submit button
const emailInput = document.getElementById('email-input'); // Select the email input field

submitButton.addEventListener('click', function () {
    const emailValue = emailInput.value.trim(); // Get the value of the input and trim whitespace
    if (emailValue !== '') { // Only proceed if the input is not empty
        alert(`Email submitted: ${emailValue}`); // Show an alert with the email value
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.'); // Show an alert if the input is empty
    }
});

emailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // Check if the Enter key is pressed
        const emailValue = emailInput.value.trim(); // Get the value of the input and trim whitespace
        if (emailValue !== '') { // Only proceed if the input is not empty
            alert(`Email submitted: ${emailValue}`); // Show an alert with the email value
            emailInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid email address.'); // Show an alert if the input is empty
        }
    }
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    if(menu.style.top === "-12rem"){
       menu.style.top = "100%";
    }
    else{
        menu.style.top = "-12rem";
    }
})

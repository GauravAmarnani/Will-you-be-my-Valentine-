const messages = [
    "Anupama band",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "I'll listen to you Yapping if you say yes",
    "Come on!!!",
    "How about a wonderful Beach Date!?",
    "I still can't believe you would say no to that",
    "PLEASE!!!?",
    "PRETTY PLEASE!!?",
    "THANKYOU!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
        
        if (messageIndex === messages.length) {
            handleYesClick(); // Redirect after the final message
            return;
        }
        
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

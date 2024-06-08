function speakText() {
    // Get the value from the input field
    const textInput = document.getElementById('textInput').value;

    // Check if the browser supports the Web Speech API
    if ('speechSynthesis' in window) {
        // Create a new instance of SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(textInput);

        // Set properties (optional)
        utterance.lang = 'en-US'; // You can set the language here
        utterance.pitch = 1; // You can adjust the pitch
        utterance.rate = 1; // You can adjust the speed

        // Speak the text
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support the Web Speech API.');
    }
}

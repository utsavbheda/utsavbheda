document.addEventListener("DOMContentLoaded", function() {
    const bootSequence = document.getElementById('boot-sequence');
    const terminalOutput = document.querySelector('.terminal-output');
    const mainContent = document.getElementById('main-content');
    const commandInput = document.getElementById('command-input'); // Get the command input element

    const bootText = [
        "Initializing secure connection...",
        "Establishing data link to user profile...",
        "Loading security protocols...",
        "Scanning for anomalies...",
        "All systems clear. Accessing Utsav Bheda's portfolio.",
        "Access Granted: Utsav Bheda, Cyber Security Analyst.",
        "> Starting system..."
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (lineIndex < bootText.length) {
            const currentLine = bootText[lineIndex];
            if (charIndex < currentLine.length) {
                terminalOutput.textContent += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 40); // Typing speed
            } else {
                terminalOutput.textContent += '\n'; // New line after a line is complete
                lineIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 800); // Pause before next line
            }
        } else {
            // Boot sequence complete
            setTimeout(() => {
                bootSequence.style.display = 'none';
                mainContent.style.display = 'block';
                
                // NEW: Automatically focus on the command input for immediate use
                if (commandInput) {
                    commandInput.focus();
                }

            }, 1500); // Wait 1.5 seconds before hiding the screen
        }
    }

    typeWriter();
});
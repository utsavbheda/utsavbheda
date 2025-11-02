document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById('main-content');
    const sections = document.querySelectorAll('section');
    const commandInput = document.getElementById('command-input');
    // Ensure this element exists in your index.html
    const outputLog = document.getElementById('terminal-output-log'); 

    // --- Helper Function for Terminal Output ---
    // Writes a message to the output log (e.g., error messages)
    function writeOutput(message, type = 'error') {
        // Clear previous message
        outputLog.innerHTML = ''; 

        // Create a <pre> tag for terminal-style output
        const outputPre = document.createElement('pre');
        outputPre.textContent = message;
        
        // Use a class for different styles (e.g., 'error' or 'info')
        if (type === 'error') {
            outputPre.style.color = '#ff0000'; // Red for errors
        } else {
            outputPre.style.color = '#00ff00'; // Green for success/info
        }

        outputLog.appendChild(outputPre);

        // Clear the message after a few seconds
        setTimeout(() => {
            outputLog.innerHTML = '';
        }, 3000);
    }

    // --- Initial Setup ---
    // Hide all sections except the home section initially
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });

    // --- Command Input Handling ---
    if (commandInput) {
        commandInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                const command = commandInput.value.trim().toLowerCase();
                commandInput.value = ''; 

                processCommand(command);
            }
        });
    }

    // ⭐ CRITICAL FIX: Experience Link Click Handling 
    // --- Link Click Handling (Universal Fix for ALL data-target links) ---
// This listener is placed on the main content and handles clicks 
// for both the case file list AND the 'go back' links.
mainContent.addEventListener('click', function(e) {
    // Find the closest ancestor that is an anchor tag <a>
    const link = e.target.closest('a'); 

    if (link) {
        const targetId = link.getAttribute('data-target');
        // Check if the link has a data-target attribute
        if (targetId) {
            e.preventDefault(); // Stop the link from navigating/refreshing
            showSection(targetId);
        }
    }
});


    // --- Core Command Processor ---
    function processCommand(command) {
        switch (command) {
            case 'help':
                writeOutput('Available commands: about, experience, skills, portfolio, certifications, education, contact, clear, home', 'info');
                break;
            case 'about':
                showSection('about');
                break;
            case 'experience':
                showSection('experience');
                break;
            case 'skills':
                showSection('skills');
                break;
            case 'portfolio':
                showSection('portfolio');
                break;
            case 'certifications':
                showSection('certifications');
                break;
            case 'education':
                showSection('education');
                break;
            case 'contact':
                showSection('contact');
                break;
            case 'clear':
            case 'home': // Added 'home' as an alias for clear
                showSection('home');
                break;
            default:
                writeOutput(`Command not found: ${command}. Type 'help' for options.`);
                break;
        }
    }

    // Function to show a specific section
    function showSection(targetId) {
        // Hide all sections first
        sections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
            // Scroll the main content back to the top when a new section is shown
            mainContent.scrollTop = 0;
        } else {
            writeOutput(`Error: Section ID '${targetId}' not found.`);
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById('main-content');
    const sections = document.querySelectorAll('section');
    const commandInput = document.getElementById('command-input');
    const terminalInputDiv = document.querySelector('.terminal-input');

    // Make sure main content is initially hidden (as defined in HTML)
    // The boot_sequence.js will make this visible
    
    // Hide all sections except the home section initially
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });

    // Handle navigation via command line
    if (commandInput) {
        commandInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent new line
                const command = commandInput.value.trim().toLowerCase();
                commandInput.value = ''; // Clear the input

                processCommand(command);
            }
        });
    }

    // Process the entered command
function processCommand(command) {
    switch (command) {
        case 'help':
            alert('Available commands: about, experience, skills, portfolio, certifications, education, contact, clear');
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
            showSection('home');
            break;
        default:
            alert(`Command not found: ${command}`);
            break;
    }
}

    // Function to show a specific section
    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // Function to show a specific case file section
window.showCaseFile = function(caseId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSection = document.getElementById(caseId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
};
});
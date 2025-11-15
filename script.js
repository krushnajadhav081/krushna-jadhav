// Navbar Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking
        navLinks.classList.remove('active');
    });
});

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Function to open modal with content
function openModal(content) {
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Skills Modals
document.querySelectorAll('#skills .modal-trigger').forEach(button => {
    button.addEventListener('click', () => {
        const skill = button.parentElement.dataset.skill;
        let content = '';
        switch (skill) {
            case 'html-css':
                content = `
                    <h3>HTML, CSS</h3>
                    <p><strong>Details:</strong> [Add your proficiency level, examples of projects, learning journey, or tools used here.]</p>
                `;
                break;
            case 'c-programming':
                content = `
                    <h3>C Programming (Beginner)</h3>
                    <p><strong>Details:</strong> [Add your experience, projects, challenges, or future plans here.]</p>
                `;
                break;
            case 'linux':
                content = `
                    <h3>Linux</h3>
                    <p><strong>Details:</strong> [Add your comfort level, commands used, projects, or certifications here.]</p>
                `;
                break;
            case 'networking':
                content = `
                    <h3>Basic Networking</h3>
                    <p><strong>Details:</strong> [Add your understanding, tools learned, practical applications, or examples here.]</p>
                `;
                break;
            case 'cybersecurity':
                content = `
                    <h3>Cybersecurity Fundamentals</h3>
                    <p><strong>Details:</strong> [Add core concepts learned, projects, ethical considerations, or goals here.]</p>
                `;
                break;
            case 'ethical-hacking':
                content = `
                    <h3>Ethical Hacking Basics</h3>
                    <p><strong>Details:</strong> [Add skills acquired, tools used, projects, or legal aspects here.]</p>
                `;
                break;
            case 'video-editing':
                content = `
                    <h3>Video Editing (CapCut)</h3>
                    <p><strong>Details:</strong> [Add projects created, techniques learned, software used, or portfolio links here.]</p>
                `;
                break;
            case 'premiere-pro':
                content = `
                    <h3>Learning Adobe Premiere Pro</h3>
                    <p><strong>Details:</strong> [Add progress, tutorials followed, projects, or future plans here.]</p>
                `;
                break;
            default:
                content = '<p>Details coming soon.</p>';
        }
        openModal(content);
    });
});

// Projects Modals
document.querySelectorAll('#projects .modal-trigger').forEach(button => {
    button.addEventListener('click', () => {
        const project = button.parentElement.dataset.project;
        let content = '';
        switch (project) {
            case 'death-clock':
                content = `
                    <h3>Death Clock Website</h3>
                    <p><strong>Details:</strong> [Add your detailed description, tech stack, challenges, and outcomes here.]</p>
                    <a href="#" class="cta-button">View Repository</a>
                `;
                break;
            case 'ai-chatbot':
                content = `
                    <h3>AI Chatbot Based on Billionaire Mindset Books</h3>
                    <p><strong>Details:</strong> [Add development process, AI tools used, features, and impact here.]</p>
                    <a href="#" class="cta-button">View Repository</a>
                `;
                break;
            case 'herbal-powder':
                content = `
                    <h3>Herbal Loose Powder Formulation Research Project</h3>
                    <p><strong>Details:</strong> [Add research methodology, findings, applications, or collaborations here.]</p>
                    <a href="#" class="cta-button">View Repository</a>
                `;
                break;
            case 'music-players':
                content = `
                    <h3>Two HTML-Based Music Player UIs</h3>
                    <p><strong>Details:</strong> [Add design process, features, code snippets, or user feedback here.]</p>
                    <a href="#" class="cta-button">View Repository</a>
                `;
                break;
            case 'pdf-generator':
                content = `
                    <h3>PDF Generator Website for Assignment/Lab Tracking</h3>
                    <p><strong>Details:</strong> [Add functionality, tech used, user benefits, or deployment here.]</p>
                    <a href="#" class="cta-button">View Repository</a>
                `;
                break;
            case 'ethical-hacking':
                content = `
                    <h3>Ethical Hacking School Project</h3>
                    <p><strong>Details:</strong> [Add tools used (e.g., nmap, SSH), methodologies, learnings, or outcomes here.]</p>
                    <a href="#" class="cta-button">View Repository</a>
                `;
                break;
            case 'linux-mini':
                content = `
                    <h3>Linux + HTML/CSS Mini-Projects</h3>
                    <p><strong>Details:</strong> [Add project descriptions, integrations, challenges, or examples here.]</p>
                    <a href="#" class="cta-button">View Repository</a>
                `;
                break;
            default:
                content = '<p>Details coming soon.</p>';
        }
        openModal(content);
    });
});

// Experience Modals
document.querySelectorAll('#experience .modal-trigger').forEach(button => {
    button.addEventListener('click', () => {
        const experience = button.parentElement.dataset.experience;
        let content = '';
        switch (experience) {
            case 'early-exploration':
                content = `
                    <h3>Early Exploration</h3>
                    <p><strong>Details:</strong> [Add deeper insights, specific projects, learnings, or reflections here.]</p>
                `;
                break;
            case 'school-projects':
                content = `
                    <h3>School Projects</h3>
                    <p><strong>Details:</strong> [Add project details, tools used, outcomes, or skills gained here.]</p>
                `;
                break;
            case 'ai-experimentation':
                content = `
                    <h3>AI Tool Experimentation</h3>
                    <p><strong>Details:</strong> [Add tools explored, workflows improved, projects, or challenges here.]</p>
                `;
                break;
            case 'ui-concepts':
                content = `
                    <h3>Web and UI Concepts</h3>
                    <p><strong>Details:</strong> [Add concepts created, inspirations, tools used, or evolutions here.]</p>
                `;
                break;
            default:
                content = '<p>Details coming soon.</p>';
        }
        openModal(content);
    });
});
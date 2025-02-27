// Data from CV
const cvData = {
  name: 'Ata Tan DAGIDIR',
  location: 'Istanbul, Türkiye',
  email: 'atadagidir@gmail.com',
  phone: '+90-553-096-6227',
  website: 'https://www.fidelioware.com/',
  social_networks: [
    { network: 'GitHub', username: 'atadagg' },
    { network: 'LinkedIn', username: 'ata-dagidir' }
  ],
  education: [
    {
      institution: 'Ozyegin University',
      area: 'Computer Science (English)',
      degree: 'BS',
      start_date: '2021-09',
      end_date: '2026-06',
      highlights: [
        'GPA: 3.36/4.00 (%100 Scholarship)',
        'Top of the class in Algorithms and Data Structures'
      ]
    },
    {
      institution: 'Ozyegin University',
      area: 'Industrial Design (English)',
      degree: 'BS',
      start_date: '2021-09',
      end_date: '2026-06',
      highlights: [
        'GPA: 3.05/4.00 (%100 Scholarship)',
        "Pursuing Double Bachelor's Degree (Currently 3rd Year)"
      ]
    }
  ]
};

// Skills organized by categories
const skills = {
    'SYSTEM.PROGRAMMING': [
        'TypeScript/JavaScript [OK]',
        'Python [OK]',
        'Java [OK]',
        'C++ [OK]',
        'SQL [OK]',
        'React [OK]',
        'Data Structures And Algorithms [OK]'
    ],
    'FRAMEWORK.LIBS': [
        'Node.js [ENABLED]',
        'PyTorch [ENABLED]',
        'Selenium [ENABLED]',
        'HTML/CSS [ENABLED]',
        'REST API [ENABLED]',
        'Kotlin [ENABLED]'
    ],
    'SYS.OPERATIONS': [
        'DigitalOcean [ACTIVE]',
        'Azure [ACTIVE]',
        'Docker [ACTIVE]',
        'Git [ACTIVE]',
        'Cloudflare [ACTIVE]',
        'Apache [ACTIVE]',
        'Bash [ACTIVE]',
        'CI/CD [ACTIVE]',
        'Vercel [ACTIVE]'
    ],
    'DESIGN.TOOLS': [
        'Technical Drawing [INSTALLED]',
        'Fusion 360 [INSTALLED]',
        'Color Theory [INSTALLED]',
        'Human Computer Interaction [INSTALLED]',
        'UX Research [INSTALLED]'
    ],
    'LANGUAGES': [
        'Turkish [NATIVE]',
        'English [NEAR-NATIVE]',
        'Japanese [BEGINNER]'
    ],
    'INTERESTS': [
        'Human-Computer Interaction [ACTIVE]',
        'Statistics [ACTIVE]',
        'Open Source [ACTIVE]',
        'Negotiation Agents [ACTIVE]',
        'Sci-fi [ACTIVE]',
        'Writing [ACTIVE]',
        'Linguistics [ACTIVE]',
        'History [ACTIVE]',
        'Underground Art [ACTIVE]',
        'Music Producing [ACTIVE]',
        'Gymnastics [ACTIVE]',
        'Ney [ACTIVE]'
    ]
};

// Projects from CV
const projects = [
    {
        name: 'Lowballer AI',
        status: 'RUNNING',
        date: '2025-01',
        description: '[SYS] AI system for automated second-hand goods trading',
        specs: 'Python, Selenium, BeautifulSoup, Pandas, MySQL, FastAPI, Docker, PyTorch'
    },
    {
        name: 'Vim Teacher',
        status: 'ACTIVE',
        date: '2024-01',
        description: '[APP] Interactive Vim learning platform',
        specs: 'Kotlin, Firebase, MVVM Architecture'
    },
    {
        name: 'Multi-Platform CMS',
        status: 'STABLE',
        date: '2024-01',
        description: '[SYS] Unified social media posting system',
        specs: 'React, TypeScript, Node.js, OAuth'
    }
];

// Experience from CV
const experience = [
    {
        role: 'Co-Founder',
        company: 'Fidelio',
        status: 'ACTIVE',
        period: '2024-06 - Present',
        description: '[ROLE] Founded and scaled software agency\n[TASK] Delivered 3 commercial websites with custom CMS solutions\n[TASK] Built and deployed 2 commercial web applications with 99.9% uptime\n[TECH] React, Next.js, Node.js, MongoDB, DigitalOcean, Bash, Linux, Cloudflare'
    },
    {
        role: 'Research Assistant',
        company: 'Ozyegin University',
        status: 'ACTIVE',
        period: '2024-12 - Present',
        description: '[ROLE] Undergraduate Research Assistant\n[TASK] Working on developing NLP models for Turkish language\n[LEAD] Prof. Olcay Taner Yildiz'
    },
    {
        role: 'Teaching Assistant',
        company: 'Ozyegin University',
        status: 'COMPLETED',
        period: '2024-06 - 2024-06',
        description: '[ROLE] Teaching Assistant\n[TASK] Led recitation sessions for 20+ engineering students in MATH 103\n[TASK] Demonstrated strong communication skills through one-on-one student mentoring'
    },
    {
        role: 'Full Stack Developer',
        company: 'Suitso',
        status: 'COMPLETED',
        period: '2022-03 - 2022-08',
        description: '[ROLE] Internship\n[TASK] Developed full-stack features using JavaScript, Node.js, and MySQL\n[TASK] Contributed to an enterprise pathfinding solution\n[TASK] Developed test suites for a national foundation\'s election system'
    }
];

// Certifications from CV
const certifications = [
    {
        name: 'CS50: Introduction to Computer Science',
        issuer: 'Harvard University',
        date: '2022-02',
        skills: 'C Programming, Algorithms, Data Structures, Problem-Solving'
    },
    {
        name: 'Google UX Design Certificate',
        issuer: 'Google',
        date: '2021-12',
        skills: 'Figma, User Research, User-Centered Design, Design Thinking'
    }
];

// Navigation handling
let currentMenuIndex = 0;
const menuItems = document.querySelectorAll('.menu-item');
const sections = ['about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];

function updateActiveMenuItem() {
    menuItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentMenuIndex);
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).classList.toggle('hidden', index !== currentMenuIndex);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            e.preventDefault();
            currentMenuIndex = (currentMenuIndex - 1 + menuItems.length) % menuItems.length;
            updateActiveMenuItem();
            break;
        case 'ArrowDown':
            e.preventDefault();
            currentMenuIndex = (currentMenuIndex + 1) % menuItems.length;
            updateActiveMenuItem();
            break;
        case 'Enter':
            e.preventDefault();
            const currentSection = menuItems[currentMenuIndex].getAttribute('data-section');
            document.getElementById(currentSection).classList.remove('hidden');
            break;
        case 'Escape':
            e.preventDefault();
            // Return to boot menu (index.html)
            window.location.href = 'index.html';
            break;
        case 'F5':
            e.preventDefault();
            // Refresh the system (reload the page)
            window.location.reload();
            break;
    }
});

// Click navigation
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentMenuIndex = index;
        updateActiveMenuItem();
    });
});

// Populate Education
function populateEducation() {
    const educationList = document.querySelector('.education-list');
    cvData.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'education-item';
        eduDiv.innerHTML = `
            <div class="education-header">
                <span class="degree">${edu.degree} in ${edu.area}</span>
                <span class="institution">${edu.institution}</span>
            </div>
            <div class="education-info">
                <p class="period">[PERIOD] ${formatDate(edu.start_date)} - ${edu.end_date === 'present' ? 'Present' : formatDate(edu.end_date)}</p>
                <div class="highlights">
                    ${edu.highlights.map(highlight => `<p class="highlight">[INFO] ${highlight}</p>`).join('')}
                </div>
            </div>
        `;
        educationList.appendChild(eduDiv);
    });
}

// Populate Skills
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    Object.entries(skills).forEach(([category, skillList]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.innerHTML = `
            <h3 class="skill-category-title">${category}</h3>
            <div class="skill-list">
                ${skillList.map(skill => `
                    <div class="skill-item">${skill}</div>
                `).join('')}
            </div>
        `;
        skillsGrid.appendChild(categoryDiv);
    });
}

// Populate Projects
function populateProjects() {
    const projectsList = document.querySelector('.projects-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';
        projectDiv.innerHTML = `
            <div class="project-header">
                <span class="project-title">${project.name}</span>
                <span class="project-status">[${project.status}]</span>
            </div>
            <div class="project-info">
                <p>${project.description}</p>
                <p class="project-specs">[SPECS] ${project.specs}</p>
                <p class="project-date">[DATE] ${project.date}</p>
            </div>
        `;
        projectsList.appendChild(projectDiv);
    });
}

// Populate Experience
function populateExperience() {
    const experienceList = document.querySelector('.experience-list');
    experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-item';
        expDiv.innerHTML = `
            <div class="experience-header">
                <span class="role">${exp.role} @ ${exp.company}</span>
                <span class="status">[${exp.status}]</span>
            </div>
            <div class="experience-info">
                <p class="period">[PERIOD] ${exp.period}</p>
                <p class="description">${exp.description.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        experienceList.appendChild(expDiv);
    });
}

// Populate Certifications
function populateCertifications() {
    const certificationsList = document.querySelector('.certifications-list');
    certifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.className = 'certification-item';
        certDiv.innerHTML = `
            <div class="certification-header">
                <span class="certification-title">${cert.name}</span>
                <span class="certification-issuer">${cert.issuer}</span>
            </div>
            <div class="certification-info">
                <p class="certification-date">[DATE] ${cert.date}</p>
                <p class="certification-skills">[SKILLS] ${cert.skills}</p>
            </div>
        `;
        certificationsList.appendChild(certDiv);
    });
}

// Populate About section
function populateAbout() {
    document.getElementById('about-name').textContent = cvData.name;
    document.getElementById('about-location').textContent = cvData.location;
}

// Populate Contact section
function populateContact() {
    // Create email link
    const emailElement = document.getElementById('contact-email');
    emailElement.innerHTML = `<a href="mailto:${cvData.email}" class="contact-link">${cvData.email}</a>`;
    
    // Create phone link
    const phoneElement = document.getElementById('contact-phone');
    phoneElement.innerHTML = `<a href="tel:${cvData.phone}" class="contact-link">${cvData.phone}</a>`;
    
    // Create website link
    const websiteElement = document.getElementById('contact-website');
    websiteElement.innerHTML = `<a href="${cvData.website}" target="_blank" class="contact-link">${cvData.website}</a>`;
    
    // Create GitHub link
    const github = cvData.social_networks.find(network => network.network === 'GitHub');
    if (github) {
        const githubElement = document.getElementById('contact-github');
        githubElement.innerHTML = `<a href="https://github.com/${github.username}" target="_blank" class="contact-link">github.com/${github.username}</a>`;
    }
    
    // Create LinkedIn link
    const linkedin = cvData.social_networks.find(network => network.network === 'LinkedIn');
    if (linkedin) {
        const linkedinElement = document.getElementById('contact-linkedin');
        linkedinElement.innerHTML = `<a href="https://linkedin.com/in/${linkedin.username}" target="_blank" class="contact-link">linkedin.com/in/${linkedin.username}</a>`;
    }
}

// Helper function to format dates
function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month] = dateString.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Startup sequence
function startupSequence() {
    const messages = [
        'Initializing ATADAG BIOS...',
        'Checking system configuration...',
        'Loading personal data...',
        'Mounting experience...',
        'Verifying skills...',
        'System ready.'
    ];

    const terminal = document.createElement('div');
    terminal.className = 'startup-terminal';
    document.body.appendChild(terminal);

    let index = 0;
    const interval = setInterval(() => {
        if (index < messages.length) {
            terminal.innerHTML += messages[index] + '<br>';
            index++;
        } else {
            setTimeout(() => {
                terminal.remove();
                document.querySelector('.screen').style.opacity = '1';
            }, 1000);
            clearInterval(interval);
        }
    }, 500);
}

// Function to download CV
function downloadCV() {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = 'assets/Ata_Tan_DAGIDIR_CV.pdf';
    link.download = 'Ata_Tan_DAGIDIR_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.screen').style.opacity = '0';
    startupSequence();
    populateAbout();
    populateEducation();
    populateSkills();
    populateProjects();
    populateExperience();
    populateCertifications();
    populateContact();
    updateActiveMenuItem();

    // Add click event for download CV button
    const downloadCvButton = document.querySelector('.download-cv');
    if (downloadCvButton) {
        downloadCvButton.addEventListener('click', downloadCV);
    }
}); 
// Load data from JSON file
async function loadData() {
    try {
        const response = await fetch('../data/data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading data:', error);
        return null;
    }
}

// Render studies
function renderStudies(studies) {
    const container = document.getElementById('studies-container');
    if (!container) return;

    container.innerHTML = studies.map(study => `
        <div class="study-item">
            <div class="study-header">
                ${study.logo ? `<img src="../${study.logo}" alt="${study.center}" class="study-logo">` : ''}
                <div class="study-info">
                    <h3>${study.title}</h3>
                    ${study.center ? `<p class="study-center">${study.center}</p>` : ''}
                    <p class="date">${study.period}</p>
                </div>
            </div>
            <p>${study.description}</p>
        </div>
    `).join('');
}

// Render experience
function renderExperience(experience) {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = experience.map(exp => `
        <div class="experience-item">
            <div class="experience-header">
                ${exp.logo ? `<img src="../${exp.logo}" alt="${exp.company}" class="experience-logo">` : ''}
                <div class="experience-info">
                    <h3>${exp.title}</h3>
                    ${exp.company ? `<p class="company">${exp.company}</p>` : ''}
                    <p class="date">${exp.period}</p>
                </div>
            </div>
            <p>${exp.description}</p>
            ${exp.technologies ? `
                <div class="tech-tags">
                    ${exp.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Render certifications
function renderCertifications(certifications) {
    const container = document.getElementById('certifications-container');
    if (!container) return;

    container.innerHTML = certifications.map(cert => `
        <div class="cert-item">
            <h4>${cert.title}</h4>
            ${cert.issuer ? `<p class="cert-issuer">${cert.issuer}</p>` : ''}
        </div>
    `).join('');
}

// Render awards
function renderAwards(awards) {
    const container = document.getElementById('awards-container');
    if (!container) return;

    container.innerHTML = awards.map(award => `
        <div class="award-item">
            <h4>${award.title}</h4>
            ${award.category ? `<p class="award-category">${award.category}</p>` : ''}
        </div>
    `).join('');
}

// Render languages
function renderLanguages(languages) {
    const container = document.getElementById('languages-container');
    if (!container) return;

    container.innerHTML = languages.map(lang => `
        <div class="language-item">
            <span class="language-name">${lang.flag ? lang.flag + ' ' : ''}${lang.language}</span>
            <span class="language-level">${lang.proficiency}</span>
        </div>
    `).join('');
}

// Render skills (placeholder for now)
function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    if (skills && skills.length > 0) {
        container.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <span>${skill}</span>
            </div>
        `).join('');
    } else {
        container.innerHTML = `
            <div class="tech-tags">
                <span>JavaScript</span>
                <span>Backend</span>
                <span>EBSI</span>
                <span>Node.js</span>
                <span>Blockchain</span>
                <span>Networks</span>
            </div>
        `;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    
    if (data) {
        if (data.studies) {
            renderStudies(data.studies);
        }
        if (data.experience) {
            renderExperience(data.experience);
        }
        if (data.certifications) {
            renderCertifications(data.certifications);
        }
        if (data.awards) {
            renderAwards(data.awards);
        }
        if (data.languages) {
            renderLanguages(data.languages);
        }
        if (data.skills) {
            renderSkills(data.skills);
        } else {
            renderSkills(null);
        }
    }
});

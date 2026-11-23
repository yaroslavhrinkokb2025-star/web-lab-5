function saveSystemInfo() {
    const info = {
        sys_userAgent: navigator.userAgent,
        sys_platform: navigator.platform,
        sys_language: navigator.language,
        sys_languages: navigator.languages.join(', '),
        sys_cookieEnabled: navigator.cookieEnabled,
        sys_vendor: navigator.vendor
    };

    for (const [key, value] of Object.entries(info)) {
        localStorage.setItem(key, String(value));
    }
}

function renderStorage() {
    const list = document.getElementById('storage-info');

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = document.createElement('li');
        item.textContent = `${key}: ${localStorage.getItem(key)}`;
        list.appendChild(item);
    }
}

saveSystemInfo();
renderStorage();

async function loadComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3/comments');
    const comments = await response.json();
    const list = document.getElementById('reviews-list');

    for (const comment of comments) {
        const card = document.createElement('article');
        card.className = 'review';

        const name = document.createElement('h3');
        name.textContent = comment.name;

        const email = document.createElement('p');
        email.textContent = comment.email;

        const body = document.createElement('p');
        body.textContent = comment.body;

        card.append(name, email, body);
        list.appendChild(card);
    }
}

loadComments();
setTimeout(() => {
    document.getElementById('feedback-modal').style.display = 'flex';
}, 60000);

document.getElementById('feedback-close').addEventListener('click', () => {
    document.getElementById('feedback-modal').style.display = 'none';
});

function applyTheme() {
    const hour = new Date().getHours();
    document.body.classList.toggle('dark-mode', hour < 7 || hour >= 21);
}

applyTheme();
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

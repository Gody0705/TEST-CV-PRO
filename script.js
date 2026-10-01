// Gestion du thème Sombre / Clair avec mémorisation
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Charger la préférence enregistrée ou celle du système
const savedTheme = localStorage.getItem('cvpro-theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

htmlElement.setAttribute('data-theme', savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cvpro-theme', newTheme);
  });
}

// Gestion interactive du formulaire de contact
function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!name || !email || !message) {
    feedback.textContent = 'Veuillez remplir tous les champs obligatoires.';
    feedback.style.color = '#ef4444';
    return;
  }

  // Préparation du lien mailto direct pour envoyer le message
  const mailtoUrl = `mailto:patououmar1@gmail.com?subject=${encodeURIComponent(subject || 'Prise de contact via CV en ligne')}&body=${encodeURIComponent("Nom / Structure: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
  
  feedback.textContent = 'Ouverture de votre messagerie pour transmettre votre message...';
  feedback.style.color = '#0d9488';
  
  setTimeout(() => {
    window.location.href = mailtoUrl;
    feedback.textContent = 'Message prêt ! Si votre client email ne s\'est pas ouvert, écrivez directement à patououmar1@gmail.com';
  }, 600);
}

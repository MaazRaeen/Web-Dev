// ====== Smooth scroll for internal links ======
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ====== Open external link helper ======
function openLink(e, url) {
  e.preventDefault();
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ====== Contact button scroll ======
document.getElementById('contactMeBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ====== Resume upload handling ======
const resumeInput = document.getElementById('resumeUpload');
const resumeInfo = document.getElementById('resumeInfo');
const downloadLink = document.getElementById('downloadLink');
let resumeBlobUrl = null;

function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  else return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

resumeInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.type !== 'application/pdf') {
    alert('Please upload a PDF file.');
    return;
  }
  resumeInfo.textContent = `${file.name} — ${formatSize(file.size)}`;
  if (resumeBlobUrl) URL.revokeObjectURL(resumeBlobUrl);
  resumeBlobUrl = URL.createObjectURL(file);
  downloadLink.href = resumeBlobUrl;
  downloadLink.setAttribute('download', file.name);
});

// ====== Send message via mailto ======
document.getElementById('sendMail').addEventListener('click', () => {
  const body = encodeURIComponent(document.getElementById('message').value || 'Hi Maaz,');
  const subject = encodeURIComponent('Contact from Portfolio Site');
  window.location.href = `mailto:MaazRaeen42@gmail.com?subject=${subject}&body=${body}`;
});

// ====== Active nav highlighting (throttled) ======
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function throttle(fn, wait) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      fn(...args);
      last = now;
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, 150));

// ====== Broken image placeholders ======
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    const w = img.width || 300;
    const h = img.height || 200;
    img.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
          <rect width="100%" height="100%" fill="#222"/>
          <text x="50%" y="50%" fill="#888" font-family="Poppins, Arial"
            font-size="16" text-anchor="middle" alignment-baseline="middle">
            Image Placeholder
          </text>
        </svg>`
      );
  });
});

// ====== Light/Dark mode toggle (optional) ======
// ====== Set initial theme based on system preference ======
const root = document.documentElement;

// Detect system preference
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
root.dataset.theme = prefersLight ? 'light' : 'dark';

const themeToggleBtn = document.getElementById('themeToggle'); // Add a button with this ID in header
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  });
}

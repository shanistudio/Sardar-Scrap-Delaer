const site = window.SARDAR_SCRAP || {};

const applySiteData = () => {
  document.querySelectorAll('[data-bind="brand-short"]').forEach(el => {
    el.textContent = site.brandShort || 'SARDAR';
  });

  document.querySelectorAll('[data-bind="brand-long"]').forEach(el => {
    el.textContent = site.brandLong || 'SCRAP DEALER';
  });

  document.querySelectorAll('[data-bind="tagline"]').forEach(el => {
    el.textContent = site.tagline || 'We Buy, Sell & Recycle All Types of Scrap.';
  });

  document.querySelectorAll('[data-bind="phone"]').forEach(el => {
    const value = site.phone || '+92 300 4050822';
    el.textContent = value;
    el.setAttribute('href', `tel:${value.replace(/\s+/g, '')}`);
  });

  document.querySelectorAll('[data-bind="email"]').forEach(el => {
    const value = site.email || '4uproduction786@gmail.com';
    el.textContent = value;
    el.setAttribute('href', `mailto:${value}`);
  });

  document.querySelectorAll('[data-bind="whatsapp"]').forEach(el => {
    const value = site.phone || '+92 300 4050822';
    const whatsappUrl = `https://wa.me/${site.whatsappNumber || '923004050822'}`;
    el.textContent = value;
    el.setAttribute('href', whatsappUrl);
  });

  document.querySelectorAll('[data-bind="location"]').forEach(el => {
    el.textContent = site.location || 'LDA Evenew 1, Riwand Road, Lahore';
  });

  document.querySelectorAll('[data-bind="hours"]').forEach(el => {
    el.textContent = site.hours || 'Open 24/7';
  });

  document.querySelectorAll('[data-role="city-select"]').forEach(select => {
    const options = (site.cityOptions || ['Lahore']).map(city => `<option>${city}</option>`).join('');
    select.innerHTML = options;
  });

  document.querySelectorAll('[data-role="material-select"]').forEach(select => {
    const options = (site.materialOptions || ['Iron Scrap']).map(material => `<option>${material}</option>`).join('');
    select.innerHTML = options;
  });

  document.querySelectorAll('[data-role="quote-select"]').forEach(select => {
    const options = (site.quoteOptions || ['Iron Scrap']).map(item => `<option>${item}</option>`).join('');
    select.innerHTML = options;
  });

  document.querySelectorAll('[data-role="quantity-select"]').forEach(select => {
    const options = (site.quantityOptions || ['Up to 100 kg']).map(item => `<option>${item}</option>`).join('');
    select.innerHTML = options;
  });

  document.querySelectorAll('[data-role="service-select"]').forEach(select => {
    const options = (site.serviceOptions || ['Scrap Buying']).map(item => `<option>${item}</option>`).join('');
    select.innerHTML = options;
  });

  document.querySelectorAll('[data-role="budget-select"]').forEach(select => {
    const options = (site.budgetOptions || ['PKR 10k-50k']).map(item => `<option>${item}</option>`).join('');
    select.innerHTML = options;
  });
};

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    const active = document.querySelector('.filters .active');
    if (active) active.classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.display = filter === 'all' || item.dataset.category === filter ? '' : 'none';
    });
  });
});

document.querySelectorAll('form[data-form="lead"]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = 'Thank you — your request has been received. Our team will contact you soon.';
    }
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Request received ✓';
      button.disabled = true;
    }
  });
});

const playButton = document.querySelector('.play-btn');
if (playButton) {
  playButton.addEventListener('click', event => {
    event.preventDefault();
    const label = event.currentTarget.querySelector('span');
    if (label) label.textContent = 'Video preview coming soon';
    event.currentTarget.style.width = '210px';
    event.currentTarget.style.borderRadius = '10px';
  });
}

applySiteData();

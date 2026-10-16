(() => {
  'use strict';
  const data = window.NEXTGEN;
  if (!data) return;
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
  const projects = document.querySelector('#projects');
    projects.innerHTML = data.projects.map(project => {
      const index = data.projects.indexOf(project) + 1;
      if (!project.image) return `<article class="project project-link-only"><div class="project-info"><div><p class="project-sector">${String(index).padStart(2,'0')} / ${escape(project.label)}</p><h3>${escape(project.legalName)}</h3><p>${escape(project.description)}</p></div><a class="visit-link" href="${escape(project.url)}" target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span><span class="sr-only">: ${escape(project.legalName)} (opens in a new tab)</span></a></div></article>`;
      return `<article class="project"><a class="homepage-preview" href="${escape(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${escape(project.legalName)} website (opens in a new tab)"><div class="browser-bar"><span class="browser-dots" aria-hidden="true">● ● ●</span><span>${escape(new URL(project.url).hostname)}</span><span aria-hidden="true">↗</span></div><img src="${escape(project.image)}" alt="Homepage screenshot of ${escape(project.legalName)}" loading="lazy" decoding="async" width="1440" height="1000"></a><div class="project-info"><div><p class="project-sector">${String(index).padStart(2,'0')} / ${escape(project.label)}</p><h3>${escape(project.legalName)}</h3><p>${escape(project.description)}</p></div><a class="visit-link" href="${escape(project.url)}" target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span><span class="sr-only">: ${escape(project.legalName)} (opens in a new tab)</span></a></div></article>`;
    }).join('');
  document.querySelector('#client-list').innerHTML = data.clients.map((client, index) => `<div class="client"><span class="client-number">${String(index + 1).padStart(2, '0')}</span><div><h3>${escape(client)}</h3>${data.clientNotes[client] ? `<p>${escape(data.clientNotes[client])}</p>` : ''}</div><span class="client-mark" aria-hidden="true">✳</span></div>`).join('');
  document.querySelectorAll('[data-contact-email]').forEach(link => {
    link.href = `mailto:${data.email}`;
    link.innerHTML = `${escape(data.email)} <span aria-hidden="true">↗</span>`;
  });
  document.querySelectorAll('[data-contact-phone]').forEach(link => { link.href = `tel:${data.phoneLink}`; link.innerHTML = `${escape(data.phone)} <span aria-hidden="true">↗</span>`; });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();

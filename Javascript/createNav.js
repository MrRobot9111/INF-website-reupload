// Create the nav element
const navBar = document.createElement('nav');
navBar.className = 'nav-bar';

// Define the links and their corresponding text
const navItems = [
    { href: 'index.html', id: 'index.html', text: 'Hem' },
    { href: 'Teknikprogrammet.html', id: 'Teknikprogrammet.html', text: 'Teknikprogrammet' },
    { href: 'Inriktning.html', id: 'Inriktning.html', text: 'Inriktning' },
    { href: 'Kurser.html', id: 'Kurser.html', text: 'Kurser' },
    { href: 'Larare.html', id: 'Larare.html', text: 'Lärare' },
];

// Create the links and add them to the nav
navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.id = item.id;

    const paragraph = document.createElement('p');
    paragraph.textContent = item.text;

    link.appendChild(paragraph);
    navBar.appendChild(link);
});

// Add the "Ansök Nu" button
const ctaLink = document.createElement('a');
ctaLink.id = 'ctaLink'
ctaLink.href = '';

const ctaButton = document.createElement('button');
ctaButton.id = 'cta-button';
ctaButton.textContent = 'Ansök Nu';

ctaLink.appendChild(ctaButton);
navBar.appendChild(ctaLink);

// Append the nav to the header
const header = document.querySelector('header'); // Assuming you have a <header> element in your HTML
if (header) {
    header.appendChild(navBar);
} else {
    console.error('No <header> element found in the document.');
}

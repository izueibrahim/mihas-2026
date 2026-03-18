export const aboutTabs = [
  { id: 'overview', label: 'MIHAS Overview' },
  { id: 'organisers', label: 'Organisers' },
  { id: 'venue', label: 'The Venue' },
  { id: 'getting-there', label: 'Getting There' },
  { id: 'shuttle', label: 'Free Shuttle Services' }
];

export const visitorTabs = [
  { id: 'why-visit', label: 'Why Visit' },
  { id: 'who-should', label: 'Who Should Visit' },
  { id: 'admission', label: 'Admission & Opening Hours' }
];

export const mediaTabs = [
  { id: 'registration', label: 'Media Registration' },
  { id: 'news', label: 'MIHAS In The News' },
  { id: 'blog', label: 'MIHAS Blog' },
  { id: 'gallery', label: 'Photo Gallery' }
];

export const contactTabs = [
  { id: 'contact-us', label: 'Contact Us' },
  { id: 'matrade-network', label: 'MATRADE Network' }
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About MIHAS', defaultSub: 'overview', subs: aboutTabs },
  { id: 'programme', label: 'Show Programme' },
  { id: 'directory', label: 'e-Directory' },
  { id: 'awards', label: 'MIHAS Awards' },
  { id: 'insp', label: 'INSP' },
  { id: 'visitor', label: 'Visitor', defaultSub: 'why-visit', subs: visitorTabs },
  { id: 'exhibitor', label: 'Exhibitor', defaultSub: 'why-exhibit', subs: [
    { id: 'why-exhibit', label: 'Why Exhibit' },
    { id: 'who-should-exhibit', label: 'Who Should Exhibit' }
  ] },
  { id: 'media', label: 'Media', defaultSub: 'registration', subs: mediaTabs },
  { id: 'contact', label: 'Contact', defaultSub: 'contact-us', subs: contactTabs },
];

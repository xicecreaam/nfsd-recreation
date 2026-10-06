const SECTIONS = {
  ug1: 'bg-ug1',
  ug2: 'bg-ug2',
  mw05: 'bg-mw05',
  c: 'bg-c',
  ps: 'bg-ps',
  uc: 'bg-uc',
  tr: 'bg-tr',
};

function applyBackground(pathname) {
  if (typeof document === 'undefined') return;

  // Retire toutes les classes de section avant de réappliquer
  Object.values(SECTIONS).forEach((cls) => document.body.classList.remove(cls));

  const found = Object.keys(SECTIONS).find(
    (key) => pathname.includes(`/${key}/`) || pathname.endsWith(`/${key}/`)
  );

  if (found) {
    document.body.classList.add(SECTIONS[found]);
  }
}

export function onRouteDidUpdate({location}) {
  applyBackground(location.pathname);
}

if (typeof window !== 'undefined') {
  applyBackground(window.location.pathname);
}
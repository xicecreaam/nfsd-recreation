import siteConfig from '@generated/docusaurus.config';

const SECTIONS = {
  ug1: 'underground1',
  ug2: 'underground2',
  mw05: 'most-wanted',
  c: 'carbon',
  ps: 'prostreet',
  uc: 'undercover',
  tr: 'the-run',
};

const HOME_VIDEO = 'lobby'; // renomme selon le nom de fichier que tu choisis

function isHome(pathname) {
  const base = siteConfig.baseUrl; // '/nfsd-recreation/'
  return pathname === base || pathname === base.slice(0, -1);
}

function applyBackground(pathname) {
  if (typeof document === 'undefined') return;

  let filename = null;

  if (isHome(pathname)) {
    filename = HOME_VIDEO;
  } else {
    const found = Object.keys(SECTIONS).find(
      (key) => pathname.includes(`/${key}/`) || pathname.endsWith(`/${key}`)
    );
    if (found) filename = SECTIONS[found];
  }

  let video = document.getElementById('section-bg-video');

  if (!filename) {
    if (video) video.remove();
    return;
  }

  const src = `${siteConfig.baseUrl}img/backgrounds/${filename}.mp4`;

  if (!video) {
    video = document.createElement('video');
    video.id = 'section-bg-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.setAttribute('playsinline', '');
    document.body.prepend(video);
  }

  if (!video.src.endsWith(src)) {
    video.src = src;
    video.play().catch((err) => console.error('[bg] play error:', err));
  }
}

export function onRouteDidUpdate({location}) {
  applyBackground(location.pathname);
}

if (typeof window !== 'undefined') {
  applyBackground(window.location.pathname);
}
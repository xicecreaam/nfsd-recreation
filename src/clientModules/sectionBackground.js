const SECTIONS = {
  ug1: 'ug1',
  ug2: 'ug2',
  mw05: 'mw05',
  c: 'c',
  ps: 'ps',
  uc: 'uc',
  tr: 'tr',
};

function applyBackground(pathname) {
  if (typeof document === 'undefined') return;

  const found = Object.keys(SECTIONS).find(
    (key) => pathname.includes(`/${key}/`) || pathname.endsWith(`/${key}/`)
  );

  let video = document.getElementById('section-bg-video');

  if (!found) {
    if (video) video.remove();
    return;
  }

  const src = `/img/backgrounds/${found}.mp4`;

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
  }
}

export function onRouteDidUpdate({location}) {
  applyBackground(location.pathname);
}

if (typeof window !== 'undefined') {
  applyBackground(window.location.pathname);
}
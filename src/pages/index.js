import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Welcome to Need for SpeedDocs"
      description="This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website. Currently looking for contributors to expand.d."
    >
      <main style={{ padding: '2rem', maxWidth: '2000px', textAlign: 'left' }}>
        <header>
          <h1 style={{ fontSize: '60px', fontWeight: '700' }}>
            Welcome to Need for SpeedDocs
          </h1>
          <p style={{ marginTop: '0.5rem', fontSize: '18px', color: '#ccc' }}>
            This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website.
            Currently looking for contributors to expand.
          </p>
        </header>

        <section style={{ marginTop: '3rem' }}>
          <h2 style={{ borderLeft: '2px solid #555', paddingLeft: '10px' }}>
            Available games
          </h2>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>Need for Speed: Underground 1</Link>{' '}
              by
              <Link to="#" style={{ color: '#f55' }}>LokyZen </Link>{' '}
               (FG), 
              <Link to="#" style={{ color: '#f55' }}>Scorpion</Link>{' '}
                (DT & FWD DS) and
               <Link to="#" style={{ color: '#f55' }}>GTB</Link>{' '}
                (RWD DS)
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>Need for Speed: Underground 2</Link>{' '}
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>Need for Speed: Most Wanted (2005)</Link>{' '}
              by
              <Link to="#" style={{ color: '#f55' }}>SlivenKage</Link>{' '}
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>Need for Speed: Carbon</Link>{' '}
              by
              <Link to="#" style={{ color: '#f55' }}>Artacer</Link>{' '}
              and 
              <Link to="#" style={{ color: '#f55' }}>Cousin</Link>{' '}
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>Need for Speed: ProStreet</Link>{' '}
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>Need for Speed: Undercover </Link>{' '}
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>Need for Speed: The Run</Link>{' '}
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}

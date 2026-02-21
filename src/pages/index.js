import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Welcome to Need for SpeedDocs Reborn"
      description="This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website. Currently looking for contributors to expand."
    >
      <main style={{ padding: '2rem', maxWidth: '2000px', textAlign: 'left' }}>
        <header>
          <h1 style={{ fontSize: '60px', fontWeight: '700' }}>
            Welcome to Need for SpeedDocs Reborn
          </h1>
          <p style={{ marginTop: '0.5rem', fontSize: '18px', color: '#ccc' }}>
            This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website.<br />
            Currently looking for contributors to expand. If interested, you can contact me on Discord <code>xicecreaam</code>.
          </p>
        </header>

        <section style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: "30px" }}>
            Available games
          </h2>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              (WIP) <Link to="/ug1" style={{ color: '#d94d4c' }}>Need for Speed: Underground 1</Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              (WIP) <Link to="/ug2" style={{ color: '#d94d4c' }}>Need for Speed: Underground 2</Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/mw05" style={{ color: '#d94d4c' }}>Need for Speed: Most Wanted (2005)</Link> by <Link to="https://www.speedrun.com/users/SlivenKage" style={{ color: '#d94d4c' }}>SlivenKage</Link> and <Link to="https://www.speedrun.com/users/icecreaam" style={{ color: '#d94d4c' }}>IceCream</Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              (WIP) <Link to="/c" style={{ color: '#d94d4c' }}>Need for Speed: Carbon</Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              (WIP) <Link to="/ps" style={{ color: '#d94d4c' }}>Need for Speed: ProStreet</Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              (WIP) <Link to="/uc" style={{ color: '#d94d4c' }}>Need for Speed: Undercover </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              (WIP) <Link to="/tr" style={{ color: '#d94d4c' }}>Need for Speed: The Run</Link>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}

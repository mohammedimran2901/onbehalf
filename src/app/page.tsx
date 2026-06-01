export default function HomePage() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>OnBehalf</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>
          Find the Perfect Match for Your Single Friend
        </p>
      </header>

      <section style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '2rem' }}>
        <h2>Find Single Friends</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
          <select style={{ padding: '0.5rem' }}>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select style={{ padding: '0.5rem' }}>
            <option>Age Range</option>
            <option>18-25</option>
            <option>26-30</option>
            <option>31-35</option>
            <option>36-40</option>
            <option>40+</option>
          </select>
          <select style={{ padding: '0.5rem' }}>
            <option>Location</option>
            <option>London</option>
            <option>Manchester</option>
            <option>Birmingham</option>
            <option>Leeds</option>
          </select>
        </div>
        <button style={{ marginTop: '1rem', padding: '0.5rem 2rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Search
        </button>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Choose OnBehalf?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <h3>Trusted Matchmakers</h3>
            <p>Friends and family who know the single person best help find compatible matches.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <h3>Privacy First</h3>
            <p>Photos and personal details only shared with approved matchmaker friends.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <h3>Rated Community</h3>
            <p>Build trust with our rating system for genuine matchmakers.</p>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#0070f3', color: 'white', borderRadius: '8px', marginTop: '2rem' }}>
        <h2>Ready to Find a Match?</h2>
        <p>Join thousands of matchmakers helping their single friends find love.</p>
        <button style={{ marginTop: '1rem', padding: '0.75rem 2rem', backgroundColor: 'white', color: '#0070f3', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Join Now
        </button>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <p>&copy; {new Date().getFullYear()} OnBehalf. All rights reserved.</p>
      </footer>
    </div>
  );
}
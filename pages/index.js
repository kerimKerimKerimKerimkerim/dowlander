import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    async function logUserInfo() {
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();

        const log = {
          ip: ipData.ip,
          userAgent: navigator.userAgent,
          time: new Date().toISOString(),
        };

        // Logu API'ye yolla
        await fetch('/api/log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(log),
        });
      } catch (error) {
        console.error('Log gönderilemedi:', error);
      }
    }

    logUserInfo();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '3rem' }}>Download</h1>
      <a
        href="/download.zip"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          background: 'linear-gradient(to right, #4facfe, #00f2fe)',
          color: 'white',
          borderRadius: '12px',
          textDecoration: 'none',
          boxShadow: '0 10px 20px rgba(0, 242, 254, 0.4)',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1.0)')}
      >
        Download
      </a>
    </div>
  );
}

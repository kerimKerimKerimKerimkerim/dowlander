import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
  const logPath = path.join(process.cwd(), 'logs.txt');

  let logs = [];

  try {
    const data = fs.readFileSync(logPath, 'utf-8');
    logs = data
      .split('\n')
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  } catch (error) {
    console.error('Log dosyası okunamadı:', error);
  }

  return { props: { logs } };
}

export default function LoggPage({ logs }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f5f8fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>Ziyaretçi Logları</h1>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#0070f3', color: 'white', textTransform: 'uppercase' }}>
            <th style={{ padding: '1rem' }}>#</th>
            <th style={{ padding: '1rem' }}>IP</th>
            <th style={{ padding: '1rem' }}>Cihaz</th>
            <th style={{ padding: '1rem' }}>Zaman</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem' }}>{i + 1}</td>
              <td style={{ padding: '1rem' }}>{log.ip}</td>
              <td style={{ padding: '1rem' }}>{log.userAgent}</td>
              <td style={{ padding: '1rem' }}>{new Date(log.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

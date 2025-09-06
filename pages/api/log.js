
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const log = req.body;

    const logPath = path.join(process.cwd(), 'logs.txt');

    // Log satırı hazırla (JSON formatında)
    const logLine = JSON.stringify(log) + '\n';

    // Dosyaya ekle
    fs.appendFile(logPath, logLine, (err) => {
      if (err) {
        console.error('Log yazılamadı:', err);
        return res.status(500).json({ error: 'Log yazılamadı' });
      }
      res.status(200).json({ message: 'Log kaydedildi' });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

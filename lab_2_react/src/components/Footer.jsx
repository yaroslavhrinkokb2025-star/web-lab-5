import { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const systemInfo = {
      sys_userAgent: navigator.userAgent,
      sys_platform: navigator.platform,
      sys_language: navigator.language,
      sys_languages: navigator.languages.join(', '),
      sys_cookieEnabled: navigator.cookieEnabled,
      sys_vendor: navigator.vendor,
    };

    for (const [key, value] of Object.entries(systemInfo)) {
      localStorage.setItem(key, String(value));
    }

    const stored = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      stored.push({ key, value: localStorage.getItem(key) });
    }
    setInfo(stored);
  }, []);

  return (
    <footer className="bg-blue-600 p-4 text-center text-white">
      <p>© 2026 Ярослав Грінько</p>
      <p>Дані з localStorage:</p>
      <ul className="break-all text-left">
        {info.map((item) => <li key={item.key}>{item.key}: {item.value}</li>)}
      </ul>
    </footer>
  );
}

export default Footer;

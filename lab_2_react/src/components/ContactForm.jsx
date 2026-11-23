import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  return isOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="contact-box w-105 max-w-[90%] bg-white p-6 text-slate-900">
        <button type="button" onClick={() => setIsOpen(false)}>Закрити</button>
        <h2 className="my-3 text-2xl font-bold">Зворотний зв’язок</h2>
        <form action="https://formspree.io/f/mwllwany" method="POST">
          <label className="mb-3 block">Ім’я <input className="block w-full border p-2" type="text" name="name" /></label>
          <label className="mb-3 block">Email <input className="block w-full border p-2" type="email" name="email" /></label>
          <label className="mb-3 block">Номер телефону <input className="block w-full border p-2" type="tel" name="phone" /></label>
          <label className="mb-3 block">Повідомлення <textarea className="block w-full border p-2" name="message" /></label>
          <button className="border px-3 py-2" type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

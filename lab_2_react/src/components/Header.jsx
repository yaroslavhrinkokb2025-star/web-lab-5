function Header({ onToggle }) {
  return (
    <header className="bg-blue-600 p-6 text-center text-white">
      <h1 className="mb-2 text-4xl font-bold">Ярослав Грінько</h1>
      <p className="text-xl">Студент спеціальності «Кібербезпека»</p>
      <button className="mt-4 bg-white px-3 py-2 text-blue-700" onClick={onToggle}>Змінити тему</button>
    </header>
  );
}

export default Header;

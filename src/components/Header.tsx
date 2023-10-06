export function Header() {
  const anchors = ['home', 'skills', 'projects'];

  return (
    <header className="flex sticky top-0 z-10 border-b bg-white p-2 justify-center md:justify-start shadow-sm">
      <h1 className="mb-0 py-2 px-5 text-3xl font-bold">
        <a href="#home">Portfolio</a>
      </h1>
      <div className="justify-between w-100 hidden md:flex">
        <ul className="flex items-center">
          { anchors.map(anchor => (
            <li className="flex" key={`anchor-${anchor}`}>
              <a
                className="p-2 mx-1 capitalize" 
                href={`#${anchor === 'home' ? '' : anchor}`}
              >{anchor}</a>
            </li>
          ))}
        </ul>
       
        <div className="hidden">
          <button>ThemeSelector</button>
        </div>
      </div>
    </header>
  );
}
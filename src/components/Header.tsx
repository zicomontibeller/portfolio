export function Header() {
  const anchors = ['home', 'projects', 'contact'];

  return (
    <header className="flex sticky top-0 z-10 border-b bg-white p-2 justify-center md:justify-start">
      <h1 className="py-2 px-5">
        <a href="#home">Portfolio</a>
      </h1>
      <div className="justify-between w-100 hidden md:flex">
        <ul className="flex items-center">
          { anchors.map(anchor => (
            <li className="flex gap-4">
              <a
                className="p-2 capitalize" 
                href={`#${anchor}`}
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
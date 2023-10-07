import { DarkMode } from "./DarkMode";

export function Header() {
  const anchors = ['home', 'skills', 'projects'];

  return (
    <header className="flex sticky top-0 z-10 border-b bg-white dark:bg-slate-900 dark:border-slate-800 dark:shadow-md dark:shadow-cyan-900 p-2  shadow-sm justify-start">
      <h1 className="mb-0 py-2 px-5 text-3xl font-bold grow">
        <a href="#">Portfolio</a>
      </h1>

      <div className="justify-between w-100 hidden md:flex grow">
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
      </div>

      <div className="flex items-center mr-4">
        <DarkMode />
      </div>
    </header>
  );
}
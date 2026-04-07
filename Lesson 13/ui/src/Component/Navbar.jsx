function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex gap-6">
        <a href="#" className="hover:text-red-400">
          Hello World
        </a>
        <a href="#" className="hover:text-red-400">
          Hello
        </a>
        <a href="#" className="hover:text-red-400">
          Hello
        </a>
        <a href="#" className="hover:text-red-400">
          Hello
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

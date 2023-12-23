// Header component

const Header = () => {
  return (
    <header className="App-header sm:h-[130.08px] text-">
      <nav className="flex bg-[#685DC5] py-3 px-4 sm:px-14 sm:py-5 text-white items-center justify-between">
        <div className="flex gap-2 items-center">
          <p className="font-bold text-lg">
            HARBOUR.SPACE
          </p>
          <p className="text-xs">
            /INTERACTION DESIGN
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
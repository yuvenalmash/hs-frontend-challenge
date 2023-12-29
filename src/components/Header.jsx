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
        <img src="/assets/images/menu.svg" alt="menu" className="w-7 h-6" />
      </nav>
      <div className="hidden sm:flex w-28 h-28 bg-[#4fa16c] rounded-full absolute top-0 right-0 mr-32 mt-3 justify-center items-center">
        <p className="font-bold text-white text-center p-3 leading-5">
          APPLY NOW
        </p>
      </div>
    </header>
  );
};

export default Header;
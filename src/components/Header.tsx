interface headerProp {
    darkMode: boolean;
    iconMoon: any;
    iconsun: any;
    handleDarkModeToggle: () => void;
}

const Header = (props: headerProp) => {

    const {darkMode, iconMoon, iconsun, handleDarkModeToggle}=props
    return (
        <header className="flex text-white justify-between mx-auto w-[327px] tablet:w-[540px]">
        <p className="font-bold text-[26px] tablet:text-[40px]">
          TODO
        </p>
        
          {/* {!darkMode ? <p> DARK</p> : <p>LIGHT</p>} */}
          <button
            onClick={handleDarkModeToggle}
            className="focus:outline-none cursor-pointer w-[16.5px] tablet:w-[21px]"
          >
            {darkMode ? (
              <img
                src={iconsun}
                alt="iconsun"
              />
            ) : (
              <img
                src={iconMoon}
                alt="iconMoon"
            
              />
            )}
          </button>
        
      </header>
    );
}

export default Header;
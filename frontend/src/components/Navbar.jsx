
const NavBar = ({onOpen}) => {
  return (
    <div className="navbar shadow-sm p-5">
      <div className="navbar-start">
        <a className="btn text-xl font-bold rounded-2xl pb-0.5">CODENEO</a>
      </div>

      {/* <NavigationMenu/> */}
      <div className="navbar-end pr-6">
        <a className="btn  font-bold rounded-2xl" onClick={onOpen}>Add CLient</a>
      </div>
    </div>
  );
};

export default NavBar;

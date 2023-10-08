import "./Navbar.css";

const Navbar = ({ navList, navClick, activeBtn }) => {
   
	const navListElements = navList.map((item, index) => (
		<button
			key={item + index}
			className={`${item === activeBtn ? "active" : ""} navbar-item`}
      name={item}
			onClick={navClick}
		>
			{item.split('-').join(' ')}
		</button>
	));

	

	return (
		<nav id="navbar">
			<div className="navbar-container">{navListElements}</div>
		</nav>
	);
};

export default Navbar;

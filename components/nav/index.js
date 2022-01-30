export const toggleNavMenu = () => {
	const navMenuElement = document.querySelector(".nav-menu");
	const navMenuToggleElement = document.querySelector(".nav-menu-toggle");
	const navMenuToggleImageElement = document.querySelector(
		".nav-menu-toggle-image"
	);
	navMenuToggleImageElement.onclick = () => {
		navMenuElement.classList.toggle("nav-menu-active");
		if (navMenuElement.classList.contains("nav-menu-active")) {
			navMenuToggleImageElement.setAttribute(
				"src",
				"../images/cancel_black_24dp.svg"
			);
			navMenuToggleImageElement.style.width = "1.5rem";
			navMenuToggleImageElement.style.height = "1.5rem";
		} else {
			navMenuToggleImageElement.setAttribute(
				"src",
				"../images/menu_black_24dp.svg"
			);
			navMenuToggleImageElement.style.width = "2rem";
			navMenuToggleImageElement.style.height = "2rem";
		}
	};
};

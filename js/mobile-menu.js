var mobileMenu = ()=>{
	//Key parameters
	const menuButton = document.querySelector('.menu-icon-wrap .open-menu'); //The button that opens the menu
	const menu = document.querySelector('.mobile-menu'); //The menu
	const navigation = document.querySelector('.mobile-menu .navigation'); //The menu navigation
	const navigationLinks = document.querySelectorAll('.mobile-menu .navigation .link'); //The menu navigation
	const closeButton = document.querySelector('.mobile-menu .menu-icon .close-menu'); //The button that closes the menu
	const res1024 = window.matchMedia('(max-width: 1024px)'); //Screen resolution with a maximum width of 1024px
	const pageSections = document.querySelectorAll('.page-section'); //All page sections

	var menuOpen = 0;

	var mouseEvents = (event)=>{
		if (menuOpen == 1) {//Closes menu if menu is opened
			if (event.target == menu && event.target.parentNode != navigation && event.target.parentNode.parentNode != navigation && event.target.parentNode.parentNode.parentNode != navigation) {
			  	menuOpen = 0;
				menuButton.style = 'opacity: 1; pointer-events: auto;';
				menu.style = 'background-color: rgba(0, 0, 0, 0); left: 110%; transition: left 0.5s ease-in-out;';
				window.addEventListener('resize', (res1024)=>{
				    res1024 = window.matchMedia('(max-width: 1024px)');
				    if (res1024.matches) {
				        menu.style = 'background-color: rgba(0, 0, 0, 0.5); left: 110%;';
				        menuButton.style = 'opacity: 1; pointer-events: auto;';
				    }
				});
				return;
			}
		}
		if (menuOpen == 0) {//Opens menu if menu is closed
			if (event.target == menuButton) {
			  	menuOpen = 1;
				menuButton.style = 'opacity: 0; pointer-events: none; transition: opacity 0.3s ease-in-out';
				menu.style = 'background-color: rgba(0, 0, 0, 0); left: 0; transition: left 0.5s ease-in-out;';
				setTimeout(()=>{
					menu.style = 'background-color: rgba(0, 0, 0, 0.5); left: 0;';
				}, 500)
				window.addEventListener('resize', (res1024)=>{
				    res1024 = window.matchMedia('(max-width: 1024px)');
				    if (res1024.matches) {
				        menu.style = 'background-color: rgba(0, 0, 0, 0.5); left: 0;';
				    }
				});
				return;
			}
		}
	}

	var closeMenuHandler = ()=>{
		if (menuOpen == 1) {//Closes menu if menu is opened
			menuOpen = 0;
			menuButton.style = 'opacity: 1; pointer-events: auto;';
			menu.style = 'background-color: rgba(0, 0, 0, 0); left: 110%; transition: left 0.5s ease-in-out;';
			window.addEventListener('resize', (res1024)=>{
			    res1024 = window.matchMedia('(max-width: 1024px)');
			    if (res1024.matches) {
			        menu.style = 'background-color: rgba(0, 0, 0, 0.5); left: 110%;';
					menuButton.style = 'opacity: 1; pointer-events: auto;';
			    }
			});
			return;
		}
	}

	window.addEventListener('mouseup', mouseEvents, false);

	window.addEventListener('keydown', (event)=>{
		if (event.keyCode == 27) {//Closes menu if 'Esc' is pressed
			closeMenuHandler();
			window.addEventListener('resize', (res1024)=>{
			    var res1025 = window.matchMedia('(min-width: 1025px)');
			    if (res1025.matches) {
			        menu.style = 'background-color: rgba(0, 0, 0, 0.5); left: 110%;';
			        menuButton.style = 'opacity: 1; pointer-events: auto;';
			    }
			});
		}
	}, false);

	var scrollToSection = (()=>{
		//Banner section
		navigationLinks[0].addEventListener('click', ()=>{
			pageSections[0].scrollIntoView({
				behavior: 'smooth'
			});
			for (var i = navigationLinks.length - 1; i >= 0; i--) {
				navigationLinks[i].className = navigationLinks[i].className.replace(' current-page', '');
			}
			navigationLinks[0].className = navigationLinks[0].className.replace('', ' current-page ');
			closeMenuHandler();
		}, false);
		//About section
		navigationLinks[1].addEventListener('click', ()=>{
			pageSections[1].scrollIntoView({
				behavior: 'smooth'
			});
			for (var i = navigationLinks.length - 1; i >= 0; i--) {
				navigationLinks[i].className = navigationLinks[i].className.replace(' current-page', '');
			}
			navigationLinks[1].className = navigationLinks[1].className.replace('', ' current-page ');
			closeMenuHandler();
		}, false);
		//Services section
		navigationLinks[2].addEventListener('click', ()=>{
			pageSections[2].scrollIntoView({
				behavior: 'smooth'
			});
			for (var i = navigationLinks.length - 1; i >= 0; i--) {
				navigationLinks[i].className = navigationLinks[i].className.replace(' current-page', '');
			}
			navigationLinks[2].className = navigationLinks[2].className.replace('', ' current-page ');
			closeMenuHandler();
		}, false);
		//Pricing section
		navigationLinks[3].addEventListener('click', ()=>{
			pageSections[3].scrollIntoView({
				behavior: 'smooth'
			});
			for (var i = navigationLinks.length - 1; i >= 0; i--) {
				navigationLinks[i].className = navigationLinks[i].className.replace(' current-page', '');
			}
			navigationLinks[3].className = navigationLinks[3].className.replace('', ' current-page ');
			closeMenuHandler();
		}, false);
		//Team section
		navigationLinks[4].addEventListener('click', ()=>{
			pageSections[4].scrollIntoView({
				behavior: 'smooth'
			});
			for (var i = navigationLinks.length - 1; i >= 0; i--) {
				navigationLinks[i].className = navigationLinks[i].className.replace(' current-page', '');
			}
			navigationLinks[4].className = navigationLinks[4].className.replace('', ' current-page ');
			closeMenuHandler();
		}, false);
		//Contact section
		navigationLinks[5].addEventListener('click', ()=>{
			pageSections[5].scrollIntoView({
				behavior: 'smooth'
			});
			for (var i = navigationLinks.length - 1; i >= 0; i--) {
				navigationLinks[i].className = navigationLinks[i].className.replace(' current-page', '');
			}
			navigationLinks[5].className = navigationLinks[5].className.replace('', ' current-page ');
			closeMenuHandler();
		}, false);
	})();

	//Touch/Mouse event listener (cross-device targeting)
	var isChromium = window.chrome;
	var winNav = window.navigator;
	var vendorName = winNav.vendor;
	var isOpera = typeof window.opr !== "undefined";
	var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
	var isIOSChrome = winNav.userAgent.match("CriOS");

	if (winNav.userAgent.indexOf("iOS")) {
		if (isIOSChrome || isIEedge) {
		   // is Google Chrome or Microsoft Edge on IOS
		   window.addEventListener('mouseup', mouseEvents, false);
		   closeButton.addEventListener('mouseup', closeMenuHandler, false);
		} else if(
		  isChromium !== null &&
		  typeof isChromium !== "undefined" &&
		  vendorName === "Google Inc." &&
		  isOpera === false
		) {
		   // is Google Chrome or Microsoft Edge
		   window.addEventListener('mouseup', mouseEvents, false);
		} else { 
		   // neither Google Chrome nor Microsoft Edge
			window.addEventListener('touchend', mouseEvents, false);

			closeButton.addEventListener('touchend', closeMenuHandler, false);

		}
	}
	if (navigator.userAgent.indexOf("Android") != -1) {
		if (isIOSChrome || isIEedge) {
		   // is Google Chrome or Microsoft Edge on Android
		   window.addEventListener('mouseup', mouseEvents, false);
		   closeButton.addEventListener('mouseup', closeMenuHandler, false);
		} else {// neither Google Chrome nor Microsoft Edge
			window.removeEventListener('touchend', mouseEvents);

			closeButton.removeEventListener('touchend', closeMenuHandler);

			window.addEventListener('mouseup', mouseEvents, false);
			closeButton.addEventListener('mouseup', closeMenuHandler, false);
		}		
	}
}

window.addEventListener('DOMContentLoaded', mobileMenu); //Run srcipt after page loads
//-------STYLING FOR NAVBAR COMPONENT-------
const NavBar_responsive = {
  base: "flex flex-none flex-row order-last w-screen h-20 ",
  sm: " sm:sticky sm:top-0 sm:left-0  sm:flex-col sm:w-24 sm:order-first sm:h-screen ", // non-mobile screen, layout column, nav at first, nav at full height, collapse nav
  md: " md:ease-in-out md:duration-300 ", // only apply animation to md screen to avoid flashing when relayouting
  lg: " lg:w-60 lg:px-4  ",
};

let NavBarResponsiveStyle;
for (let key in NavBar_responsive) {
  NavBarResponsiveStyle += NavBar_responsive[key]; // concatenate all styles
}
export const NavBarResponsive = NavBarResponsiveStyle;

//-------STYLING FOR NAVBAR COMPONENT-------

//-------STYLING FOR NAVBAR HEADER COMPONENT-------
const NavBarHeader_responsive = {
  container: {
    base: " hidden h-16 w-full justify-start items-center ease-in-out duration-300 ",
    sm: " sm:flex ",
    lg: "",
  },
  item_icon: {
    base: " h-full w-full p-2 hidden justify-center items-center ease-in-out duration-300 ",
    sm: " sm:flex ",
    lg: " lg:h-8 lg:w-8 lg:hidden ",
  },
  item_text: {
    base: " hidden ease-in-out duration-300 ",
    sm: "",
    lg: " lg:flex lg:flex-nowrap lg:h-full lg:w-full lg:justify-start lg:items-center ",
  },
};

let navHeaderStyle, navHeaderIconStyle, navHeaderTextStyle;
for (let key in NavBarHeader_responsive.container) {
  navHeaderStyle += NavBarHeader_responsive.container[key]; // concatenate all styles
}
for (let key in NavBarHeader_responsive.item_icon) {
  navHeaderIconStyle += NavBarHeader_responsive.item_icon[key]; // concatenate all styles
}
for (let key in NavBarHeader_responsive.item_text) {
  navHeaderTextStyle += NavBarHeader_responsive.item_text[key]; // concatenate all styles
}

export const NavHeader = navHeaderStyle;
export const NavHeaderIcon = navHeaderIconStyle;
export const NavHeaderText = navHeaderTextStyle;

//-------STYLING FOR NAVBAR HEADER COMPONENT-------

//-------STYLING FOR MENULIST COMPONENT-------
const NavMenu_responsive = {
  container: {
    base: " flex flex-row w-full h-full justify:between justify-start items-center gap-3 ",
    sm: " sm:flex-col sm:w-full sm:h-auto sm:pt-4 ",
    lg: " lg:gap-2 ",
  },
  MenuItem_icon: {
    base: " flex h-full w-full justify-center items-center text-tegami-900 gap-2 ease-in-out duration-300 ",
    sm: " sm:h-auto sm:py-2 ",
    lg: " lg:justify-start ",
  },
  MenuItem_text: {
    base: " hidden pl-2 ease-in-out duration-300 ",
    sm: "",
    lg: " lg:flex lg:flex-nowrap lg:h-full lg:w-full lg:justify-start lg:items-center ",
  },
};

let navMenuStyle, navMenuIconStyle, navMenuTextStyle;
for (let key in NavMenu_responsive.container) {
    navMenuStyle += NavMenu_responsive.container[key]; // concatenate all styles
}
for (let key in NavMenu_responsive.MenuItem_icon) {
    navMenuIconStyle += NavMenu_responsive.MenuItem_icon[key]; // concatenate all styles
}
for (let key in NavMenu_responsive.MenuItem_text) {
    navMenuTextStyle += NavMenu_responsive.MenuItem_text[key]; // concatenate all styles
}

export const NavMenu = navMenuStyle;
export const NavMenuIcon = navMenuIconStyle;
export const NavMenuText = navMenuTextStyle;


//-------STYLING FOR MENULIST COMPONENT-------

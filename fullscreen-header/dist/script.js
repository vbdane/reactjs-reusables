import classnames from "https://cdn.skypack.dev/classnames@2.3.1";

function MenuBar(props) {

  const [isMobileMenu, toggleMobileMenu] = React.useState(false);
  const [isSearch, toggleSearch] = React.useState(false);

  var navClassNames = classnames('nav', {
    "search": isSearch,
    "no-search": !isSearch,
    "mobile-nav": isMobileMenu });


  var searchInputClassNames = classnames("search-input", {
    "search-active": isSearch });


  var mobileMenuBtnClassNames = classnames('menu-toggle', {
    "is-active": isMobileMenu });


  var navWrapperClassNames = classnames('nav-wrapper', {
    'nav-wrapper-mobile-background': isMobileMenu });


  return /*#__PURE__*/(
    React.createElement("div", { class: "nav-outer-wrapper" }, /*#__PURE__*/
    React.createElement("div", { class: navWrapperClassNames }, /*#__PURE__*/
    React.createElement("div", { class: "grad-bar" }), /*#__PURE__*/
    React.createElement("nav", { class: "navbar" }, /*#__PURE__*/
    React.createElement("object", {
      data: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      type: "image/svg+xml",
      class: "logo" }), /*#__PURE__*/

    React.createElement("div", {
      class: mobileMenuBtnClassNames,
      id: "mobile-menu",
      onClick: () => isMobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true) }, /*#__PURE__*/

    React.createElement("span", { class: "bar" }), /*#__PURE__*/
    React.createElement("span", { class: "bar" }), /*#__PURE__*/
    React.createElement("span", { class: "bar" })), /*#__PURE__*/

    React.createElement("ul", { class: navClassNames }, /*#__PURE__*/
    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, "Home")), /*#__PURE__*/

    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, "About")), /*#__PURE__*/

    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, "Work")), /*#__PURE__*/

    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, "Careers")), /*#__PURE__*/

    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, "Contact Us")), /*#__PURE__*/

    React.createElement("i", {
      class: "fas fa-search",
      id: "search-icon",
      onClick: () => isSearch ? toggleSearch(false) : toggleSearch(true) }), /*#__PURE__*/

    React.createElement("input", {
      class: searchInputClassNames,
      type: "text",
      placeholder: "Search" }))))));






}

function Hero(props) {
  return /*#__PURE__*/(
    React.createElement("div", { class: "hero" }, /*#__PURE__*/
    React.createElement("div", { class: "heading" }, /*#__PURE__*/
    React.createElement("h1", null, "Building next-gen leaders"), /*#__PURE__*/
    React.createElement("button", null, "Explore"))));



}

function Header(props) {
  return /*#__PURE__*/(
    React.createElement("div", { class: "header-container" }, /*#__PURE__*/
    React.createElement(MenuBar, null), /*#__PURE__*/
    React.createElement(Hero, null)));


}

ReactDOM.render( /*#__PURE__*/React.createElement(Header, null), document.getElementById("root"));
function FlashCard(props) {
  return /*#__PURE__*/(
    React.createElement("div", { class: "flashcard" }, /*#__PURE__*/
    React.createElement("div", { class: "flashcard-image-container" }, /*#__PURE__*/
    React.createElement("img", { src: props.img, class: "flashcard-image" })), /*#__PURE__*/

    React.createElement("div", { class: "flashcard-details" }, /*#__PURE__*/
    React.createElement("a", { href: props.link, class: "flashcard-title" },
    props.title), /*#__PURE__*/

    React.createElement("p", { class: "flashcard-subtitle" },
    props.subtitle), /*#__PURE__*/

    React.createElement("button", { href: props.link, class: "flashcard-button" }, /*#__PURE__*/
    React.createElement("span", { class: "flashcard-button-name" }, "\xA0Read More\xA0"), /*#__PURE__*/
    React.createElement("i", { class: "fa fa-arrow-right fa-lg", id: "button-icon" })))));




}

function FlashCardsSection(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "flashcards-root" },
    props.data.map((data) => /*#__PURE__*/
    React.createElement(FlashCard, {
      img: data.img,
      title: data.title,
      subtitle: data.subtitle,
      link: data.link }))));




}

const data = [
{
  img: "https://picsum.photos/400/600",
  title: "Phasellus Pulvinar Lacinia Tortor",
  subtitle: "In ut interdum nunc. Quisque sem enim, hendrerit id enim vel, facilisis",
  link: "#" },

{
  img: "https://picsum.photos/400/600",
  title: "Cras Vulputate Lacus Sit",
  subtitle: "Aliquam laoreet sem sapien, sed luctus urna vehicula eget. Suspendisse iaculis hendrerit",
  link: "#" },

{
  img: "https://picsum.photos/400/600",
  title: "Vivamus Nunc Tempor.",
  subtitle: "Aenean iaculis velit a laoreet placerat. Duis bibendum placerat risus, vitae iaculis",
  link: "#" },

{
  img: "https://picsum.photos/400/600",
  title: "Proin Vitae Condimentum Odio",
  subtitle: "Etiam vel vestibulum lectus, eu interdum augue. Integer id blandit leo. Aliquam",
  link: "#" },

{
  img: "https://picsum.photos/400/600",
  title: "Mauris Consequat Est",
  subtitle: "Nullam pretium tempor mi, non dignissim eros finibus at. Sed suscipit blandit.",
  link: "#" }];



ReactDOM.render( /*#__PURE__*/
React.createElement(FlashCardsSection, { data: data }),
document.getElementById("flashcards-container"));
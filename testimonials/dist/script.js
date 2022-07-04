function getTestimonials() {
  //put api calls to retrieve testimonials here
  const testimonials = [
  {
    text:
    "Proin erat justo, eleifend in hendrerit sit amet, lacinia et justo. Proin euismod pulvinar leo et sodales. Curabitur egestas diam sed diam malesuada venenatis. Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
    name: "John Doe",
    image: "#",
    stars: 5,
    link: "#" },

  {
    text:
    "Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
    name: "Alicia Maze",
    image: "#",
    stars: 5,
    link: "#" },

  {
    text:
    "Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
    name: "Bob Roger",
    image: "#",
    stars: 5,
    link: "#" },

  {
    text:
    "Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
    name: "Bob Roger",
    image: "#",
    stars: 5,
    link: "#" }];


  return testimonials;
}

function scroll(direction) {
  let { w, h } = getViewportDimensions();
  var scroll_by = 0;

  if (w > 768) {
    scroll_by = Math.round(0.415 * w);
  } else {
    scroll_by = Math.round(1.05 * w);
  }

  if (direction == "left") {
    scroll_by = 0 - scroll_by;
  }

  const testimonial_classes = Array.from(
  document.getElementsByClassName("testimonials"));

  console.log(scroll_by);
  const class_to_scroll = testimonial_classes[0];
  class_to_scroll.scrollBy({ top: 0, left: scroll_by, behavior: "smooth" });
}

function getViewportDimensions() {
  if (window.innerWidth !== undefined && window.innerHeight !== undefined) {
    var w = window.innerWidth;
    var h = window.innerHeight;
  } else {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
  }
  return { w, h };
}

function Testimonials(props) {
  const data = props.data;
  return /*#__PURE__*/(
    React.createElement("div", { className: "testimonials-viewport" }, /*#__PURE__*/
    React.createElement(ScrollBtn, { pos: "left", arrow: "\u2B9C" }), /*#__PURE__*/
    React.createElement(ScrollBtn, { pos: "right", arrow: "\u2B9E" }), /*#__PURE__*/
    React.createElement("div", { className: "testimonials" },
    data.map((review) => /*#__PURE__*/
    React.createElement(TestimonialCard, {
      review: review.text,
      name: review.name,
      image: review.image,
      stars: review.stars })))));





}

function Star(props) {
  return /*#__PURE__*/React.createElement("span", { class: "fa fa-star checked" });
}

function ScrollBtn(props) {
  return /*#__PURE__*/(
    React.createElement("button", {
      className: `scroll_btn ${props.pos}`,
      onClick: () => scroll(props.pos) },

    props.arrow));


}

function TestimonialCard(props) {
  const stars = getStarList(props.stars);
  return /*#__PURE__*/(
    React.createElement("div", { class: "card" }, /*#__PURE__*/
    React.createElement("div", { class: "card_container" }, /*#__PURE__*/
    React.createElement("div", { class: "review" }, /*#__PURE__*/
    React.createElement("blockquote", null, props.review), /*#__PURE__*/
    React.createElement("rating", null,
    stars.map((star) => /*#__PURE__*/
    React.createElement(Star, null))), /*#__PURE__*/


    React.createElement("div", { class: "reviewer" }, /*#__PURE__*/
    React.createElement("img", { src: props.image, height: "30px", width: "30px" }), /*#__PURE__*/
    React.createElement("a", { href: props.link }, props.name))))));





}

function getStarList(value) {
  let star_list = [];
  for (let i = 0; i < value; i++) {
    star_list.push(i);
  }

  return star_list;
}

ReactDOM.render( /*#__PURE__*/
React.createElement(Testimonials, { data: getTestimonials() }),
document.getElementById("root"));

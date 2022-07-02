function getTestimonials() {
  //put api calls to retrieve testimonials here
  const testimonials = [
  {
    text:
    "Proin erat justo, eleifend in hendrerit sit amet, lacinia et justo. Proin euismod pulvinar leo et sodales. Curabitur egestas diam sed diam malesuada venenatis. Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
    name: "John Doe",
    image: "https://i.pravatar.cc/30?img=1",
    stars: 5 },

  {
    text:
    "Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
    name: "Alicia Maze",
    image: "https://i.pravatar.cc/30?img=2",
    stars: 5 },

  {
    text:
    "Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
    name: "Bob Roger",
    image: "https://i.pravatar.cc/30?img=4",
    stars: 5 }];


  return testimonials;
}

function Testimonials(props) {
  const data = props.data;
  return /*#__PURE__*/(
    React.createElement("div", { className: "testimonials" },
    data.map((review) => /*#__PURE__*/
    React.createElement(TestimonialCard, {
      review: review.text,
      name: review.name,
      image: review.image,
      stars: review.stars }))));




}

function Star(props) {
  return /*#__PURE__*/React.createElement("span", { class: "fa fa-star checked" });
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
    React.createElement("a", { href: "#" }, props.name))))));





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
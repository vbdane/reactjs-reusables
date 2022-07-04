function getTestimonials() {
  //put api calls to retrieve testimonials here
  const testimonials = [
    {
      text:
        "Proin erat justo, eleifend in hendrerit sit amet, lacinia et justo. Proin euismod pulvinar leo et sodales. Curabitur egestas diam sed diam malesuada venenatis. Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
      name: "John Doe",
      image: "#",
      stars: 5,
      link: "#"
    },
    {
      text:
        "Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
      name: "Alicia Maze",
      image: "#",
      stars: 5,
      link: "#"
    },
    {
      text:
        "Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
      name: "Bob Roger",
      image: "#",
      stars: 5,
      link: "#"
    },
    {
      text:
        "Suspendisse suscipit ante eu libero accumsan sagittis. Vestibulum vitae libero et felis laoreet condimentum ac a nisl. Curabitur hendrerit, augue sit amet porttitor venenatis, metus erat consequat urna, a sagittis mi neque ac sapien tellus.",
      name: "Bob Roger",
      image: "#",
      stars: 5,
      link: "#"
    }
  ];
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
    document.getElementsByClassName("testimonials")
  );
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
  return (
    <div className="testimonials-viewport">
      <ScrollBtn pos="left" arrow="⮜" />
      <ScrollBtn pos="right" arrow="⮞" />
      <div className="testimonials">
        {data.map((review) => (
          <TestimonialCard
            review={review.text}
            name={review.name}
            image={review.image}
            stars={review.stars}
          />
        ))}
      </div>
    </div>
  );
}

function Star(props) {
  return <span class="fa fa-star checked"></span>;
}

function ScrollBtn(props) {
  return (
    <button
      className={`scroll_btn ${props.pos}`}
      onClick={() => scroll(props.pos)}
    >
      {props.arrow}
    </button>
  );
}

function TestimonialCard(props) {
  const stars = getStarList(props.stars);
  return (
    <div class="card">
      <div class="card_container">
        <div class="review">
          <blockquote>{props.review}</blockquote>
          <rating>
            {stars.map((star) => (
              <Star />
            ))}
          </rating>
          <div class="reviewer">
            <img src={props.image} height="30px" width="30px" />
            <a href={props.link}>{props.name}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStarList(value) {
  let star_list = [];
  for (let i = 0; i < value; i++) {
    star_list.push(i);
  }

  return star_list;
}

ReactDOM.render(
  <Testimonials data={getTestimonials()} />,
  document.getElementById("root")
);

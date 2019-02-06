import React from "react";
import Two from "two.js";

const createStraightTrack = (panel, position) => {
  const width = 64;
  const length = 128;
  const track = panel.makeRectangle(position.x, position.y, length, width);
  track.noStroke().fill = "skyblue";
  return track;
};

class TwoPage extends React.Component {
  componentWillMount() {
    const two = new Two({
      type: Two.Types.svg,
      // type: Two.Types[this.props.type],
      // fullscreen: true,
      width: 900,
      height: 400,
      autostart: true
    });

    this.two = two;
    window.two = two;

  }

  componentDidMount() {
    const two = this.two;

    this.interval = setInterval( () => {
      console.log("Tick");
      two.update();
    }, 2000);

    const newState = this.state;
    two
      .bind("resize", this.resize)
      .appendTo(this.stage)
      .update();
    console.log("two.width", two.width, "two.height", two.height);

    this.rect = createStraightTrack(two, { x: 100, y: 100 });

    two.load("R40_2.svg", (shape, svg) => {
      // svg is a Two.Group that has all the children 
      console.log('svg loaded!');
      shape.center(); // I center the object's shapes 
      shape.noStroke().fill = "red";
      // shape.translation.set(50, 56); // move to the center of the canvas
    });

    two.load("https://raw.githubusercontent.com/jonobr1/two.js/dev/tests/images/interpretation/D.svg", (shape, svg) => {
      // svg is a Two.Group that has all the children 
      console.log('svg loaded!', shape, svg);
      shape.center(); // I center the object's shapes 
      shape.noStroke().fill = "green";
      shape.translation.set(two.width / 2, two.height / 2); // move to the center of the canvas

    });    
    two.update();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    //this.two.unbind('resize', this.resize);
  }

  componentWillUpdate(nextProps, nextState) {
    // check if we really need to rerender the component
  }

  render() {
    return (
      <div>
        <h2>TwoPage</h2>
        <div ref={c => (this.stage = c)} style={{ height: 100 + "%", backgroundColor: "#EEE" }} />
      </div>
    );
  }
}

export default TwoPage;

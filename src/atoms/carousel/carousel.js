import React from "react";
import PropTypes from "prop-types";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";

import "./pure-react-carousel.scss";
import "./carousel.scss";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true
    };
  }

  handleButtonClick = () => this.setState({ isPlaying: false });

  render() {
    const { isPlaying } = this.state;
    const { images } = this.props;
    return (
      <CarouselProvider
        className="carousel"
        interval={4000}
        isPlaying={isPlaying}
        naturalSlideHeight={50}
        naturalSlideWidth={100}
        totalSlides={images.length}
      >
        <Slider className="carousel__slider">
          {images.map(({ alt, key, src }) => (
            <Slide key={key} index={key} className="carousel__slide">
              <Image
                key={key}
                className="carousel__slide-image"
                src={src}
                alt={alt}
              />
            </Slide>
          ))}
        </Slider>
        <div className="carousel__dots">
          <DotGroup />
        </div>
        <div className="carousel__buttons">
          <ButtonBack
            className="carousel__button"
            onClick={this.handleButtonClick}
          >
            Back
          </ButtonBack>
          <ButtonNext
            className="carousel__button"
            onClick={this.handleButtonClick}
          >
            Next
          </ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};

export default Carousel;

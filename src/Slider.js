import React from 'react';
import './Styles.css';
import Slide from './Slide'

export default class Slider extends React.Component {
  constructor (props) {
    super(props)
  
    this.state = {
        transformSpeed: 1,
        currentSlide: {
          slide: 1,
          transform: -640
        },
    }
    
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.dotClick = this.dotClick.bind(this)  
    this.sliderMouseEnter = this.sliderMouseEnter.bind(this)
    this.sliderMouseLeave = this.sliderMouseLeave.bind(this)  
    this.handleLastSlide = this.handleLastSlide.bind(this)
    this.handleFirstSlide = this.handleFirstSlide.bind(this)

    this.handleAutoplay()
  }

  handleSwipes () {
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    let touchZone = document.getElementById('slides-container');

    touchZone.addEventListener('touchstart', function(event) {
        touchstartX = event.screenX;
        touchstartY = event.screenY;
    }, false);

    touchZone.addEventListener('touchend', function(event) {
        touchendX = event.screenX;
        touchendY = event.screenY;
        handleGesure();
    }, false); 

    function handleGesure() {
        if (touchendX < touchstartX) {
            this.prevSlide()
        }
        if (touchendX > touchstartX) {
            this.nextSlide()
        }
    }
  }

  handleLastSlide () {
    this.setState({
      transformSpeed: 0,
      currentSlide: {
        slide: 1,
        transform: -640
      }
    })
  }

  handleFirstSlide () {
    this.setState({
      transformSpeed: 0,
      currentSlide: {
        slide: this.props.data.length,
        transform: -(this.props.data.length * 640)
      }
    })
  }

  nextSlide () {
    let sliderContainer = document.getElementById('slides-container')
    sliderContainer.removeEventListener('transitionend', this.handleLastSlide)
    this.setState({ 
      transformSpeed: 1
    })

    if (this.state.currentSlide.slide === this.props.data.length) {
      this.setState({ 
        currentSlide: {
          slide: 1,
          transform: this.state.currentSlide.transform - 640
        }
      })
      sliderContainer.addEventListener('transitionend', this.handleLastSlide)
    } else {
      this.setState({ 
        currentSlide: {
          slide: this.state.currentSlide.slide + 1,
          transform: this.state.currentSlide.transform - 640
        }
      })
    }
  }

  prevSlide () {
    let sliderContainer = document.getElementById('slides-container')
    sliderContainer.removeEventListener('transitionend', this.handleFirstSlide)
    this.setState({ 
      transformSpeed: 1
    })

    if (this.state.currentSlide.slide === 1) {
      this.setState({ 
        currentSlide: {
          slide: this.props.data.length,
          transform: this.state.currentSlide.transform + 640
        }
      })
      sliderContainer.addEventListener('transitionend', this.handleFirstSlide)
    } else {
      this.setState({ 
        currentSlide: {
          slide: this.state.currentSlide.slide - 1,
          transform: this.state.currentSlide.transform + 640
        }
      })
    }
  }

  dotClick (event) {
    let currentDot = parseInt(event.currentTarget.getAttribute('data-dot-index'));
    this.setState({
      currentSlide: {
        slide: currentDot,
        transform: -(currentDot * 640)
      }
    })
  }

  getDots () {
    let dotsContent = [];
    for (let i = 0; i < this.props.data.length; i++) {
      let dotClassName = "dot";
      if (i + 1 === this.state.currentSlide.slide) {
          dotClassName += " active-dot";
      }
      dotsContent.push(<button className={dotClassName} data-dot-index={i + 1} key={`dot-${i}`} onClick={this.dotClick}></button>)
    }
    return dotsContent;
  }

  getSlide () {
    let slides = [];
    let slideArray = this.props.data
    
    slides.push(
      <Slide
          key={'DuplicatedLastSlide'}
          id={'DuplicatedLastSlide'}
          bgImage={slideArray[slideArray.length - 1].bgImage}
          bgColor={slideArray[slideArray.length - 1].bgColor}
          content={slideArray[slideArray.length - 1].content}
        />
    )

    slideArray.forEach((item, index) => {
      slides.push(
        <Slide
          key={`slide-${index}`}
          bgImage={item.bgImage}
          bgColor={item.bgColor}
          content={item.content}
        />
      )
    })

    slides.push(
      <Slide
          key={'DuplicatedFirstSlide'}
          id={'DuplicatedFirstSlide'}
          bgImage={slideArray[0].bgImage}
          bgColor={slideArray[0].bgColor}
          content={slideArray[0].content}
        />
    )

    return slides;
  }

  handleAutoplay () {
    if (this.props.autoplay) {
      this.slideInterval = setInterval(this.nextSlide, this.props.autoplayTime);
    }
  }

  sliderMouseEnter () {
    clearInterval(this.slideInterval);
  }

  sliderMouseLeave () {
    if (this.props.autoplay) {
      this.slideInterval = setInterval(this.nextSlide, this.props.autoplayTime);
    }
  }

  render () {
    let buttonContainer = null
    if (this.props.buttons) {
      buttonContainer = (
        <div className="buttons">
          <i className="fas fa-arrow-right nextBtn" onClick={this.nextSlide}></i>
          <i className="fas fa-arrow-left prevBtn" onClick={this.prevSlide}></i>
        </div>
      )
    }
    let dotContainer = null
    if (this.props.dots) {
      dotContainer = <div className="dots" key="dots">{this.getDots()}</div>
    }

    return (
      <div className="slider" onMouseEnter={this.sliderMouseEnter} onMouseLeave={this.sliderMouseLeave}>
        <div className="slides-container" id="slides-container" style={{transition: `transform ${this.state.transformSpeed}s ease-in-out`, transform: `translateX(${this.state.currentSlide.transform}px)`}}>
          {this.getSlide()}
        </div>
        {buttonContainer}
        {dotContainer}
      </div>
    )

    this.handleSwipes()
  }
};
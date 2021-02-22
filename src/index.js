import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';

import bg from './assets/1.jpg'

ReactDOM.render(
    <Slider 
        autoplay={true}
        autoplayTime={4000}
        buttons={true}
        data={[
            {
              bgColor: 'red',
              content: (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                  Hello!<br/>This is a simple demonstration of slider content</div>
              )
            },
            {
              bgColor: 'blue',
              content: (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <h1>Simply add an H1 tag in the content!</h1></div>
              )
            },
            {
              bgColor: 'green',
              content: (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <h2>Yes! You should play around with styles...</h2></div>
              )
            },
            {
              bgColor: 'orange',
              content: (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <p>And you can!!!</p></div>
              )
            },
            {
              bgImage: bg,
              content: (
                <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100%', color: 'white'}}>
                <p>Here is a case of using a background image initially...</p></div>
              )
            },
            {
              bgColor: 'brown',
              content: (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <span>Technically I could include a button here, but I put a SPAN!</span></div>
              )
            }
          ]}
        dots={true}
    />
, document.getElementById('root'));

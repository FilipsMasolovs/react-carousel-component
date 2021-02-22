This is a simple REACT carousel component which accepts both pictures as background and any HTML content as content.

To set up the project run the following:

### `yarn install`

Is needed for the folowing to work properly!

### `yarn build`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### IMPORTANT TO KNOW!!!
This is a basic setup, index.js renders just one component - Slider!
The component recieves props:

1. autoplay - is a boolean (true/false) and will determine wethere the autoplay functionality is enabled
2. autoplayTime - is a number (in miliseconds) and will determine the timeout for the autoplay
3. buttons - is a boolean (true/false) and will determine wethere there will be buttons (arrows) on the sides of the slider
4. data - is and array of objects, each object is one slide content.
    Structure of the object: {
        bgColor: a string that will determine the background color of the slide ex. 'white' or '#fff'
        bgImage: a link to the background image of the slide
        content: and HTML objec ex (<h1>Simply add an H1 tag in the content!</h1>)
    }
5. dots - is a boolean (true/false) and will determine wethere there will be clickable dots at the bottom of the slider
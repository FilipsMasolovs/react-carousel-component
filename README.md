This is a simple REACT carousel component which accepts both pictures as background and any HTML content as content.

To set up the project run the following:

### `yarn install`

Is needed for the folowing to work properly!

### `yarn build`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `IMPORTANT TO KNOW!!!`
This is a basic setup, index.js renders just one component - Slider!
The component recieves props:

1. autoplay - is a boolean (true/false) and will determine wethere the autoplay functionality is enabled
2. autoplayTime - is a number (in miliseconds) and will determine the timeout for the autoplay
3. buttons - is a boolean (true/false) and will determine wethere there will be buttons (arrows) on the sides of the slider
4. data - is and array of objects, each object is one slide content.<br>
    Structure of the object: {<br>
        bgColor: a string that will determine the background color of the slide ex. 'white' or '#fff'<br>
        bgImage: a link to the background image of the slide<br>
        content: any HTML object<br>
    }
5. dots - is a boolean (true/false) and will determine wethere there will be clickable dots at the bottom of the slider

### NOTES:
1. Currently slide size is hardcoded to 720x720, but it is easily to change to set it as a prop also.
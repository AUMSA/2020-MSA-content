# Implementing Video Player Component
## Getting started
Firstly, check that if you have node and npm installed.  
To check if you have Node.js installed, run this command in your terminal:  
`node -v`  
To confirm that you have npm installed you can run this command in your terminal:  
`npm -v`

If you don't have npm or Node.js, download and install npm and Node.js [here.](https://www.npmjs.com/get-npm)  
You’ll need to have Node 8.10.0 or later on your local development machine.

## Create React App
To create a new app, we choose to use `npm` method.

In your terminal, navigate to the destination folder that you want to create your application. type in the following command:

`npm init react-app my-app`  

(_`npm init <initializer>`_ is available in `npm` 6+)

It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```
## Running the app
Once installation is done, navigate to your project folder:

`npm start`

Then open http://localhost:3000/ to see your app.

Now you are good to go to the next step building your own React App by editing src/App.js

## Installing packages
There are many existing packages (libraries) that we can utilize to create cool components of own React application. In order to implement video components, we will use `react-player` and `prop-types`.

If your app is still running, press `ctrl+C` (Windows) or `command+C` (MacOS) in your terminal. Make sure you are in you project folder 'my-app'. Let's install:
1. [react-player](https://www.npmjs.com/package/react-player)

`npm install react-player --save`

This will enable you to display and control components related to video in your React application.

2. [prop-types](https://www.npmjs.com/package/prop-types)

`npm install --save prop-types`

PropTypes was originally exposed as part of the React core module, and is commonly used with React components. It helps you to catch bugs and serves as a handy documentation on how a component has to be used in terms of passing props.

## Implementing video player components

Generally, we will have 4 components named `Title`, `Video`, `Displayer` and `AddVideo` to handle the action of submitting a video link and display the video within the application.

In folder **src**, create a folder named **Components** containing files named `Title.js`, `Video.js`, `Displayer.js`, and `AddVideo.js`.

### App.js

Firstly, in App.js, we will import all the components and display them using `render()` method.

```javascript
import React, { Component } from 'react'
import './Components/stylesheet.css'
import Displayer from './Components/Displayer'
import Title from './Components/Title'
import AddVideo from './Components/AddVideo'

class App extends Component {
  render() {
      return (<div>
          <Title title={'No-Laugh Challenge'} />
          <AddVideo onAddVideo={(addedPost) => {
              this.addVideo(addedPost)
          }}/>
          <div className = "video-wrapper">
              <Displayer posts={this.state.posts} />
          </div>
      </div>
      )
  }
}

export default App;
```

Secondly, `constructor()`, `addVideo()` functions will handle the action of passing an url and mapping it through `Video.js` and `Displayer.js`, which is called **state management** in React.

Now add the `constructor()` and `addVideo()` inside your class `App` and outside `render()` method.

```javascript
constructor() {
    super()
    this.state = {
        posts: [{
            videoLink: ""
        }]
    }
}

addVideo(postSubmitted) {
    this.setState(state => ({
        posts: [postSubmitted]
    }))
}
```

### Title.js

`Title.js` will render the title name which is passed in as a prop to `App.js`.   
Using `this.props.title` (PropTypes) allows us to change title name to whatever we want by simply change the title value in App.js, i.e. without changing anything in the individual component file itself.

```javascript
import React, {Component} from 'react';

class Title extends Component {
    render() {
        return (
            <h1> {this.props.title} </h1>
        )
    }
}

export default Title
```

### Video.js

This video component will define and call the `video()` function which will get the video url that we put into AddVideo.js, map it over to Video.js and play it.

`.propTypes` give the current component a property of PropTypes equals to an object. This object will have as many PropTypes as the amount of props that be passed on the current component.

In this case Video component will have one PropTypes called `posts`, which is an mandatory PropTypes of an object; i.e. whatever prop in the form of posts from the component instance must be an object.

`.isRequired` means that if there is no post being passed into our `Displayer` component, it will throw a big error!

```javascript
import React from 'react'
import propTypes from 'prop-types'
import ReactPlayer from 'react-player'

function Video(props) {
    const post = props.post
        return <div>            
            <ReactPlayer
            url = {post.videoLink}
            playing
            controls
            />
        </div>
}

Video.propTypes = {
    post: propTypes.object.isRequired
}

export default Video
```

### Displayer.js

Similarly in this case `Displayer()` function will have one PropTypes called `posts`, which is an mandatory PropTypes of an array; i.e. whatever prop in the form of posts from the component instance must be an array.

The `displayer()` function will map with video link in `Video` component and display that value (which is a video in this case).


```javascript
import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'

function Displayer(props) {
  return <div>
    {props.posts.map((post) => <Video post={post} />)}
  </div>
}

Displayer.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Displayer
```

### AddVideo.js
This component will handle the action of url input. It has one textbox for url and a button `Play` to submit the video link. This will change the state on our App.js and the `addVideo()` function in `App.js` will handle it, map it to Video.js, then to Displayer.js and display it through render() method in App.js

```javascript
import React, {Component} from 'react'

class AddVideo extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const videoLink = event.target.elements.link.value
        const post = {
            videoLink: videoLink
        }
        if (videoLink){
            this.props.onAddVideo(post)
        }
    }

    render() {
        return (
            <h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <button> Play </button>
                    </form>
                </div>
            </h1>
        )
    }
}

export default AddVideo
```

### index.js

Now, we need to import `ReactDOM`, `App`, and `stylesheet.css` into `index.js`.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './components/stylesheet.css'

ReactDOM.render(<App/>, document.getElementById('root'));
```

### stylesheet.css

Now we have done the core functions of the app to handle input and play a video url. Now we will do a little bit about css so that the interface would be more beautiful.

Within the `components` folder, let's create a file named `stylesheet.css`. The following code is to set the UI of `h1` and `video-wrapper`.

```css
h1 {
  text-align: center;
}

.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    border: 1px solid #d3d3d3;
    overflow: hidden;
}

.video-wrapper iframe,
.video-wrapper object,
.video-wrapper embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
Now you are good to go to next part: **Implementing the cognitive service**

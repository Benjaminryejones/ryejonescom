// External
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

// Internal
import Hero from './components/Hero'
import About from './components/About'
import Experiences from './components/Experiences'

class App extends React.Component {
  render() {
    return(
      <div>
        <Hero />
        <About />
        <Experiences />
      </div>
    );
  }
}

// App entry point on the DOM
const MOUNT_NODE = document.getElementById('app-wrapper')

ReactDOM.render(
	<App />,
	MOUNT_NODE
);

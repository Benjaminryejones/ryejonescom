// External
import React from 'react'
// import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardMedia from '@material-ui/core/CardMedia'
// import CardContent from '@material-ui/core/CardContent'
// import Typography from '@material-ui/core/Typography'
// import Divider from '@material-ui/core/Divider'

const About = () => {
  // console.log(experienceData)
  return(
    <div className="about">
      <h3 className="section-title">About Me</h3>
      <hr className="section-hr" />
      <p className="about__text">Hello and welcome to my site. I work on Product and Growth in San Francisco. You can find more details on my professional background below or on <a href="https://www.linkedin.com/in/ryejones/">LinkedIn</a>.</p>
      <br />
      <p className="about__text">Outside of work, I enjoy reading, podcasts, film, house & techno music, and the company of friends. I studied Chinese for many years (though I'm a bit rusty) and continue to be a big fan of Chinese authors and media.</p>
      <br />
      <p className="about__text">I'm generally always working on side projects and enjoy connecting with people working on interesting problems. You can reach me at <a href="mailto:benjaminryejones@gmail.com">benjaminryejones@gmail.com</a> if you'd like to chat.</p>
    </div>
  );
}
export default About

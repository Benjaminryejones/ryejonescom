// External
import React from 'react'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'

const experienceData = [
  {
    'company': 'Next Insurance'
    , 'imgSrc': 'https://pbs.twimg.com/profile_images/941300552377470978/f48YcEVI_400x400.jpg'
    , 'title': 'Product Manager'
    , 'dates': '2018-Present'
    , 'location': 'Palo Alto'
    , 'description': "I lead product/growth initiatives for Next's largest business line with a team of PMs, designers, and engineers. We focus on developing and launching insurance products, market expansion, and conversion rate optimization."
  },
  {
    'company': 'Dropbox'
    , 'imgSrc': 'data:image/png;base64,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'
    , 'title': 'Growth Product Manager'
    , 'dates': '2017-2018'
    , 'location': 'San Francisco'
    , 'description': "I worked on Dropbox's consumer products with a focus on optimizing conversion rates related to payments and the payments page. I also launched Dropbox Professional trials, which doubled Professional subscriptions."
  },
  {
    'company': 'Answers/Multiply'
    , 'imgSrc': 'https://media.licdn.com/dms/image/C560BAQHm49IHnzr5PQ/company-logo_200_200/0?e=2159024400&v=beta&t=aPoC3aesV72YywMFIzjQtWnRCeg0XVOs0GUQCdHnGjU'
    , 'title': 'Manager, Revenue Operations'
    , 'dates': '2015-2017'
    , 'location': 'St. Louis'
    , 'description': "I led the Revenue team at Answers (rebranded to Multiply). The team was responsible for managing and optimizing monetization across multiple Quantcast top 25 web traffic websites; day-to-day included A/B testing, ad ops, and managing relationships with revenue partners."
  },
  {
    'company': 'Fulbright'
    , 'imgSrc': 'https://rs.usembassy.gov/wp-content/uploads/sites/235/2017/04/fulbright-logo.jpg'
    , 'title': 'Research Fellow'
    , 'dates': '2014-2015'
    , 'location': 'Shanghai'
    , 'description': "I returned to Fudan University (where I studied abroad as an undergrad) as a Fulbright Research Fellow to survey contemporary Chinese political philosophy. I focused on the literature discussing democracy in China, but also attended graduate classes in the philosophy department on a range of topics."
  },
  {
    'company': 'Washington University'
    , 'imgSrc': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/2560px-WashU_St._Louis_seal.svg.png'
    , 'title': 'Undergrad'
    , 'dates': '2010-2014'
    , 'location': 'St. Louis'
    , 'description': "I dual majored in Chinese and philosophy as an undergrad at Wash U. I spent my junior year abroad at Fudan University in Shanghai. I originally planned to pursue a PhD in philosophy. My classwork spanned major areas in Analytic philosophy; I especially enjoyed ancient philosophy, normative ethics & metaethics, and philosophy of language."
  },
]

const EXPERIENCE_CARDS = experienceData.map((experience, index) => {
  const backgroundImageStyle = {backgroundImage: "url(" + experience.imgSrc + ")"}
  return(
    <Card className="experience" key={experience.company}>
      <div
        className="experience__image"
        style={ backgroundImageStyle }
      />
      <Divider variant="middle" className="experience__divider" />
      <div className="experience__content">
        <p className="experience__content_company">{experience.company}</p>
        <p className="experience__content_title">{experience.title}</p>
        <p className="experience__content_dateloc">{experience.dates} · {experience.location}</p>
        <p className="experience__content_description">{experience.description}</p>
      </div>
    </Card>
  )
})

const Experiences = () => {
  // console.log(experienceData)
  return(
    <div className="experiences">
      <h3 className="section-title">What I've Worked On</h3>
      <hr className="section-hr" />
      {EXPERIENCE_CARDS}
    </div>
  );
}
export default Experiences

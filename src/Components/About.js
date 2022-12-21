import React, {useState, useEffect} from 'react'
import logo from '../Images/newsense-logo.png'
import '../CSS/About.css'

export default function About(props) {
  const [containerStyle, setContainerStyle] = useState({position: 'relative', top: '4em', backgroundColor: 'rgba(255,255,255,0.9)', color: '#000'})

  useEffect(() => {
    if(props.darkModeTheme === true){
      setContainerStyle({position: 'relative', top: '4em', backgroundColor: 'rgba(17,24,39,0.9)', color: '#fff'})
    }
    else{
      setContainerStyle({position: 'relative', top: '4em', backgroundColor: 'rgba(255,255,255,0.9)', color: '#000'})
    }
  },[props.darkModeTheme])

  return (
    <div className='container' style={containerStyle}>
      <h2 className="text-center"><strong>Welcome to NewsSense</strong></h2>
      <img src={logo} alt='Logo' className='logo'/>
      <p>
        <strong>NewsSense</strong> is a web application which can be used to grab quick daily news bites. 
        You can use NewsSense to know about various types of events around the globe. 
        It provides news for seven different categories which includes General, Business, Entertainment, Health, Science, Sports, and Technology.
        NewsSense uses News API to provide daily news updates. User can fetch the news by just clicking on the category.&nbsp; 
        <i>It's a new story here, daily.</i><br/><br/>
        On clicking any of the category, user can access the top headlines of the selected category for the day. 
        Also, user can select country by clicking on News by Country option. NewsSense provides a vast variety of news headlines from 17 countries. 
        For now, user can only access different categories of news for India (which is selected by default), only General News Headlines can be accessed for other 16 countries.<br/><br/>
        NewsSense is currently in development phase. A lot of features will be added to the app with time including news headlines for seven different categories from 17 countries around the globe, live weather forecast, login/logout feature and more.<br/><br/>
        <i>This application was developed as a personal project to improve and enhance the skills and knowledge of the developer. 
        This project idea was inspired from an entrance test for React Developer job role.</i><br/><br/><br/>
        <strong>Developer Info:</strong><br/>
        Amandeep Singh<br/>BTech Computer Science Engineering - 2022<br/>
        </p>
        <div className="d-flex justify-content-center">
          <a href="mailto:13asramgarhia@gmail.com" target='_blank' rel='noreferrer' className="contact-info" style={{color: '#4169e1', marginLeft: '0.5em', marginRight: '0.5em', fontSize: '1.25em'}}><i className="bi bi-envelope"></i></a>
          <a href="https://github.com/13ASRamgarhia" target='_blank' rel='noreferrer' className="contact-info" style={{color: '#4169e1', marginLeft: '0.5em', marginRight: '0.5em', fontSize: '1.25em'}}><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/13asr/" target='_blank' rel='noreferrer' className="contact-info" style={{color: '#4169e1', marginLeft: '0.5em', marginRight: '0.5em', fontSize: '1.25em'}}><i className="bi bi-linkedin"></i></a>
        </div>
    </div>
  )
}

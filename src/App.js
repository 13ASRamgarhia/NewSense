import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import News from './Components/News';
import About from './Components/About';
import Footer from './Components/Footer';

import bg from './Images/1bg1.jpg'
import logo from './Images/newsense-logo.png'
import lightModeBtn from './Images/lightModeBtn.png'
import darkModeBtn from './Images/darkModeBtn.png'

import './App.css'

const App = ({ ...props }) => {
    const apiKey = '3ddc97087da940e083d863af5e766aeb'

    const [darkModeTheme, setdarkModeTheme] = useState(false)
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDarkMode = () => {
      darkModeTheme ? setdarkModeTheme(false) : setdarkModeTheme(true)
    }

    const [navStyle, setNavStyle] = useState({position: 'fixed', top: 0, width: '100%', zIndex: 1, height: '4em', backgroundColor: 'white', boxShadow: '0px 6px 10px #000'})
    const [navDivStyle, setnavDivStyle] = useState({color: '#000', backgroundColor: 'white'})
    const [linkStyle, setLinkStyle] = useState({color: '#333'})
    const [darkModeBtnStlye, setDarkModeBtnStyle] = useState({backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)', color: '#000'})

    useEffect(() => {
      if(darkModeTheme === true){
        setNavStyle({position: 'fixed', top: 0, width: '100%', zIndex: 1, height: '4em', backgroundColor: '#111827', boxShadow: '0px 3px 10px #fff'})
        setnavDivStyle({color: '#fff', backgroundColor: '#111827' })
        setLinkStyle({color: '#fff'})
        setDarkModeBtnStyle({backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)', color: '#fff'})
      }
      else{
        setNavStyle({position: 'fixed', top: 0, width: '100%', zIndex: 1, height: '4em', backgroundColor: 'white', boxShadow: '0px 6px 10px #000'})
        setnavDivStyle({color: '#000', backgroundColor: 'white'})
        setLinkStyle({color: '#333'})
        setDarkModeBtnStyle({backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)', color: '#000'})
      }
    }, [darkModeTheme])

    return(
      <div className='main' style={{backgroundImage:`url(${bg})`, hight:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', paddingBottom: '1vh'}}>
        <Router>
          <nav className="navbar navbar-expand-lg justify-content-between" style={navStyle}>
            <div className="container-fluid" style={navDivStyle}>
              <Link to='/'><img src={logo} alt='Logo' /></Link>
              <Link className="navbar-brand" to="/" style={navDivStyle}>News<span>Sense</span></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" style={linkStyle}>Home</Link>
                  </li><li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/About" style={linkStyle}>About</Link>
                  </li>
                </ul>
                <Button variant="primary" onClick={handleShow} className="nav-link me-2" style={linkStyle}>
                  News by Country
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props} style={{backgroundColor: darkModeTheme ? 'rgba(17,24,39,1)' : '#fff'}}>
                  <Offcanvas.Header closeButton style={{color: darkModeTheme ? '#fff' : '#000'}}>
                    <Offcanvas.Title style={{color: darkModeTheme ? '#fff' : 'initial'}}>Select Country</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <ul className="offcanvas-list text-center">
                      <li className="offcanvas-list-item"><Link to='/India' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>India</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Australia' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Australia</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Canada' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Canada</Link></li>
                      <li className="offcanvas-list-item"><Link to='/China' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>China</Link></li>
                      <li className="offcanvas-list-item"><Link to='/France' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>France</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Germany' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Germany</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Japan' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Japan</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Korea' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Korea</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Malaysia' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Malaysia</Link></li>
                      <li className="offcanvas-list-item"><Link to='/NewZealand' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>New Zealand</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Russia' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Russia</Link></li>
                      <li className="offcanvas-list-item"><Link to='/SaudiArabia' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Saudi Arabia</Link></li>
                      <li className="offcanvas-list-item"><Link to='/SouthAfrica' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>South Africa</Link></li>
                      <li className="offcanvas-list-item"><Link to='/Taiwan' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>Taiwan</Link></li>
                      <li className="offcanvas-list-item"><Link to='/UnitedArabEmirates' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>United Arab Emirates</Link></li>
                      <li className="offcanvas-list-item"><Link to='/UnitedKingdom' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>United Kingdom</Link></li>
                      <li className="offcanvas-list-item"><Link to='/UnitedStatesOfAmerica' className='offcanvas-list-item-link' style={{color: darkModeTheme ? '#fff' : 'initial'}}>United States of America</Link></li>
                    </ul>
                  </Offcanvas.Body>
                </Offcanvas>
                <button style={darkModeBtnStlye} onClick={handleDarkMode}>
                {darkModeTheme ? <img src={lightModeBtn} style={{width: '2em', height: '2em', color: '#000'}} alt='Mode Button'/> : <img src={darkModeBtn} style={{width: '2em', height: '2em', color: '#000'}} alt='Mode Button'/>}  
                </button>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path='/About'><About darkModeTheme={darkModeTheme} /></Route>
          </Switch>
          <Switch>
            <Route exact path='/'><News key='General' country='in' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/General'><News key='General' country='in' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Business'><News key='Business' country='in' category='Business' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Entertainment'><News key='Entertainment' country='in' category='Entertainment' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Health'><News key='Health' country='in' category='Health' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Science'><News key='Science' country='in' category='Science' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Sports'><News key='Sports' country='in' category='Sports' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Technology'><News key='Technology' country='in' category='Technology' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
          </Switch>
          <Switch>
            <Route exact path='/India'><News key='India' country='in' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Australia'><News key='Australia' country='au' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Canada'><News key='Canada' country='ca' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/China'><News key='China' country='cn' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/France'><News key='France' country='fr' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Germany'><News key='Germany' country='de' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Japan'><News key='Japan' country='jp' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Korea'><News key='Korea' country='kr' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Malaysia'><News key='Malaysia' country='my' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/NewZealand'><News key='New Zealand' country='nz' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Russia'><News key='Russia' country='ru' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/SaudiArabia'><News key='Saudi Arabia' country='sa' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/SouthAfrica'><News key='South Africa' country='za' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/Taiwan'><News key='Taiwan' country='tw' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/UnitedArabEmirates'><News key='United Arab Emirates' country='ae' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/UnitedKingdom'><News key='United Kingdom' country='gb' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>
            <Route exact path='/UnitedStatesOfAmerica'><News key='United States of America' country='us' category='General' apiKey={apiKey} pageSize={15} darkModeTheme={darkModeTheme} /></Route>            
          </Switch>
          <Footer darkModeTheme={darkModeTheme} />
        </Router>
      </div>
    )
}

export default App;
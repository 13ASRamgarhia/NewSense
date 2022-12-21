import React from 'react'
import '../CSS/Categories.css'
import { Link } from 'react-router-dom'

const Categories = (props) => {
  return (
    <div className='category' style={{position: 'relative', top: '4.25em', width: '100%'}}>
      <div className='scrollmenu text-center categories' style={{color: props.darkModeTheme ? '#fff' : '#000', backgroundColor: props.darkModeTheme ? 'rgb(17, 24, 39)' : '#fff', borderBottomColor: props.darkModeTheme ? '#999' : '#333'}}>
        News Categories
      </div>
      <div className='main-scrollmenu text-center' style={{color: props.darkModeTheme ? '#fff' : '#000', backgroundColor: props.darkModeTheme ? 'rgb(17, 24, 39)' : '#fff'}}>
        <Link to="/General" style={{color: props.darkModeTheme ? '#fff' : '#000'}}>General</Link>
        <Link to="/Business" style={{color: props.darkModeTheme ? '#fff' : '#000'}}>Business</Link>
        <Link to="/Entertainment" style={{color: props.darkModeTheme ? '#fff' : '#000'}}>Entertainment</Link>
        <Link to="/Health" style={{color: props.darkModeTheme ? '#fff' : '#000'}}>Health</Link>
        <Link to="/Science" style={{color: props.darkModeTheme ? '#fff' : '#000'}}>Science</Link>
        <Link to="/Sports" style={{color: props.darkModeTheme ? '#fff' : '#000'}}>Sports</Link>
        <Link to="/Technology" style={{color: props.darkModeTheme ? '#fff' : '#000'}}>Technology</Link>
      </div>
    </div>
  )
}

export default Categories;
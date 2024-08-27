import React from 'react';
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';
import GitHubIcon  from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import './Home.css';
const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
         <h2> Hello Everyone, I am Laxmi</h2>
   <div className='prompt'>
   <p>A Junior Software Developer with a passion for learning and creating. I love to develop, building out new project to learn new skills and refreshing old ones - like maintaining this site!

When I've had enough of screens, I love travelling and photography which pair quite nicely in capturing the places I visit or just a bit creative.</p>
   <LinkedInIcon />
   <GitHubIcon />
   <EmailIcon />
   </div>
 </div>
   <div className='skills'>
  <h1>Skills</h1>
  <ul className='list'>
    <li className='item'>
      <h2>Front-End</h2>
      <span>HTML, CSS, JavaScript, ReactJS</span>
    </li>
    <li className='item'>
      <h2>Back-End</h2>
      <span>NodeJS, PSQL</span>
    </li>
    <li className='item'>
      <h2>Languages</h2>
      <span>JavaScript</span>
        </li>
      </ul>
     </div>
    </div>
    
  );
};

export default Home;
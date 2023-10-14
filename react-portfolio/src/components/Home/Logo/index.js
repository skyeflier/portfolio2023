import LogoTitle from '../../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import './index.scss';
import {useEffect, useState} from 'react'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = ['w', 'e', 'b',  ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> I'm
                <span className={`${letterClass} _12`}>I,</span>
                <span className={`${letterClass} _12`}>'m,</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters  letterClass={letterClass}
                strArray={nameArray} 
                idx={15}/>
                 <AnimatedLetters  letterClass={letterClass}
                strArray={jobArray} 
                idx={22}/>
                <br />
                web developer
                </h1>
                <h2> Frontend Developer / Javascript Expert / YouTuber</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;

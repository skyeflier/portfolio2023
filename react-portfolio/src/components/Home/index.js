import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
const jobArray = [
  'w',
  'e',
  'b',
  ' ',
  'd',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '.',
]

useEffect(() =>{
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])

return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass} StrArray={nameArray} idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass} StrArray={jobArray} idx={22}/>
            </h1>
            <h2>Fullstack Developer </h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo />
    </div>
)
}

export default Home

// // import {useEffect, useState} from 'react';
// // import { Link } from 'react-router-dom';
// // import React from 'react';
// // import LogoTitle from '../../assets/images/logo-s.png';
// // import AnimatedLetters from '../AnimatedLetters';
// // import './index.scss';

// // const Home = () => {
// //     const [letterClass, setLetterClass] = useState('text-animate')
// //     const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
// //     const jobArray = ['w', 'e', 'b',  ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

// //     return (
// //         <div className="container home-page">
// //             <div className="text-zone">
// //                 <h1>
// //                 <img src={LogoTitle} alt="developer" />
// //                 <AnimatedLetters letterClass="text-animate" strArray={nameArray} idx={15} />
// //                 <AnimatedLetters letterClass="text-animate" strArray={jobArray} idx={22} />
// //                 <br />
// //                 web developer
// //                 </h1>
// //                 <h2> Frontend Developer / Javascript Expert / YouTuber</h2>
// //                 <Link to="/contact" className='flat-button'>CONTACT ME</Link>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;




// // import { Link } from 'react-router-dom';
// // import React, { useEffect, useState } from 'react';
// // import LogoTitle from '../../assets/images/logo-s.png';
// // import AnimatedLetters from '../AnimatedLetters';
// // import './index.scss';

// // const Home = () => {
// //     const [letterClass, setLetterClass] = useState('text-animate')
  
// //     const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
// //     const jobArray = ['w', 'e', 'b',  ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

// //     return (
// //         <div className="container home-page">
// //             <div className="text-zone">
// //                 <h1>
// //                 <span className={letterClass}>H</span>
// //                 <span className={`${letterClass} _12`}>i,</span>
// //                 <br /> I'm
// //                 <span className={`${letterClass} _12`}>I,</span>
// //                 <span className={`${letterClass} _12`}>'m,</span>
// //                 <img src={LogoTitle} alt="developer" />
// //                 <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
// //                 <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
// //                 <br />
// //                 web developer
// //                 </h1>
// //                 <h2> Frontend Developer / Javascript Expert / YouTuber</h2>
// //                 <Link to="/contact" className='flat-button'>CONTACT ME</Link>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;

// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
// import './index.scss'

// const Home = () => {
//   const [letterClass, setLetterClass] = useState('text-animate')

//   const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
//   const jobArray = [
//     'w',
//     'e',
//     'b',
//     ' ',
//     'd',
//     'e',
//     'v',
//     'e',
//     'l',
//     'o',
//     'p',
//     'e',
//     'r',
//     '.',
//   ]

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])

//   return (
//     <>
//       <div className="container home-page">
//         <div className="text-zone">
//           <h1>
//             <span className={letterClass}>H</span>
//             <span className={`${letterClass} _12`}>i,</span>
//             <br />
//             <span className={`${letterClass} _13`}>I</span>
//             <span className={`${letterClass} _14`}>'m</span>
//             <img
//               src={LogoTitle}
//               alt="JavaScript Developer Name, Web Developer Name"
//             />
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={nameArray}
//               idx={15}
//             />
//             <br />
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={jobArray}
//               idx={22}
//             />
//           </h1>
//           <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
//           <Link to="/contact" className="flat-button">
//             CONTACT ME
//           </Link>
//         </div>
//         <Logo />
//       </div>

//       <Loader type="pacman" />
//     </>
//   )
// }

// export default Home
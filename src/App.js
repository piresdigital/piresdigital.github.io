import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// pages
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

// icons
import { FiCodepen, FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

const AnimateFromTop = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.9 }}>
      {children}
    </motion.div>
  );
};

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <div className='waves'>
        <div className='wave wave--one'></div>
        <div className='wave wave--two'></div>
        <div className='wave wave--three'></div>
      </div>

      <AnimateFromTop>
        <div className='toggle'>
          <button onClick={() => setMobileNav(!mobileNav)} className='toggle-btn'>
            {mobileNav ? <HiOutlineX /> : <HiMenu />}
          </button>
        </div>
      </AnimateFromTop>

      <div className='app'>
        <div className='container'>
          <main className='main'>
            <div className='sidebar' style={mobileNav ? { left: 0 } : {}}>
              <div className='sidebar-profile'>
                <div className='image'>
                  <img
                    src='https://api.lorem.space/image/face?w=200&h=200'
                    alt='Profile'
                  />
                </div>
                <span className='sidebar-title'>Dhavidy Pires</span>
                <span className='sidebar-subtitle'>Full-stack Developer</span>
                <a
                  className='sidebar-button'
                  target='_blank'
                  rel='noreferrer'
                  href='https://drive.google.com/file/d/1KZ7szgB1mlHoYrGaNTcuaksNPngumYZX/view?usp=sharing'>
                  Download Resume
                </a>
              </div>
              <nav className='sidebar-nav'>
                <ul>
                  <li>
                    <Link
                      className='sidebar-nav-link'
                      onClick={() => {
                        setMobileNav(false);
                      }}
                      to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='sidebar-nav-link'
                      onClick={() => {
                        setMobileNav(false);
                      }}
                      to='/about'>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='sidebar-nav-link'
                      onClick={() => {
                        setMobileNav(false);
                      }}
                      to='/portfolio'>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='sidebar-nav-link'
                      onClick={() => {
                        setMobileNav(false);
                      }}
                      to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className='sidebar-social'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/piresdigital'>
                  <FiGithub />
                </a>
                <a target='_blank' rel='noreferrer' href='https://codepen.io/dpires'>
                  <FiCodepen />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://nz.linkedin.com/in/dhavidyluiz'>
                  <FiLinkedin />
                </a>
              </div>
            </div>
            <div className='content'>
              <AnimatePresence>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </div>
          </main>
        </div>
        <span className='copy'>&copy; 2022 All rights reserved.</span>
      </div>
    </>
  );
}

export default App;

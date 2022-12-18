import WithTransition from '../withTransition';
import { MdOutlineFormatQuote } from 'react-icons/md';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const About = () => {
  return (
    <WithTransition>
      <section className='about'>
        <div className='about-sections'>
          <h1 className='about-section-title'>
            About <span>Me</span>
          </h1>
          <div className='about-section-columns'>
            <div className='about-text'>
              <p>
                Self-taught developer with a background in graphic design. I've always
                been drawn to the intersection of aesthetics and technology, and love
                finding creative ways to solve problems when not in front of a computer
                I'll be out with my wife or taking my pooch for a walk.
              </p>
              <p>
                I'm a true believer in life-long learning in both, my career and personal
                live. I'm always looking for ways to improve my skills and stay up-to-date
                with the new tech. I focus on making a positive impact using my skills and
                expertise, and I'm always open to collaborate and work with others.
              </p>
            </div>
            <div className='about-contact'>
              <ul>
                <li>
                  <span>Email</span>
                  <a href='mailto:'>dhavidy@piresdigital.com</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href='tel:+64210324709'>021 0324709</a>
                </li>
                <li>
                  <span>Website</span>
                  <a href='http://piresdigital.com' rel='noreferrer' target='_blank'>
                    piresdigital.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about-sections'>
          <h1 className='about-section-title'>
            My <span>Skills</span>
          </h1>
          <div className='about-section-columns about-skills'>
            <div className='about-skill'>
              <span>
                <FaReact />
              </span>
              <h3>Front-end</h3>
              <ul>
                <li>HTML & CSS</li>
                <li>React Js</li>
                <li>Redux</li>
                <li>Next JS</li>
                <li>Tailwind</li>
                <li>CSS in JS</li>
              </ul>
            </div>
            <div className='about-skill'>
              <span>
                <FaNodeJs />
              </span>
              <h3>Back-end</h3>
              <ul>
                <li>Node Js</li>
                <li>Express JS</li>
                <li>Django</li>
                <li>Prisma ORM</li>
                <li>MySQL & NoSQL</li>
                <li>APIs</li>
              </ul>
            </div>
            <div className='about-skill'>
              <span>
                <FaPython />
              </span>
              <h3>Other</h3>
              <ul>
                <li>Headless CMS</li>
                <li>SEO & accessibility</li>
                <li>UI Prototyping</li>
                <li>Git</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1
            className='about-section-title'
            style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            Reviews <span>&nbsp;</span>
          </h1>
          <div className='about-section-columns about-reviews'>
            <div className='about-review'>
              <div className='about-review-image'>
                <img src='/fb-logo.jpg' alt='FB Painting' />
              </div>
              <p className='about-review-text'>
                Communication with Dhavidy was fluid and uncomplicated, and he always went
                above and beyond to ensure the project was promptly delivered.
              </p>
              <div className='about-review-from'>
                Fabricio Barboza
                <span>FB Painting</span>
              </div>
              <span className='about-review-quote'>
                <MdOutlineFormatQuote />
              </span>
            </div>
            <div className='about-review'>
              <div className='about-review-image'>
                <img src='/spiffy-logo.jpg' alt='JD Spiffy Cleaners' />
              </div>
              <p className='about-review-text'>
                Dhavidy was a great help in creating our company website, He is very
                professional, friendly and honest. Highly recommend.
              </p>
              <div className='about-review-from'>
                Jucelia
                <span>JDs Spiffy Cleaners</span>
              </div>
              <span className='about-review-quote'>
                <MdOutlineFormatQuote />
              </span>
            </div>
          </div>
        </div>
      </section>
    </WithTransition>
  );
};

export default About;

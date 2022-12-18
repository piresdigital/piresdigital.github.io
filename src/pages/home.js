import TypeIt from 'typeit-react';
import { FiCodepen, FiGithub, FiInstagram } from 'react-icons/fi';
import WithTransition from '../withTransition';

const Home = () => {
  return (
    <WithTransition>
      <div className='intro'>
        <img
          className='intro-profile'
          src='https://api.lorem.space/image/face?w=500&h=500'
          alt='Profile'
        />
        <h2 className='intro-title'>Dhavidy Pires</h2>
        <h3 className='intro-subtitle'>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type('Full-stack')
                .pause(2000)
                .delete()
                .type('React')
                .pause(2000)
                .delete()
                .type('NodeJS')
                .pause(2000)
                .delete()
                .type('NextJs')
                .pause(2000)
                .delete()
                .type('Django')
                .pause(4000)
                .delete();

              return instance;
            }}
            options={{
              speed: 100,
              waitUntilVisible: true,
              loop: true
            }}
          />{' '}
          Developer
        </h3>
        <div className='intro-social'>
          <a target='_blank' rel='noreferrer' href='https://github.com/piresdigital'>
            <FiGithub />
          </a>
          <a target='_blank' rel='noreferrer' href='https://codepen.io/dpires'>
            <FiCodepen />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/dhavidyluiz/'>
            <FiInstagram />
          </a>
        </div>
      </div>
    </WithTransition>
  );
};

export default Home;

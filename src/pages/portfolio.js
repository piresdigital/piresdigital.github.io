import WithTransition from '../withTransition';
import { portfolioData } from '../portfolio-data';

const Portfolio = () => {
  return (
    <WithTransition>
      <div className='portfolio-section'>
        <h1 className='portfolio-section-title' style={{ marginBottom: '2rem' }}>
          Portfolio <span>&nbsp;</span>
        </h1>
        <div class='portfolio-grid'>
          {portfolioData.map((item, index) => {
            return (
              <div key={'portfolio_' + index} class='portfolio-grid-item'>
                <a rel='noreferrer' target='_blank' href={item.link}>
                  <img src={item.picture} alt={item.title} />
                  {item.title}
                  <span> [{item.job}]</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </WithTransition>
  );
};

export default Portfolio;

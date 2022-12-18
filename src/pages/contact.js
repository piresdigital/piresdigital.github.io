import WithTransition from '../withTransition';

// icons
import { HiOutlineMail, HiOutlinePhone, HiOutlineGlobeAlt } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <WithTransition>
      <div className='contact-section'>
        <h1 className='contact-section-title'>
          Contact <span>&nbsp;</span>
        </h1>
        <div className='contact-details'>
          <div className='contact-details-card'>
            <span className='contact-details-icon'>
              <HiOutlineMail />
            </span>
            <span className='contact-details-title'>Email</span>
            <span className='contact-details-text'>
              <a href='mailto:dhavidy@piresdigital.com'>dhavidy@piresdigital.com</a>
            </span>
          </div>
          <div className='contact-details-card'>
            <span className='contact-details-icon'>
              <HiOutlinePhone />
            </span>
            <span className='contact-details-title'>Phone</span>
            <span className='contact-details-text'>
              <a href='tel:+64210324709'>021 032 4709</a>
            </span>
          </div>
          <div className='contact-details-card'>
            <span className='contact-details-icon'>
              <HiOutlineGlobeAlt />
            </span>
            <span className='contact-details-title'>Website</span>
            <span className='contact-details-text'>
              <a target='_blank' rel='noreferrer' href='http://piresdigital.com'>
                piresdidital.com
              </a>
            </span>
          </div>
        </div>
        <div className='contact-freelance-card'>
          <span className='contact-freelance-icon'>
            <MdWorkOutline />
          </span>
          <h4>Available for freelance work</h4>
        </div>
        <div className='contact-socials'>
          <span>
            <a target='_blank' rel='noreferrer' href='https://google.com/'>
              <FaFacebookF />
            </a>
          </span>
          <span>
            <a target='_blank' rel='noreferrer' href='https://google.com/'>
              <FaInstagram />
            </a>
          </span>
          <span>
            <a target='_blank' rel='noreferrer' href='https://google.com/'>
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </WithTransition>
  );
};

export default Contact;

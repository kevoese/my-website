import React from 'react';
import { getYear } from '../../utils';
import './Footer.scss';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <div className="footer flex-center">
    <div className="social-links-wrap flex-center">
      <SocialLinks
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572155962/fbIcon_i1ixml.svg"
        socialLink="https://www.facebook.com/kevo.ese"
      />
      <SocialLinks
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572155862/twitterIcon_gujcxw.svg"
        socialLink="https://twitter.com/itz_calvin"
      />
      <SocialLinks
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572155862/githubIcon_vpzapj.svg"
        socialLink="https://github.com/kevoese"
      />
      <SocialLinks
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572155862/linkedinIcon_l5hom6.svg"
        socialLink="https://www.linkedin.com/in/kelvin-esegbona-983b97110/"
      />
    </div>
    <p>{`Copyright ${getYear()}`}</p>
  </div>
);

export default Footer;

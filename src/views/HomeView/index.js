import React from 'react';
import radium from 'radium';
import styles from './styles';
class HomeView extends React.Component {
  render() {
    return (
      <div style={styles.base}>

        <div>
          <div style={styles.banner}>
            <img
              src="/static/logo.png"
              style={styles.bannerLogo}
            />
          </div>
          <nav style={styles.navbar}>
            <img
              src="/static/logo-2.png"
              style={styles.navbarLogo}
            />
            <span style={styles.subNavbarItem}>
              <i className="fa fa-user" />&nbsp;
              About
            </span>
            <span style={styles.subNavbarItem}>
              <i className="fa fa-briefcase" />&nbsp;
              Services
            </span>
            <span style={styles.subNavbarItem}>
              <i className="fa fa-send" />&nbsp;
              Contact
            </span>
          </nav>
          <div style={styles.shoutout}>
            <span style={{ fontWeight: 300, maxWidth: 600, display: 'block', margin: '0 auto' }}>
              <i className="fa fa-quote-left" style={{ opacity: 0.5, margin: 'auto 10px auto auto' }} />
              The hottest DJ &amp; MC service in the Pacific Northwest.
              <i className="fa fa-quote-right" style={{ opacity: 0.5, margin: 'auto auto auto 10px' }} />
            </span>
          </div>
          <div style={styles.bioWrapper}>
            <div style={{ flex: 1, padding: 40, boxSizing: 'border-box', display: 'flex', flexFlow: 'column nowrap', '@media (max-width: 600px)': { order:10, padding: 20 }}}>
              <h2 style={styles.bioTitle}>
                <i className="fa fa-music" />&nbsp;
                Master of Ceremony
              </h2>
              <span style={styles.bioTitleSpan} />
              <p style={styles.bioText}>As a professional DJ and MC with over 7 years experience, the biggest lesson I've learned, when it comes to work the key is to have FUN! Everybody needs to break the monotony every once in a while and spice up their lives. With a customer-first mentality and a desire to exceed expectation, Flair Entertainment is ready to do just that for you and more. Does your company Christmas party need some holiday cheer? No problem. DJ cancel on you last minute for a school dance? I've got you covered. Are you a bride and groom needing that charismatic host for your wedding? That's my specialty.</p>
              <p style={Object.assign({}, styles.bioText, { margin: '10px 0 auto' })}>Life is too short to be dull — so let's add some Flair to it. You've got the date, I've got the vision and expertise, let me help make your event unforgettable.</p>
            </div>
            <div style={{ flex: 1, display: 'flex', '@media (max-width: 600px)': { order: 1, flex: '0 0 auto', height: '60vh', minHeight: 250 }}}>
              <div style={styles.bioImage} />
            </div>
          </div>
          <div style={styles.servicesWrapper}>
            <h2 style={styles.servicesTitle}>Available Services</h2>
            <div
              style={{
                display: 'flex',
                flexFlow: 'row wrap',
              }}
            >

            </div>
          </div>
        </div>

        <footer>

        </footer>
      </div>
    );
  }
}
export default radium(HomeView);

const services = [
  {
    name: '',
    description: '',
    price: 0,
  },
  {
    name: '',
    description: '',
    price: 0,
  },
  {
    name: '',
    description: '',
    price: 0,
  },
  {
    name: '',
    description: '',
    price: 0,
  },
  {
    name: '',
    description: '',
    price: 0,
  }
];

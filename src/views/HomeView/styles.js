export default {
  base: {},
  banner: {
    minHeight: 400,
    height: '85vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to top, #eee, #fff)'
  },
  bannerLogo: {
    flex: '0 0 auto',
    width: '70%',
    maxWidth: 600,
    padding: 20,
  },
  navbar: {
    position: 'sticky',
    position: '-webkit-sticky',
    top: 0,
    background: '#fff',
    padding: 15,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    borderBottom: '1px solid #eee',
    borderTop: '1px solid #eee',
  },
  navbarLogo: {
    margin: 'auto auto auto 0',
    maxHeight: 30,
    display: 'none',
  },
  navbarItem: {
    margin: 'auto 15px',
    color: '#444',
    fontSize: '0.9em',
    fontWeight: 700,
    letterSpacing: 2,
  },
  subNavbarItem: {
    margin: 'auto 10px',
    color: '#888',
    fontSize: '0.85em',
    fontWeight: 300,
    letterSpacing: 1,
  },
  shoutout: {
    background: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '100px 20px',
    fontWeight: 300,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  bioWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    minHeight: '90vh',
    background: '#c7c8c4',
    '@media (max-width:600px)': {
      flexFlow: 'column nowrap',
    }
  },
  bioTitle: {
    textTransform: 'uppercase',
    fontWeight: 700,
    margin: 'auto 0 0',
    padding: 0,
  },
  bioTitleSpan: {
    flex: '0 0 auto',
    margin: '20px auto 20px 0',
    height: 6,
    width: 100,
    background: '#000',
  },
  bioText: {
    lineHeight: 2,
    fontWeight: 300,
    margin: '10px 0',
    fontSize: '1.2em',
    '@media (max-width:1200px)': {
      fontSize: '1em',
     },
    '@media (max-width:600px)': {
      fontSize: '0.9em',
     }
  },
  bioImage: {
    background: 'url(/static/caner.png) no-repeat center top scroll',
    backgroundSize: 'cover',
    flex: 1,
    width: '50vw',
    '@media (max-width: 600px)': {
      width: '100%',
      flex: '0 0 auto',
    },
  },
  servicesWrapper: {
    background: '#000',
    minHeight: '80vh',
  },
  servicesTitle: {
    color: '#fff',
    padding: '100px 0 40px',
    textAlign: 'center',
    letterSpacing: 2,
    fontWeight: 300,
    fontSize: '1.2em',
    textTransform: 'uppercase',
  }
};

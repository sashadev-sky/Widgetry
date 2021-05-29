import { whiteColor } from '../colors';


export const weatherStyles = {
  spacing: {
    margin: '0 auto',
    maxWidth: '335px'
  },
  buttonBackdrop: {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  button: {
    backdropFilter: 'brightness(0.5)',
    borderRadius: 3,
    border: 0,
    color: whiteColor,
    height: 77,
    letterSpacing: '1.2px',
    fontSize: 16,
    width: '58%',
    '&:hover': {
      '& $buttonBackdrop': {
        opacity: 1.0
      }
    }
  },
  loader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 300
  },
  progress: {
    margin: 'auto'
  },
  root: {
    color: whiteColor,
    fontSize: 15,
    minHeight: '200px',
    minWidth: '300px'
  },
  imgCard: {
    borderRadius: 'calc(.25rem - 1px)',
    width: '100%'
  },
  imgCardBg: {
    borderRadius: 'calc(.25rem - 1px)',
    filter: 'brightness(0.6) blur(1.6px)',
    width: '100%'
  },
  imgCardOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '1.25rem'
  },
  cardTitle: {
    display: 'inline'
  },
  cardBody: {
    fontWeight: 500,
    textShadow: 'black 0px 0px 10px',
    padding: '0.9375rem 1.875rem',
    flex: '1 1 auto',
    WebkitBoxFlex: '1',
    marginBottom: -10
  },
  cardSection: {
    marginTop: 10,
    '@media (max-width:700px)': {
      fontSize: 13.5
    },
    '@media (max-width:599px)': {
      fontSize: 15
    }
  },
  cardMiddleSection: {
    fontSize: 20,
    marginTop: 10,
    '@media (max-width:700px)': {
      fontSize: 15
    },
    '@media (max-width:599px)': {
      fontSize: 20
    }
  },
  locIcon: {
    margin: '0px 5px',
    width: 30,
    '@media (max-width:600px)': {
      width: 26
    }
  },
  message: {
    marginTop: 100,
    marginBottom: 100,
    width: 350,
    alignText: 'center',
    '@media (max-width:720px)': {
      marginTop: 50,
      marginBottom: 50
    }
  },
  messageText: {
    marginLeft: 60
  }
};

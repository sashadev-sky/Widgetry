import { whiteColor } from '../colors';


export const noteTabStyles = {
  textCenter: {
    textAlign: 'center'
  },
  spacing: {
    maxWidth:  '450px',
    minWidth: '100px'
  },
  cardTitle: {
    color: whiteColor,
    float: 'left',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '24px',
    padding: '10px 10px 10px 0'
  },
  cardTitleRTL: {
    float: 'right',
    padding: '10px 0px 10px 10px !important'
  },
  displayNone: {
    display: 'none'
  },
  headerTabsRoot: {
    display: 'inline-flex',
    justifyContent: 'space-evenly'
  },
  tabsRoot: {
    display: 'inline-flex'
  },
  tabSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: 'background-color .4s'
  },
  tabRoot: {
    borderRadius: '3px',
    display: 'block',
    height: 'auto',
    minHeight: 'unset',
    minWidth: '70px',
    opacity: '1',
    padding: '10px 15px',
    width: 'auto'
  },
  customTabLabelContainer: {
    color: 'inherit',
    padding: '1px !important'
  },
  customTabLabel: {
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '24px'
  }
};

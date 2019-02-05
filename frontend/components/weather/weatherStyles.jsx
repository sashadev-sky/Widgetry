const weatherStyles = {
  spacing: {
    margin: "30px 15px",
    marginTop: "0",
    maxWidth: "350px"
  },
  buttonBackdrop: {
    width: "100%",
    background: "black",
    opacity: "0.4",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0"
  },
  button: {
    background: "rgb(255, 222, 222)",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 77,
    padding: "0 30px",
    letterSpacing: "1.2px",
    fontSize: "16px",
    width: "58%",
    "&:hover": {
      "& $buttonBackdrop": {
        opacity: 1.0
      }
    }
  },
  loader: {
    marginLeft: "20px",
    marginTop: "20px",
    margin: "auto",
    width: "450px"
  },
  root: {
    color: "white",
    fontSize: "15px"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)",
    filter: "blur(2px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  },
  cardTitle: {
    display: "inline",
    color: "white"
  },
  cardBody: {
    fontSize: "20px",
    fontWeight: "500",
    textShadow: "black 0px 0px 10px",
    marginTop: "10px"
  },
  cardSection: {
    marginTop: "10px"
  },
  locIcon: {
    margin: "0px 5px",
    width: "30px",
    height: "32px",
    ["@media (max-width:600px)"]: {
      width: "26px",
      height: "26px"
    }
  }
};

export default weatherStyles;
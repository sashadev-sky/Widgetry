export const weatherStyles = {
  spacing: {
    // margin: "30px 15px",
    marginTop: 0,
    maxWidth: "335px"
  },
  buttonBackdrop: {
    width: "100%",
    background: "black",
    opacity: "0.4",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  button: {
    background: "rgb(255, 222, 222)",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 77,
    letterSpacing: "1.2px",
    fontSize: 16,
    width: "58%",
    "&:hover": {
      "& $buttonBackdrop": {
        opacity: 1.0
      }
    }
  },
  loader: {
    display: "flex",
    width: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  progress: {
    margin: "auto"
  },
  root: {
    color: "white",
    fontSize: 15,
    minWidth: "300px",
    minHeight: "200px"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)",
    filter: "blur(2px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: "1.25rem"
  },
  cardTitle: {
    display: "inline",
  },
  cardBody: {
    fontWeight: 500,
    textShadow: "black 0px 0px 10px",
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    marginBottom: -10
  },
  cardSection: {
    marginTop: 10,
    ["@media (max-width:700px)"]: {
      // marginTop: 5,
      fontSize: 13.5
    },
    ["@media (max-width:599px)"]: {
      // marginTop: 5,
      fontSize: 15
    }
  },
  cardMiddleSection: {
    fontSize: 20,
    marginTop: 10,
    ["@media (max-width:700px)"]: {
      // marginTop: 5,
      fontSize: 15
    },
    ["@media (max-width:599px)"]: {
      // marginTop: 5,
      fontSize: 20
    }
  },
  locIcon: {
    margin: "0px 5px",
    width: 30,
    ["@media (max-width:600px)"]: {
      width: 26,
    }
  },
  message: {
    marginTop: 100,
    marginBottom: 100,
    width: 350,
    alignText: "center",
    ["@media (max-width:720px)"]: {
      marginTop: 50,
      marginBottom: 50
    }
  },
  messageText: {
    marginLeft: 60
  }
};

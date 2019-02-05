const weatherStyles = {
  spacing: {
    margin: "30px 15px",
    marginTop: "0",
    maxWidth: "350px"
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginTop: "10px",
    marginLeft: "-10px"
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
  },
};

export default weatherStyles;
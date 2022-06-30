const Header = ({ text, bgColor, textColor, fontSize }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: fontSize,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
  fontSize: "1.8rem",
};

export default Header;

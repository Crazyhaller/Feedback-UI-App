function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor
    }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'black',
    textColor: 'red'

}

export default Header
import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor, padding }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        padding: padding,
    };

    return (
        <header className="container" style={headerStyles}>
            <h2>{text}</h2>
        </header>
    );
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
    padding: '20px',
};

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    padding: PropTypes.string,
};

export default Header;

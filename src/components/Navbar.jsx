import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ onNewPost }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Blog App</a>
                <button 
                    className="btn btn-primary"
                    onClick={onNewPost}
                >
                    New Post
                </button>
            </div>
        </nav>
    );
}

// Define prop types
Navbar.propTypes = {
    onNewPost: PropTypes.func.isRequired
};

export default Navbar;

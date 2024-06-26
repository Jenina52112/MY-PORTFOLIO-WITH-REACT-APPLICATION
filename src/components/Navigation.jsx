import React from 'react';

function Navigation(){
    return(
        <nav>
            <ul>
                <a href='#aboutMe'><li>About Me</li></a>
                <a href='#portfolio'><li>Portfolio</li></a>
                <a href='#contact'><li>Contact</li></a>
                <a href='#resume'><li>Resume</li></a>
            </ul>
        </nav>
    );
}

export default Navigation;
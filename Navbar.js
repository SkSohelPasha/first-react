import React from'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <butan className="navbar-toggler" type="butan" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </butan>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-aua my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                        <li className="nav-item">
                            <a className="nav-a active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-a active" aria-current="page" href="/about">{props.aboutText}</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-a active" href="/" aria-expanded="true">
                                Contact us
                            </a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:'Set title here',
    aboutText:'about text here'
}
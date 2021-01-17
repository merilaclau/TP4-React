import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'
import './Menu.scss';

const Menu = () => {
    return (
        <section className="header-container">
            <ul className="header-menu">
                <li><button className="header-menu-button"><FontAwesomeIcon icon={faHome} /></button></li>
                <li><button className="header-menu-button"><FontAwesomeIcon icon={faVideo} /></button></li>
                <li><button className="header-menu-button"><FontAwesomeIcon icon={faTv} /></button></li>
            </ul>
        </section>
    )
}
export default Menu;
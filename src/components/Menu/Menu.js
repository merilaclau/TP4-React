import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'
import './Menu.scss';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <section className="header-container">
            <ul className="header-menu">
                <Link className="header-menu-button" to={{ pathname: `/` }}><FontAwesomeIcon icon={faHome} /></Link>
                <Link className="header-menu-button" to={{ pathname: `/movie` }}><FontAwesomeIcon icon={faVideo} /></Link>
                <Link className="header-menu-button" to={{ pathname: `/tv` }}><FontAwesomeIcon icon={faTv} /></Link>
            </ul>
        </section>
    )
}
export default Menu;
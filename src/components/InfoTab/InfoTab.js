import React from 'react'
import { Link } from "react-router-dom";
import './InfoTab.scss';

const InfoTab = () => {
    return (
        <div className="MovieNav">
            <div className="MovieNav-Bar">
                <Link className="MovieNav-Detail"/* to={`/${media}/${id}/info`} */ activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }} >
                    INFO
            </Link>
                <Link className="MovieNav-Detail" /* to={`/${media}/${id}/reparto`} */ activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }}>
                    REPARTO
            </Link>
                <Link className="MovieNav-Detail"/* to={`/${media}/${id}/videos`} */ activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }}>
                    VIDEOS
            </Link>
                <Link className="MovieNav-Detail"/* to={`/${media}/${id}/videos`} */ activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }}>
                    SIMILARES
            </Link>
            </div>
        </div>
    )
}

export default InfoTab;
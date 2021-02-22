import React from 'react'
import { Link, useParams } from "react-router-dom";
import './InfoTab.scss';

const InfoTab = () => {
    const { mediatype, id } = useParams()
    return (
        <div className="MovieNav">
            <div className="MovieNav-Bar">
                <Link className="MovieNav-Detail" to={`/${mediatype}/${id}/info`} activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }} >
                    INFO
            </Link>
                <Link className="MovieNav-Detail" to={`/${mediatype}/${id}/cast`} activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }}>
                    REPARTO
            </Link>
                {mediatype == "movie" && (
                    <Link className="MovieNav-Detail" to={`/${mediatype}/${id}/videos`} activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }}>
                        VIDEOS
                    </Link>)}
                {mediatype == "tv" && (
                    <Link className="MovieNav-Detail" to={`/${mediatype}/${id}/seasons/1`} activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }}>
                        EPISODIOS </Link>)}


                <Link className="MovieNav-Detail" to={`/${mediatype}/${id}/similares`} activeStyle={{ borderBottom: "2px solid #fff", paddingBottom: "1rem" }}>
                    SIMILARES
            </Link>
            </div>
        </div>
    )
}

export default InfoTab;
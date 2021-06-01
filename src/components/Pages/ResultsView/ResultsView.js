import React from 'react';
import { useEffect, useState } from 'react';
import './ResultsView.scss';
import CardListSearch from '../../CardListSearch/CardListSearch';
import { getMoviesSeries } from '../../../services/services';


const ResultsView = ({ data }) => {
    console.log("AbajoEmpieza");
    console.log(data);
    return (
        <main className="main-container">
            <CardListSearch title={'Resultado de busqueda'} data={data}>
            </CardListSearch>

        </main>
    )
}

export default ResultsView;

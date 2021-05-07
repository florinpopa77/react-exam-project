import React from 'react';

function PeopleItem(props){
    const {nume, prenume, meserie, salariu, dataAngajare} = props;

    return(
        <div className="mx-3 mb-3">
            <h3>{nume + ' ' + prenume}</h3>
            <p>Meserie: {meserie}</p>
            <p>Salariu: {salariu}</p>
            <p>Data angajare: {dataAngajare}</p>
        </div>
    );
}

export default PeopleItem;
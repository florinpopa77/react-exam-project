import React from 'react';
import PeopleItem from './PeopleItem';

function PeopleList(props){
    const {people} = props;

    return(
        <div className= "row mx-4">
            { people.map((person, index) => {
                return <PeopleItem
                    {...person}
                    key={index}
                />
            })}
        </div>
    );
}

export default PeopleList;
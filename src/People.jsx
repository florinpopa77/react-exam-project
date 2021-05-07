import React, { Component } from 'react';
import PeopleList from './PeopleList';
import { connect } from 'react-redux';

function People(props){
        return (
            <div className="container">
                <h2>Lista angajati</h2>
                <div className="d-flex flex-row">
                    <div className="col-2">
                        <h5>Sortare dupa:</h5>
                    </div>
                    <PeopleList people={props.employees}/>
                </div>
            </div>
        );
}


function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(People);
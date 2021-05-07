import React, { Component } from 'react';
import PeopleList from './PeopleList';
import { connect } from 'react-redux';

class People extends Component{

    constructor(props) {
        super(props);
        this.state = {
            sorted: 0,
            employees: []
        };
      }

      sortBySalary(){
          let sortedAfterSalary = [...this.props.employees];
          sortedAfterSalary.sort((emp1,emp2) => {
              return emp1.salariu - emp2.salariu;
          })

          this.setState({
            sorted: 1,
            employees: sortedAfterSalary
        });  
      }

      sortByName(){
        let sortedAfterName = [...this.props.employees];
        sortedAfterName.sort((emp1,emp2) => {
            return emp1.nume.localeCompare(emp2.nume);
         })

        this.setState({
          sorted: 1,
          employees: sortedAfterName
        });  
    }

    filterByPrice(sign, value1,value2=0){
        let filteredList = [];
        switch(sign){
            case 'lower':
                filteredList = this.props.employees.filter(emp => emp.salariu < value1);
                break;
            case 'between':
                filteredList = this.props.employees.filter(emp => emp.salariu >= value1 && emp.salariu <= value2);
                break;
            default:
                filteredList = this.props.employees.filter(emp => emp.salariu > value1);
        }

        this.setState({
            sorted: 1,
            employees: filteredList
          }); 
    }

    resetFilter(){
        this.setState({
            sorted: 0
          });
    }

    render(){
        return (
                <div className="container">
                    <h2 className="my-4">Lista angajati</h2>
                    <div className="d-flex flex-row">
                        <div className="col-3 pl-0">
                            <h6>Sortare dupa:</h6>
                            <div className="btn-group btn-group-sm mb-5" role="group" aria-label="Basic example">
                                <button type="button" 
                                        className="btn btn-outline-primary" 
                                        onClick={()=>this.sortByName()}>Nume</button>
                                <button type="button" 
                                        className="btn btn-outline-primary" 
                                        onClick={()=>this.sortBySalary()}>Salariu</button>
                            </div>
                            <h6>Filtare dupa pret:</h6>
                            <div className="btn-group btn-group-sm mb-5" role="group" aria-label="Basic example">
                                <button type="button" 
                                        className="btn btn-outline-primary" 
                                        onClick={()=>this.filterByPrice('lower',2500)}>&#60;2500</button>
                                <button type="button" 
                                        className="btn btn-outline-primary" 
                                        onClick={()=>this.filterByPrice('between',2500,4000)}>2500-4000</button>
                                <button type="button" 
                                        className="btn btn-outline-primary" 
                                        onClick={()=>this.filterByPrice('gr',4000)}>&#62;4000</button>
                            </div>
                            <button type="button" className="btn btn-danger"
                                    onClick={()=>this.resetFilter()}>Reset filter</button>
                        </div>
                        <PeopleList people={this.state.sorted=== 0 ? this.props.employees : this.state.employees}/>
                    </div>
                </div>
                );
        }
}


function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(People);
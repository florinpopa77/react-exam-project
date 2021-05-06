import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { addEmpl } from './redux/people';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nume: '',
            prenume: '',
            meserie: '',
            salariu: 0,
            dataAngajare: 0
        };

        this.setState({dataAngajare: this.setDate()});
    }

    updateNume(event) {
        this.setState({nume: event.target.value});
    }

    updatePrenume(event) {
        this.setState({prenume: event.target.value});
    }

    updateMeserie(event) {
        this.setState({meserie: event.target.value});
    }

    updateSalariu(event) {
        this.setState({salariu: event.target.value});
    }

    updateDataAngajare(event) {
        this.setState({dataAngajare: event.target.value});
    }

    submitAddForm(event, nume, prenume, meserie, salariu, dataAngajare) {
        event.preventDefault();
    

        this.props.addEmpl({empl:               {
            nume,
            prenume,
            meserie,
            salariu,
            dataAngajare
          }
        });

        event.target.reset();
    }

    setDate(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    componentDidMount(){
        this.setState({dataAngajare: this.setDate()});
    }


    render() {
        const {nume, prenume, meserie, salariu, dataAngajare} = this.state;
        return (
            <form
                className="empl-add-form container"
                onSubmit={(event) => this.submitAddForm(event, nume, prenume, meserie, salariu, dataAngajare)}
            >
                <h2>Adauga angajat:</h2>
                <div className="form-group row">
                    <label htmlFor="nume" className="col-sm-1 col-form-label">Nume</label>
                    <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               onChange={(event) => this.updateNume(event)} 
                               id="nume" 
                               placeholder="Nume"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="prenume" className="col-sm-1 col-form-label">Prenume</label>
                    <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               onChange={(event) => this.updatePrenume(event)} 
                               id="prenume" 
                               placeholder="Prenume"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="meserie" className="col-sm-1 col-form-label">Meserie</label>
                    <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               onChange={(event) => this.updateMeserie(event)} 
                               id="meserie" 
                               placeholder="Meserie"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="salariu" className="col-sm-1 col-form-label">Salariu</label>
                    <div className="col-sm-10">
                        <input type="number" 
                               className="form-control" 
                               onChange={(event) => this.updateSalariu(event)} 
                               id="salariu" 
                               placeholder="Salariu"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dataAngajare" className="col-sm-1 col-form-label">Data angajare</label>
                    <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               onChange={(event) => this.updateDataAngajare(event)} 
                               value = {this.state.dataAngajare}
                               id="dataAngajare" 
                               placeholder="Data Angajare"
                        />
                    </div>
                </div>


                <input className="btn btn-primary" type="submit" value="Introdu angajat"/>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        addEmpl: (payload) => dispatch(addEmpl(payload))
    }
}

export default connect(null, mapDispatchToProps)(Home);
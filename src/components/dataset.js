import React, { Component } from 'react';

class DatasetComp extends Component {
    state = {value: ''}

    handleChange = (event) =>{
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.onSearch(this.state.value)
    }

    render() {
        return (
            <form className="justify-content-center">
                <div className="text-center" >
                    <input className="form-control mr-sm-2" placeholder="Select a dataset" aria-label="Search" onChange={this.handleChange}/>
                    </div>
                <div className="text-center" >
                    <label className="btn btn-outline-success mt-2" onClick={this.handleSubmit}>Select a dataset</label>
                </div>
            </form>
        );
    }
}

export default DatasetComp;
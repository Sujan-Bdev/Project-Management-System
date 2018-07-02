import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Input from "@material-ui/core/es/Input/Input";
import RButton from "../../Header/Navbar/RButton";
import green from "@material-ui/core/es/colors/green";
import TextField from '@material-ui/core/TextField';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    send = (data) => {
        fetch('/send',{
            body: JSON.stringify({name: data}),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        })
            .then(res => res.json())
            .then(res => console.log(res))
    };

    handleChange = (event) => {
        this.setState({
            data: event.target.value,
        })
    };

    handleSubmit = (event) => {
        const send = this.state.data;
        this.send(send);
        console.log(send);
        this.setState({
            data:''
        });
        event.preventDefault();
    };

    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type={"text"} onChange={this.handleChange} value={this.state.data}/>
                <button type={"submit"}>
                    Submit
                </button>
            </form>
        </div>
      );
    }

}

export default Form;
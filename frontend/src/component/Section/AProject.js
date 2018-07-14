import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import TextField from "@material-ui/core/es/TextField/TextField";
import RButton from "../../Header/Navbar/RButton";
import Modal from "@material-ui/core/es/Modal/Modal";
import Paper from "@material-ui/core/es/Paper/Paper";
import cyan from "@material-ui/core/es/colors/cyan";
import Typography from "@material-ui/core/es/Typography/Typography";
import green from "@material-ui/core/es/colors/green";
import red from "@material-ui/core/es/colors/red";
import RTextfield from "../../container/RTextField";
import lime from "@material-ui/core/es/colors/lime";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

class AProject extends Component {
  state = {
    project: [],
    name: "",
      year:"",
    isOpen: false
  };
  handleOpen = () => {
    this.setState({
      isOpen: true
    });
  };
  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    let data = {
      name: this.state.name,
        year: this.state.year
    };
    console.log(data);
    fetch("/newSupervisor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(err => console.log(err));
    this.setState({
      name: "",
        year:"",
      isOpen: false
    });
    event.preventDefault();
    window.location.reload();
  };

  render() {
    return (
      <Fragment>
        <RButton
          color={lime}
          buttonText={"Add Project"}
          onClick={this.handleOpen}
        />
        <Modal
          open={this.state.isOpen}
          onClose={this.handleClose}
          style={{
            paddingTop: 100,
            paddingLeft: 400,
            paddingRight: 400,
            paddingBottom: 100
          }}
        >
          <Paper elevation={2}>
            <form onSubmit={this.handleSubmit}>
              <Typography variant={"headline"} style={{ textAlign: "center" }}>
                Fill the Project Form:
              </Typography>
              <InputLabel>Name:</InputLabel>
              <RTextfield
                  style={{width: 250}}
                value={this.state.name}
                name={"name"}
                required={true}
                autoFocus={true}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <InputLabel>Completion Year:</InputLabel>
              <RTextfield
                value={this.state.year}
                name={"roll"}
                required={true}
                focus={true}
                onChange={this.handleChange}
                helperText="e.g. 2074"
              />
              <br/>
              <br/>

              <RButton
                color={green}
                buttonText={"Submit"}
                onClick={this.handleSubmit}
                style={{marginLeft:20}}
              />
              <RButton
                color={red}
                buttonText={"Cancel"}
                onClick={this.handleClose}
                style={{marginLeft:300}}
              />
            </form>
          </Paper>
        </Modal>
      </Fragment>
    );
  }
}

export default AProject;
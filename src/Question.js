import React from "react";
import axios from "axios";

export class Question extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        c_sentence: '',
        h_sentence: '',
        i_sentence: '',
        m_sentence: '',
        e_sentence: ''
      }
    }
  
    handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"https://sudoer.dev/api/v1/response", 
        data:  this.state
      }).then((response)=>{
          alert("Your answers have been submitted. Thank you!"); 
          this.resetForm();
        console.log(response)
      })
    }
  
    resetForm(){
      this.setState({c_sentence: "", h_sentence: "", i_sentence: "", m_sentence: "", e_sentence: ""})
    }  

    render() {
        return (
            <div className="Question">
                <form id="sentimetre" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="c_sentence">Do you feel supported by the people around you?</label>
                        <input type="text" className="form-control" id="c_sentence" value={this.state.c_sentence} onChange={this.onCChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="h_sentence">Are you motivated to change your life?</label>
                        <input type="text" className="form-control" id="h_sentence" value={this.state.h_sentence} onChange={this.onHChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="i_sentence">Do you feel judged for being yourself?</label>
                        <input type="text" className="form-control" id="i_sentence" value={this.state.i_sentence} onChange={this.onIChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="m_sentence">Do you have goals that you strive towards?</label>
                        <input type="text" className="form-control" id="m_sentence" value={this.state.m_sentence} onChange={this.onMChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="e_sentence">Do you feel in control of your life?</label>
                        <input type="text" className="form-control" id="e_sentence" value={this.state.e_sentence} onChange={this.onEChange.bind(this)} />
                    </div>
                    <br/>
                    <button type="submit" value="Submit">Submit</button>
                    </form>
            </div>
        );
    }; 


    onCChange(event) {
        this.setState({c_sentence: event.target.value})
    }

    onHChange(event) {
        this.setState({h_sentence: event.target.value})
    }

    onIChange(event) {
        this.setState({i_sentence: event.target.value})
    }

    onMChange(event) {
        this.setState({m_sentence: event.target.value})
    }

    onEChange(event) {
        this.setState({e_sentence: event.target.value})
    }
}

export default Question;
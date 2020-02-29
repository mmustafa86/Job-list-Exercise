import React, { Component } from 'react';
import "./job.css"
import axios from "axios"
class job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let  jobId=this.props.match.params.id
    axios.get( "/api/jobs/" + jobId )
    .then(({ data })=> this.setState(data))

  }
  render() {
    console.log(this.state.title) 
    return (
<div>
  <h1 className="Job">{this.state.title}</h1>
  <a href={this.state.company_url} ><img src={this.state.company_logo} width="100"/></a>
  <div dangerouslySetInnerHTML={{__html: this.state.how_to_apply}}></div>

  <span dangerouslySetInnerHTML={{__html: this.state.description}}></span>
</div>
    );
  }
}

export default job;
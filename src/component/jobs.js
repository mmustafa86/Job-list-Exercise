import React, { Component } from 'react';
import JobsListItem from './JobsListItem'
// import '../App.css'
import job from './job'
import '../component/Jobs.css'
import axios from "axios"
import { Switch, Route ,BrowserRouter} from 'react-router-dom'
export default class jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

  }

  componentDidMount() {
    console.log('Did component mount ?');
    axios.get('/api/jobs')
      .then(({ data }) => {
        // console.log(data)
        this.setState({ jobs: data })
      })

  }

  render() {
    console.log(this.state.jobs)
    const jobsJSX = this.state.jobs.map((job, index) => {

      return <JobsListItem key={index} {...job} />
    })

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Jobs In Atlanta</h1>
            <p className="App-subtitle">Click to explore  jobs</p>
          </header>
          <div className="Jobs">
       
          <Switch>
          <Route exact  path="/jobs"  render={ () => jobsJSX }/>
          <Route path="/jobs/:id" component={job}/>

          </Switch>
          </div>
        </div>
      </div>
    );
  }
}


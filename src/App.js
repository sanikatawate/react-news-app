import React, { Component } from 'react'
import './App.css';
import Navbar from './components/NewsNavBar';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div className="App">
          <Router>
            <Navbar/>
            <LoadingBar color='#0d6efd' height={3} progress={this.state.progress}/>
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} key="home" country="" category="general"/>}/>
              <Route exact path="/india" element={<News setProgress={this.setProgress} key="india" country="in" category="general"/>}/>
              <Route exact path="/world" element={<News setProgress={this.setProgress} key="world" country="us" category="general"/>}/>
              <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="" category="business"/>}/>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="" category="entertainment"/>}/>
              <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="" category="health"/>}/>
              <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country="" category="science"/>}/>
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="" category="sports"/>}/>
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="" category="technology"/>}/>
              <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" country="" category="general"/>}/>
            </Routes>
        </Router>
      </div>
    );
  }
}
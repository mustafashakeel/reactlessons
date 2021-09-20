import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';
// const url = `https://sheets.googleapis.com/v4/spreadsheets/${ config.spreadsheetId }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${ config.apiKey }`;




class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[]
    }
  }
  componentDidMount() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${ config.spreadsheetId }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${ config.apiKey }`;

    console.log(" url ", this.url)
    fetch(url).then(response => response.json()).then(data => {
      let batchRowValues = data.valueRanges[0].values;

      const rows = [];
      for (let i = 1; i < batchRowValues.length; i++) {
        let rowObject = {};
        for (let j = 0; j < batchRowValues[++i].length; j++) {
          rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
        }
        rows.push(rowObject);
      }

      this.setState({ items: rows });
    });
}

 
  render(){
    console.log(" State ",this.state)
    return (
      <div className="App">
        great
      </div>
    );
  }
  
}

export default App;

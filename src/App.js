import React from "react";
import axios from "axios";
import Header from "./components/header";
import Section from "./components/section";
import HeroPanel from "./components/heroPanel";
import "./App.css";

class App extends React.Component {
  state = {
    sections: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const url =
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";
    axios.get(url).then(({ data }) => {
      this.setState({
        sections: this.massageData(data)
      });
    });
  }

  getmaxima(items) {
    let index = 0;
    let value = 0;
    if (items.length == 0) {
      return null;
    }
    if (items.length == 1) {
      return items[index];
    }

    for (let i = 0; i < items.length; i++) {
      const date = new Date(items[i].effectiveDate);
      const unixDate = date.getTime();
      if (i == 0) {
        value = unixDate;
      } else {
        if (value < unixDate) {
          value = unixDate;
          index = i;
        }
      }
    }
    return items[index];
  }

  massageData(steps) {
    const sortedSteps = steps.sort((a, b) => {
      if (a.stepNumber < b.stepNumber) return -1;
      if (a.stepNumber > b.stepNumber) return 1;
      return 0;
    });

    const result = [];

    for (let i = 0; i < sortedSteps.length; i++) {
      const { versionContent, ...step } = sortedSteps[i];

      result.push({
        ...step,
        ...this.getmaxima(versionContent)
      });
    }
    return result;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <HeroPanel />
        <div className="article">
          <h3>How It Works</h3>
          <div className="row">
            {this.state.sections.map(s => {
              return <Section key={s.id} {...s} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

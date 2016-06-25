import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import { Clock, Weather } from './clock';
import AutoComplete from './autocomplete';

let panes = [
  { title: "Severed heads!", content: "This scares me so much!" },
  { title: "Moshi-moshi!", content: "Pandas vomit rainbows" },
  { title: "Random stuff", content: "Keep adding some random shit!" },
  { title: "Mas y mas", content: "poco a poco estamos mirando a la mierda!" }
];

let items = [
  { name: "Backbonejs", url: "http://backbonejs.org" },
  { name: "Angularjs", url: "http://www.angularjs.org" },
  { name: "Reactjs", url: "http://www.reactjs.org" },
  { name: "Emberjs", url: "http://www.emberjs.org" },
  { name: "Elm", url: "http://www.elm.com" },
  { name: "Meteorjs", url: "http://www.meteorjs.org" },
  { name: "Ruby", url: "http://www.ruby-doc.org" },
  { name: "Nodejs", url: "http://www.nodejs.org" },
  { name: "Python", url: "http://www.python.org" }
];

let names = [
  "David", "Jeff", "Marshall", "Joe", "Yuki", "Ned", "Nishant", "Kush", "Tokuyuki"
];

const Widgets = React.createClass({
  render: function() {
    return (
        <div className="widgets">
          <Clock />
          <Weather />
          <Tabs panes={panes} />
          <AutoComplete items={names} />
        </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widgets />, document.getElementById("main"));
});

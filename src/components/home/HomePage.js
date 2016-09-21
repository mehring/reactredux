import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
          <div className="jumbotron">
              <h1>React!</h1>
              <p>Woot woot..</p>
              <Link to="about" className="btn btn-primary btn-lg">Learn Mode</Link>
          </div>
        );
    }
}

export default HomePage;
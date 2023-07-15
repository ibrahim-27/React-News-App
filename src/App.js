import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route
              path="/"
              element={<News key="general" pageSize={15} category="general" />}
            />
            <Route
              path="/business"
              element={<News key="business" pageSize={15} category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News key="entertainment" pageSize={15} category="entertainment" />}
            />
            <Route
              path="/health"
              element={<News key="health" pageSize={15} category="health" />}
            />
            <Route
              path="/science"
              element={<News key="science" pageSize={15} category="science" />}
            />
            <Route
              path="/sports"
              element={<News key="sports" pageSize={15} category="sports" />}
            />
            <Route
              path="/technology"
              element={<News key="" pageSize={15} category="technology" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

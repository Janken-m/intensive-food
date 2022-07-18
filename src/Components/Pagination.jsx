import React, { Component } from "react";

class Pagination extends Component {
  state = {
    active: false,
  };

  handleActive = () => {
    let active = this.state.active;
    active = !active;
    this.setState({ active });
  };

  handleBgActive() {
    let classes = "page-item ";
    classes += this.state.active ? "active" : "";
    return classes;
  }

  styles = {
    cursor: "pointer",
  };

  render() {
    return (
      <div>
        <nav>
          <ul className="pagination">
            <li
              className={this.handleBgActive()}
              style={this.styles}
              onClick={this.handleActive}
            >
              <span className="page-link">1</span>
            </li>
            <li
              className={this.handleBgActive()}
              style={this.styles}
              onClick={this.handleActive}
            >
              <span className="page-link">2</span>
            </li>
            <li
              className={this.handleBgActive()}
              style={this.styles}
              onClick={this.handleActive}
            >
              <span className="page-link">3</span>

            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;

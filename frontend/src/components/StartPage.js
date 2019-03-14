import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTitles } from '../actions';


class StartPage extends Component {
  componentDidMount() {
    this.props.fetchTitles();
  }

  renderList = () => {
    const { titles } = this.props;
    return titles.map(title =>
      <li key={title.id}
        onClick={() => console.log('clicked')}
        >
        <Link to={`/topic/${title.id}`}>{title.topic}</Link>
      </li>
    )
  }

  render() {
    return (
      <div>
        <h1>Select a topic</h1>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  titles: state.titles
})

export default connect(mapStateToProps, { fetchTitles })(StartPage);

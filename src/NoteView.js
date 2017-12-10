import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class NoteView extends React.Component {
  handleClick = index => {
    this.props.deleteNote(index);
  };

  render() {
    console.log(this.props);
    const notes = this.props.notes.map((message, index) => (
      <div
        className="comment"
        key={index}
        onClick={() => this.handleClick(index)}
      >
        {message}
      </div>
    ));
    return <div className="ui comments">{notes}</div>;
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, actions)(NoteView);

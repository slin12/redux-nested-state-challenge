import React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class NoteView extends React.Component {
  handleClick = id => {
    this.props.deleteNote(id);
  };

  notesForActive = () => {
    if (this.props.subjects) {
      let notes = this.props.subjects.find(
        subj => subj.id === this.props.activeSubjectId
      ).notes;
      return notes;
    }
  };

  render() {
    const notes = this.props.notes.map(note => (
      <div key={note.id} onClick={() => this.handleClick(note.id)}>
        {note.text}
      </div>
    ));
    return <div className="ui comments">{notes}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  let subject = state.subjects.find(subj => subj.id === state.activeSubjectId);
  return {
    notes: subject.notes
  };
};

export default connect(mapStateToProps, actions)(NoteView);

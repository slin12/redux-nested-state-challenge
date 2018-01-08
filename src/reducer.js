const initialState = {
  activeSubjectId: 1,
  subjects: [
    {
      id: 1,
      title: "React",
      notes: []
    },
    {
      id: 2,
      title: "Redux",
      notes: []
    },
    {
      id: 3,
      title: "Functional Programming",
      notes: []
    },
    {
      id: 4,
      title: "Ruby",
      notes: []
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      let selectedSubject = state.subjects.find(
        subj => subj.id === state.activeSubjectId
      );
      let index = state.subjects.indexOf(selectedSubject);
      return {
        ...state,
        subjects: [
          ...state.subjects.slice(0, index),
          {
            ...selectedSubject,
            notes: [...selectedSubject.notes, action.note]
          },
          ...state.subjects.slice(index + 1)
        ]
      };
    case "DELETE_NOTE":
      selectedSubject = state.subjects.find(
        subj => subj.id === state.activeSubjectId
      );
      index = state.subjects.indexOf(selectedSubject);
      let notes = selectedSubject.notes.filter(note => note.id !== action.id);
      return {
        ...state,
        subjects: [
          ...state.subjects.slice(0, index),
          {
            ...selectedSubject,
            notes: notes
          },
          ...state.subjects.slice(index + 1)
        ]
      };
    case "CHANGE_SUBJECT":
      return { ...state, activeSubjectId: action.id };
    default:
      return state;
  }
};

export default reducer;

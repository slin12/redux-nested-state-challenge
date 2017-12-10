const initialState = { notes: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        notes: [...state.notes, action.note]
      };
    case 'DELETE_NOTE':
      return {
        notes: state.notes.filter(note => note.timestamp !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;

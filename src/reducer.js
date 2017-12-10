const initialState = { notes: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        notes: state.notes.concat(action.note)
      };
    case 'DELETE_NOTE':
      return {
        notes: [
          ...state.notes.slice(0, action.index),
          ...state.notes.slice(action.index + 1, state.notes.length)
        ]
      };
    default:
      return state;
  }
};

export default reducer;

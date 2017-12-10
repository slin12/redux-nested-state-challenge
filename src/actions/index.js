export const addNote = note => ({
  type: 'ADD_NOTE',
  note
});

export const deleteNote = index => ({
  type: 'DELETE_NOTE',
  index
});

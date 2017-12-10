export const addNote = text => ({
  type: 'ADD_NOTE',
  note: {
    text,
    timestamp: Date.now()
  }
});
// NOTE: generally the id of a resource would come from our backend,
// since we dont have that set up here, we can use a unique timestamp
// to stand in for a unique Primary Key ID

export const deleteNote = id => ({
  type: 'DELETE_NOTE',
  id
});

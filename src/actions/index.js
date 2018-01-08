export const addNote = text => {
  return { type: "ADD_NOTE", note: { text: text, id: Date.now() } };
};
// NOTE: generally the id of a resource would come from our backend,
// since we dont have that set up here, we can use a unique timestamp
// to stand in for a unique Primary Key ID,
// a note can look like
// {
//   text: 'some text',
//   id: Date.now()
// }

export const deleteNote = id => {
  return { type: "DELETE_NOTE", id };
};

export const changeActiveSubject = id => {
  return { type: "CHANGE_SUBJECT", id };
};

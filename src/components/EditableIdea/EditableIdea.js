import React  from 'react';

const EditableIdea = ({
  edit,
  idea,
  editIdea,
  editedIdea,
  focusedIdea,
  updateInput,
  updateIdea
}) => {
  const editHandler = (bool) => {
    editIdea(idea.id, bool)
  };

  const changeHandler = e => {
    updateInput(e.target.name, e.target.value, editedIdea.id)
  };

  const blurHandler = () => {
    const title = editedIdea.ideaTitle || idea.title || 'Enter title';
    const body = editedIdea.ideaBody || idea.body || 'Enter idea';
    updateIdea(editedIdea.id, title, body)
  };

  return (
  <div onMouseEnter={() => editHandler(true)} onMouseLeave={() => editHandler(false)}>
    { (editedIdea.id || focusedIdea) === idea.id ?
        <input
          type='text'
          name='ideaTitle'
          autoFocus
          placeholder={idea.title || 'Enter title'}
          value={editedIdea.ideaTitle || ''}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
        : <h1>{idea.title || 'Enter title'}</h1> }
    { (editedIdea.id || focusedIdea) === idea.id ?
        <input
          type='text'
          name='ideaBody'
          placeholder={idea.body || 'Enter idea'}
          value={editedIdea.ideaBody || ''}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
        : <p>{idea.body || 'Enter idea'}</p> }
  </div>
)};

export default EditableIdea;

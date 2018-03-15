import React  from 'react';

const EditableIdea = ({ edit, idea, editIdea, editableIdeaId, focusedIdea }) => {
  const clickHandler = () => {
    editIdea(idea.id)
  };

  return (
  <div onClick={clickHandler}>
    { (editableIdeaId || focusedIdea) === idea.id ?
        <input type='text' autoFocus placeholder={idea.title || 'Enter title'} />
        : <h1>{idea.title || 'Enter title'}</h1> }
    { (editableIdeaId || focusedIdea) === idea.id ?
        <input type='text' placeholder={idea.body || 'Enter idea'} />
        : <p>{idea.body || 'Enter idea'}</p> }
  </div>
)};

export default EditableIdea;

import React  from 'react';
import deleteIcon from '../../images/trash-icon.svg';

const EditableIdea = ({
  edit,
  idea,
  editIdea,
  editedIdea,
  focusedIdea,
  updateInput,
  updateIdea,
  deleteIdea
}) => {
  const editHandler = (bool) => {
    editIdea(idea.id, bool)
  };

  const changeHandler = e => {
    updateInput(e.target.name, e.target.value, idea.id)
  };

  const blurHandler = () => {
    const title = editedIdea.ideaTitle || idea.title || 'Enter title';
    const body = editedIdea.ideaBody || idea.body || 'Enter idea';
    updateIdea(editedIdea.id, title, body)
  };

  const deleteHandler = () => {
    deleteIdea(idea.id)
  }

  return (
  <div>
    <div
      className="title"
      onMouseEnter={() => editHandler(true)}
      onMouseLeave={() => editHandler(false)}
    >
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
    </div>
    <div
      className="body"
      onMouseEnter={() => editHandler(true)}
      onMouseLeave={() => editHandler(false)}
    >
      { (editedIdea.id || focusedIdea) === idea.id ?
          <textarea
            name='ideaBody'
            placeholder={idea.body || 'Enter idea'}
            value={editedIdea.ideaBody || ''}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          : <p>{idea.body || 'Enter idea'}</p> }
    </div>
    <div className="delete">
      <button type="button" onClick={deleteHandler}>
        <img src={deleteIcon} alt="Delete" />
        Delete
      </button>
    </div>
  </div>
)};

export default EditableIdea;

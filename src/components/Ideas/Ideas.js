import React from 'react';
import EditableIdea from '../EditableIdea/EditableIdea';

const Ideas = ({
  ideasList,
  focusedIdea,
  edit,
  editHandler,
  editedIdea,
  updateInput,
  updateIdea
}) => (
  <ul>
    {ideasList.map((idea) => {
      const cssClass = focusedIdea === idea.id ? 'focusIdea idea' : 'idea';
      return (
        <li key={idea.id} className={cssClass}>
            <EditableIdea
              idea={idea}
              edit={edit}
              editIdea={editHandler}
              editedIdea={editedIdea}
              focusedIdea={focusedIdea}
              updateInput={updateInput}
              updateIdea={updateIdea}
            />
        </li>
      )}
    )}
  </ul>
);

export default Ideas

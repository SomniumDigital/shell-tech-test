import React from 'react';
import EditableIdea from '../EditableIdea/EditableIdea';

const Ideas = ({ ideasList, focusedIdea, edit, editHandler, editableIdeaId }) => (
  <ul>
    {ideasList.map((idea) => {
      const cssClass = focusedIdea === idea.id ? 'focusIdea' : 'idea';
      return (
        <li key={idea.id} className={cssClass}>
          <div>
            <EditableIdea
              idea={idea}
              edit={edit}
              editIdea={editHandler}
              editableIdeaId={editableIdeaId}
              focusedIdea={focusedIdea}
            />
          </div>
        </li>
      )}
    )}
  </ul>
);

export default Ideas

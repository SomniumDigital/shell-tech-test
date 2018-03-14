import React from 'react';

const Ideas = ({ ideasList, focusedIdea }) => (
  <ul>
    {ideasList.map((idea) => {
      const cssClass = focusedIdea === idea.id ? 'focusIdea' : 'idea';
      return (
        <li key={idea.id} className={cssClass}>
          <div>
            <h1>{idea.title || 'Enter title'}</h1>
            <p>{idea.body || 'Enter idea'}</p>
          </div>
        </li>
      )}
    )}
  </ul>
);

export default Ideas

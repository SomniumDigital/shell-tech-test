import React from 'react';

const Ideas = ({ ideasList }) => (
  <ul>
    {ideasList.map((idea) => (
        <li key={idea.id}>
          <div>
            <h1>{idea.title || 'Enter title'}</h1>
            <p>{idea.body || 'Enter idea'}</p>
          </div>
        </li>
      )
    )}
  </ul>
);

export default Ideas

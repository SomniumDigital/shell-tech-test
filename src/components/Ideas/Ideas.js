import React from 'react';

const Ideas = ({ ideasList }) => (
  <ul>
    {ideasList.map((idea) => (
        <li key={idea.id}>
          <div>
            <h1>{idea.title}</h1>
            <p>{idea.body}</p>
          </div>
        </li>
      )
    )}
  </ul>
);

export default Ideas

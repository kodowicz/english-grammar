import React, { Component } from 'react';

export const Menu = ({ topics }) => (
  <nav>
    <p>Choose topic to practice</p>
    <ul>
      {topics.map(topic =>
        <li key={topics.indexOf(topic)}>
          <button>
            {topic}
          </button>
        </li>
      )}
    </ul>
  </nav>
)

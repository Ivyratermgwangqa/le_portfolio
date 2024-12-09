// src/components/ProgrammingIcons.jsx
import React from 'react';
import { DiJavascript1, DiPython, DiJava, DiHtml5, DiCss3, DiReact, DiNodejsSmall } from 'react-icons/di';

const ProgrammingIcons = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', fontSize: '2rem' }}>
      <DiJavascript1 title="JavaScript" />
      <DiPython title="Python" />
      <DiJava title="Java" />
      <DiHtml5 title="HTML5" />
      <DiCss3 title="CSS3" />
      <DiReact title="React" />
      <DiNodejsSmall title="Node.js" />
    </div>
  );
};

export default ProgrammingIcons;
import React from 'react';

import './ListComponent.css';

const taskComponent = (props) => {
  return (
    <div className='taskDiv'>
      <h1 className='taskTitle'>{props.title}</h1>
      <hr />
      <p className='taskPara'>{props.task}</p>
      <button className='buttonClass' onClick={props.clickFunction}>
        Delete
      </button>
    </div>
  );
};

export default taskComponent;

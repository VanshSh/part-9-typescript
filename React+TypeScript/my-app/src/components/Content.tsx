import React from 'react';

interface CoursePart {
  name: string;
  exerciseCount: number;
}

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      {courseParts.map((item, index) => (
        <div key={index}>
          <p>{item.name} {item.exerciseCount}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;

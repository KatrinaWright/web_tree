
import React, { useState } from 'react';

const FamilyMember = ({ person }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <li className="mb-2">
      <div className="flex items-center">
        {person.parents && person.parents.length > 0 && (
          <button
            onClick={toggleExpand}
            className="mr-2 w-4 h-4 text-blue-500 focus:outline-none"
          >
            {expanded ? '-' : '+'}
          </button>
        )}
        <span>{person.name} (b. {person.birth})</span>
      </div>
      {expanded && person.parents && person.parents.length > 0 && (
        <ul className="ml-6 mt-2">
          {person.parents.map((parent) => (
            <FamilyMember key={parent.id} person={parent} />
          ))}
        </ul>
      )}
    </li>
  );
};

const FamilyTree = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Family Tree</h1>
      <ul className="list-none">
        <FamilyMember person={data.person} />
      </ul>
    </div>
  );
};

export default FamilyTree;
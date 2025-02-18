import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { mockFamilySearchData } from '@/mockFamilySearchData';

interface Person {
  id: string;
  display: {
    name: string;
    gender: string;
    lifespan: string;
    birthDate: string;
    birthPlace: string;
    deathDate?: string;
    deathPlace?: string;
  };
}

interface Relationship {
  type: string;
  person1: { resource: string };
  person2: { resource: string };
}

const PersonNode: React.FC<{ person: Person; relationships: Relationship[] }> = ({ person, relationships }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const children = relationships
    .filter(rel => rel.type === 'http://gedcomx.org/ParentChild' && rel.person2.resource === `#${person.id}`)
    .map(rel => rel.person1.resource.slice(1));

  const hasParents = children.length > 0;

  const parents = mockFamilySearchData.persons.filter(p => children.includes(p.id));

  return (
    <div className="ml-4">
      <div className="flex items-center space-x-2">
        {hasParents ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:bg-gray-100 p-1 rounded"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        ) : (
          <div className="w-6" />
        )}
        <div className="py-2">
          <span className="font-medium">{person.display.name}</span>
          <div className="text-sm text-gray-600">
            Born: {person.display.birthDate} in {person.display.birthPlace}
            {person.display.deathDate && ` | Died: ${person.display.deathDate}`}
          </div>
        </div>
      </div>
      
      {isExpanded && hasParents && (
        <div className="ml-4 border-l-2 border-gray-200">
          {parents.map((parent) => (
            <PersonNode key={parent.id} person={parent} relationships={relationships} />
          ))}
        </div>
      )}
    </div>
  );
};

const FamilyTree: React.FC = () => {
  const rootPerson = mockFamilySearchData.persons[0]; // Assuming the first person is the root

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Family Tree</h1>
      <div className="bg-white rounded-lg shadow">
        <PersonNode person={rootPerson} relationships={mockFamilySearchData.relationships} />
      </div>
    </div>
  );
};

export default FamilyTree;
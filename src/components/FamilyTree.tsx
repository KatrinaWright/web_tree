import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Home, User } from 'lucide-react';
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
    <div className="ml-6">
      <div className="flex items-center gap-2 my-2">
        {hasParents ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:bg-sage-100 p-1.5 rounded-full transition-colors duration-200 bg-white shadow-sm"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-sage-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-sage-600" />
            )}
          </button>
        ) : (
          <div className="w-7" />
        )}
        <div className="bg-white rounded-lg shadow-sm border border-sage-200 p-4 flex-1">
          <div className="flex items-center gap-3">
            <div className="bg-sage-100 p-2 rounded-full">
              <User className="w-5 h-5 text-sage-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brown-700">{person.display.name}</h3>
              <div className="text-sm text-sage-700 mt-1">
                <span className="inline-flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  Born: {person.display.birthDate} in {person.display.birthPlace}
                </span>
                {person.display.deathDate && (
                  <span className="ml-3 text-brown-600">
                    † {person.display.deathDate}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isExpanded && hasParents && (
        <div className="ml-7 border-l-2 border-sage-300">
          {parents.map((parent) => (
            <PersonNode key={parent.id} person={parent} relationships={relationships} />
          ))}
        </div>
      )}
    </div>
  );
};

const FamilyTree: React.FC = () => {
  const rootPerson = mockFamilySearchData.persons[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-yellow-50">
      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brown-800 mb-2">Family Tree</h1>
          <p className="text-sage-600">Explore your family history</p>
        </div>
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <PersonNode person={rootPerson} relationships={mockFamilySearchData.relationships} />
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;

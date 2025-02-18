import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

// Sample data structure for testing
const sampleFamilyData = {
  id: "P-1",
  name: "John Smith",
  birthDate: "1980-05-15",
  birthPlace: "New York, USA",
  parents: [
    {
      id: "P-2",
      name: "Robert Smith",
      birthDate: "1955-03-20",
      birthPlace: "Boston, USA",
      parents: [
        {
          id: "P-4",
          name: "George Smith",
          birthDate: "1930-01-10",
          birthPlace: "Chicago, USA",
          parents: []
        },
        {
          id: "P-5",
          name: "Martha Johnson",
          birthDate: "1932-07-22",
          birthPlace: "Philadelphia, USA",
          parents: []
        }
      ]
    },
    {
      id: "P-3",
      name: "Mary Williams",
      birthDate: "1958-11-08",
      birthPlace: "Los Angeles, USA",
      parents: [
        {
          id: "P-6",
          name: "James Williams",
          birthDate: "1933-09-15",
          birthPlace: "San Francisco, USA",
          parents: []
        },
        {
          id: "P-7",
          name: "Elizabeth Brown",
          birthDate: "1935-04-30",
          birthPlace: "Seattle, USA",
          parents: []
        }
      ]
    }
  ]
};

const PersonNode = ({ person }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasParents = person.parents && person.parents.length > 0;

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
          <div className="w-6" /> // Spacer for alignment
        )}
        <div className="py-2">
          <span className="font-medium">{person.name}</span>
          <div className="text-sm text-gray-600">
            Born: {person.birthDate} in {person.birthPlace}
          </div>
        </div>
      </div>
      
      {isExpanded && hasParents && (
        <div className="ml-4 border-l-2 border-gray-200">
          {person.parents.map((parent) => (
            <PersonNode key={parent.id} person={parent} />
          ))}
        </div>
      )}
    </div>
  );
};

const FamilyTree = ({ initialPerson = sampleFamilyData }) => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Family Tree</h1>
      <div className="bg-white rounded-lg shadow">
        <PersonNode person={initialPerson} />
      </div>
    </div>
  );
};

export default FamilyTree;
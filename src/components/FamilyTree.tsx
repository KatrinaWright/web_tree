import React from 'react';
import { ChevronRight, ChevronDown, User } from 'lucide-react';
import { useFamilyData } from '@/hooks/useFamilyData';

interface PersonCardProps {
  person: any;
  isExpanded: boolean;
  onToggle: () => void;
  hasParents: boolean;
}

const PersonCard = ({ person, isExpanded, onToggle, hasParents }: PersonCardProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-start space-x-3">
        {hasParents ? (
          <button
            onClick={onToggle}
            className="mt-1 hover:bg-gray-100 p-1 rounded"
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
        <div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-500" />
            <h3 className="font-medium">{person.name}</h3>
          </div>
          <div className="mt-1 text-sm text-gray-600">
            <div>Birth: {person.birthDate}</div>
            <div>Place: {person.birthPlace}</div>
            <div>Lifespan: {person.lifespan}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FamilyTree = ({ initialPersonId = "KW7G-28J" }) => {
  const { loading, error, familyData, expandedPersons, togglePerson } = useFamilyData(initialPersonId);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!familyData) {
    return <div className="p-4">No data available</div>;
  }

  const renderPerson = (person: any) => {
    const isExpanded = expandedPersons.has(person.id);
    const hasParents = person.parentIds?.length > 0;

    return (
      <div key={person.id} className="space-y-4">
        <PersonCard
          person={person}
          isExpanded={isExpanded}
          onToggle={() => togglePerson(person.id)}
          hasParents={hasParents}
        />
        
        {isExpanded && person.parents && (
          <div className="ml-8 space-y-4 border-l-2 border-gray-200 pl-4">
            {person.parents.map((parent: any) => renderPerson(parent))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Family Tree</h1>
      {renderPerson(familyData)}
    </div>
  );
};

export default FamilyTree;
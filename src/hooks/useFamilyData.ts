import { useState, useEffect } from 'react';
import { getPersonWithRelationships, getPersonDetails, processPersonData } from '@/lib/mockFamilySearchApi';

export function useFamilyData(initialPersonId: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [familyData, setFamilyData] = useState<any>(null);
  const [expandedPersons, setExpandedPersons] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchPersonData(initialPersonId);
  }, [initialPersonId]);

  async function fetchPersonData(personId: string) {
    try {
      setLoading(true);
      setError(null);

      // Get initial person data
      const personData = await getPersonWithRelationships(personId);
      const processedData = processPersonData(personData);

      // If person is expanded, get their parents
      if (expandedPersons.has(personId)) {
        const parentPromises = processedData.parentIds.map(async (parentId) => {
          const parentData = await getPersonDetails(parentId);
          return processPersonData({ 
            persons: parentData.persons,
            childAndParentsRelationships: []
          });
        });

        const parents = await Promise.all(parentPromises);
        processedData.parentIds = parents;
      }

      setFamilyData(processedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  const togglePerson = async (personId: string) => {
    const newExpanded = new Set(expandedPersons);
    if (expandedPersons.has(personId)) {
      newExpanded.delete(personId);
    } else {
      newExpanded.add(personId);
    }
    setExpandedPersons(newExpanded);
    await fetchPersonData(personId);
  };

  return {
    loading,
    error,
    familyData,
    expandedPersons,
    togglePerson
  };
}
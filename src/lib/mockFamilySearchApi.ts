// Mock data structure following FamilySearch API format
export const mockPersonData = {
    persons: [
      {
        id: "KW7G-28J",
        display: {
          name: "John Smith",
          gender: "Male",
          lifespan: "1980-2023",
          birthDate: "15 May 1980",
          birthPlace: "New York, USA",
        },
        links: {
          person: {
            href: "/platform/tree/persons/KW7G-28J"
          }
        }
      }
    ],
    childAndParentsRelationships: [
      {
        id: "PPPX-MP9",
        child: {
          resourceId: "KW7G-28J",
        },
        parent1: {
          resourceId: "KWCR-JWS",
        },
        parent2: {
          resourceId: "KWCR-JW3",
        }
      }
    ],
    relationships: [
      {
        id: "C123456",
        person1: {
          resourceId: "KWCR-JWS",
        },
        person2: {
          resourceId: "KWCR-JW3",
        },
        type: "Couple"
      }
    ],
    persons_full: {
      "KW7G-28J": {
        display: {
          name: "John Smith",
          gender: "Male",
          lifespan: "1980-2023",
          birthDate: "15 May 1980",
          birthPlace: "New York, USA",
        }
      },
      "KWCR-JWS": {
        display: {
          name: "Robert Smith",
          gender: "Male",
          lifespan: "1955-",
          birthDate: "20 March 1955",
          birthPlace: "Boston, USA",
        }
      },
      "KWCR-JW3": {
        display: {
          name: "Mary Williams",
          gender: "Female",
          lifespan: "1958-",
          birthDate: "8 November 1958",
          birthPlace: "Los Angeles, USA",
        }
      }
    }
  };
  
  export async function getPersonWithRelationships(personId: string) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return mock data
    return mockPersonData;
  }
  
  export async function getPersonDetails(personId: string) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      persons: [{
        ...mockPersonData.persons_full[personId]
      }]
    };
  }
  
  export async function getParentsRelationship(personId: string) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      childAndParentsRelationships: mockPersonData.childAndParentsRelationships.filter(
        rel => rel.child.resourceId === personId
      )
    };
  }
  
  // Helper function to process and transform the data into a tree structure
  export function processPersonData(data: any) {
    const person = data.persons[0];
    const parentsRel = data.childAndParentsRelationships[0];
    
    return {
      id: person.id,
      name: person.display.name,
      birthDate: person.display.birthDate,
      birthPlace: person.display.birthPlace,
      gender: person.display.gender,
      lifespan: person.display.lifespan,
      parentIds: parentsRel ? [
        parentsRel.parent1?.resourceId,
        parentsRel.parent2?.resourceId
      ].filter(Boolean) : []
    };
  }
  
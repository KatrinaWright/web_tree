export const mockFamilySearchData = {
    "persons": [
      {
        "id": "KW7G-28J",
        "display": {
          "name": "John Smith",
          "gender": "Male",
          "lifespan": "1980-2023",
          "birthDate": "15 May 1980",
          "birthPlace": "New York, USA",
        },
        "names": [
          {
            "nameForms": [{ "fullText": "John Smith" }]
          }
        ],
        "facts": [
          {
            "type": "http://gedcomx.org/Birth",
            "date": { "original": "15 May 1980" },
            "place": { "original": "New York, USA" }
          }
        ]
      },
      {
        "id": "KWCR-JWS",
        "display": {
          "name": "Jane Doe",
          "gender": "Female",
          "lifespan": "1982-",
          "birthDate": "23 August 1982",
          "birthPlace": "Los Angeles, USA",
        },
        "names": [
          {
            "nameForms": [{ "fullText": "Jane Doe" }]
          }
        ],
        "facts": [
          {
            "type": "http://gedcomx.org/Birth",
            "date": { "original": "23 August 1982" },
            "place": { "original": "Los Angeles, USA" }
          }
        ]
      },
      {
        "id": "KWTG-RGX",
        "display": {
          "name": "Robert Smith",
          "gender": "Male",
          "lifespan": "1955-",
          "birthDate": "10 June 1955",
          "birthPlace": "Chicago, USA",
        },
        "names": [
          {
            "nameForms": [{ "fullText": "Robert Smith" }]
          }
        ],
        "facts": [
          {
            "type": "http://gedcomx.org/Birth",
            "date": { "original": "10 June 1955" },
            "place": { "original": "Chicago, USA" }
          }
        ]
      },
      {
        "id": "KWZQ-QG3",
        "display": {
          "name": "Mary Johnson",
          "gender": "Female",
          "lifespan": "1958-2020",
          "birthDate": "5 April 1958",
          "birthPlace": "Boston, USA",
          "deathDate": "15 December 2020",
          "deathPlace": "Boston, USA"
        },
        "names": [
          {
            "nameForms": [{ "fullText": "Mary Johnson" }]
          }
        ],
        "facts": [
          {
            "type": "http://gedcomx.org/Birth",
            "date": { "original": "5 April 1958" },
            "place": { "original": "Boston, USA" }
          },
          {
            "type": "http://gedcomx.org/Death",
            "date": { "original": "15 December 2020" },
            "place": { "original": "Boston, USA" }
          }
        ]
      }
    ],
    "relationships": [
      {
        "type": "http://gedcomx.org/Couple",
        "person1": { "resource": "#KW7G-28J" },
        "person2": { "resource": "#KWCR-JWS" }
      },
      {
        "type": "http://gedcomx.org/ParentChild",
        "person1": { "resource": "#KWTG-RGX" },
        "person2": { "resource": "#KW7G-28J" }
      },
      {
        "type": "http://gedcomx.org/ParentChild",
        "person1": { "resource": "#KWZQ-QG3" },
        "person2": { "resource": "#KW7G-28J" }
      }
    ]
  };
'use strict';

module.exports = {
  Noun: {},
  // - singular
  Singular: {
    isA: 'Noun'
  },
  //a specific thing that's capitalized
  ProperNoun: {
    isA: 'Noun'
  },

  // -- people
  Person: {
    isA: 'Singular'
  },
  FirstName: {
    isA: 'Person'
  },
  MaleName: {
    isA: 'FirstName'
  },
  FemaleName: {
    isA: 'FirstName'
  },
  LastName: {
    isA: 'Person'
  },
  Honorific: {
    isA: 'Noun'
  },
  Place: {
    isA: 'Singular'
  },

  // -- places
  Country: {
    isA: 'Place'
  },
  City: {
    isA: 'Place'
  },
  Region: {
    isA: 'Place'
  },
  Address: {
    isA: 'Place'
  },
  Organization: {
    isA: 'Singular'
  },
  SportsTeam: {
    isA: 'Organization'
  },
  Company: {
    isA: 'Organization'
  },
  School: {
    isA: 'Organization'
  },

  // - plural
  Plural: {
    isA: 'Noun'
  },
  Uncountable: {
    //(not plural or singular)
    isA: 'Noun'
  },

  // - pronouns
  Pronoun: {
    isA: 'Noun'
  },
  MalePronoun: {
    isA: 'Pronoun'
  },
  FemalePronoun: {
    isA: 'Pronoun'
  },
  NeutralPronoun: {
    isA: 'Pronoun'
  },
  SingularPronoun: {
    isA: 'Pronoun',
  },
  PluralPronoun: {
    isA: 'Pronoun'
  },
  PersonalPronoun: {
    isA: 'Pronoun'
  },
  FirstPersonPronoun: {
    isA: 'Pronoun'
  }
  SecondPersonPronoun: {
    isA: 'Pronoun'
  },
  ThirdPersonPronoun: {
    isA: 'Pronoun'
  },

  //a word for someone doing something -'plumber'
  Actor: {
    isA: 'Noun'
  },
  //a gerund-as-noun - 'swimming'
  Activity: {
    isA: 'Noun'
  },
  //'kilograms'
  Unit: {
    isA: 'Noun'
  },
  //'Canadians'
  Demonym: {
    isA: 'Noun'
  },
  //`john's`
  Possessive: {
    isA: 'Noun'
  }
};

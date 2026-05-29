// Each family has a name and their own set of questions.
// Replace "Family A / B / C" with the real family names.
// correct: index into options[] (0-based)

export const families = [
  {
    id: 'family-a',
    name: 'Family A',
    emoji: '🌸',
    questions: [
      {
        question: "What is Mom's favorite flower?",
        options: ['Rose', 'Lily', 'Tulip', 'Daisy'],
        correct: 0,
      },
      {
        question: "What is Mom's go-to comfort food?",
        options: ['Pasta', 'Tacos', 'Soup', 'Pizza'],
        correct: 2,
      },
      {
        question: "What was Mom's dream job growing up?",
        options: ['Teacher', 'Doctor', 'Artist', 'Astronaut'],
        correct: 1,
      },
    ],
  },
  {
    id: 'family-b',
    name: 'Family B',
    emoji: '🌷',
    questions: [
      {
        question: "What is Mom's favorite season?",
        options: ['Spring', 'Summer', 'Fall', 'Winter'],
        correct: 0,
      },
      {
        question: "What does Mom love to do on her day off?",
        options: ['Read', 'Garden', 'Cook', 'Watch TV'],
        correct: 1,
      },
      {
        question: "What is Mom's favorite holiday?",
        options: ["Christmas", "Thanksgiving", "Easter", "Fourth of July"],
        correct: 0,
      },
    ],
  },
  {
    id: 'family-c',
    name: 'Family C',
    emoji: '🌹',
    questions: [
      {
        question: "What is Mom's favorite movie?",
        options: ['The Sound of Music', 'Titanic', 'Forrest Gump', 'Pretty Woman'],
        correct: 2,
      },
      {
        question: "Where would Mom most like to travel?",
        options: ['Italy', 'Hawaii', 'Paris', 'Japan'],
        correct: 2,
      },
      {
        question: "What is Mom's hidden talent?",
        options: ['Singing', 'Painting', 'Dancing', 'Cooking'],
        correct: 3,
      },
    ],
  },
]

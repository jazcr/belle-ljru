//Creating the quiz questions and answer choices
const quizQuestions = [
    {
        question: 'How does your skin feel throughout the day?',
        answers: [
            {
                type: 'Oily',
                content: 'Shiny and Greasy'
            },
            {
                type: 'Dry',
                content: 'Dry and Flakey'
            },
            {
                type: 'Combination/Normal',
                content: 'Normal and Balanced'
            }
        ]
    },
    {
        question: 'Do you have sensitive skin?',
        answers: [
            {
                type: 'Oily',
                content: 'No'
            },
            {
                type: 'Dry',
                content: 'Yes'
            },
            {
                type: 'Combination/Normal',
                content: 'Not sure'
            },
        ]
    },
    {
        question: 'What is your biggest skin concern?',
        answers: [
            {
                type: 'Oily',
                content: 'Oil Control'
            },
            {
                type: 'Dry',
                content: 'Moisturize/Hydrate'
            },
            {
                type: 'Combination/Normal',
                content: 'Maintain balance'
            },
        ]   
    }
];

export default quizQuestions;
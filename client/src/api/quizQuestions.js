//Creating the quiz questions and answer choices
const quizQuestions = [
    {
        question: 'What skin type do you have?',
        answers: [
            {
                type: 'Oily',
                content: 'Oily Skin'
            },
            {
                type: 'Dry',
                content: 'Dry Skin'
            },
            {
                type: 'Combination/Normal',
                content: 'Combination/Normal Skin'
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
import API from '../../config';

const getQuestion = () => {
    return API.get('question').then( response => {
        return response.data
    })
}

const getQuestionById = (question) => {
    return API.post('questionbyid', question).then( response => {
        return response.data
    })
}

const createQuestion = (question) => {
    return API.post('question', question).then( response => {
        return response.data
    })
}


export default {
    getQuestion,
    getQuestionById,
    createQuestion
}
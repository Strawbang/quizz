import API from '../../config';

const getQuizz = () => {
    return API.get('quizz').then( response => {
        return response.data
    })
}

const createQuizz = (quizz) => {
    return API.post('quizz', quizz).then( response => {
        return response.data
    })
}

export default {
    getQuizz,
    createQuizz
}
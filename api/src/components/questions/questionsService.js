const Question = require('./questionsModel')

const create = async data => {
 try {
     const response = await Question.create(data).then( question => {
        return {
            status: 200,
            data: {
                message: 'La question ' + question.question + ' a été créé !',
                successful: true,
                question
            }
        }
     })
     return response
 } catch (e) {
    return {
        data: {
            message: "Une erreur est survenue lors de la création de la question . Veuillez réessayer.",
            error: e.message,
            successful: false
        }
    };
 }
}

const read = async data => {
    console.log(data);
    try {
        const response = await Question.find({data}).then( question => {
            return {
                status: 200,
                data : {
                    message: 'La question ' + question.question + 'a été trouvé !',
                    successful: true,
                    question
                }
            }
        })
        return response
    } catch (e) {
        return {
            data: {
                message: "Une erreur est survenue lors de la recherche de la question . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        }
    }
}

const readById = async (data) => {
    console.log(data);
    try {
        const response = await Question.find({'_id': { $in: data}}).then( question => {
            return {
                status: 200,
                data : {
                    message: 'La question ' + question.question + 'a été trouvé !',
                    successful: true,
                    question
                }
            }
        })
        return response
    } catch (e) {
        return {
            data: {
                message: "Une erreur est survenue lors de la recherche de la question . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        }
    }
}

const readAll = async () => {
    try {
        const response = await Question.find().then( question => {
            return {
                status: 200,
                data : {
                    message: 'Les questions ' + question.question + 'on été trouvé !',
                    successful: true,
                    question
                }
            }
        })
        return response
    } catch (e) {
        return {
            data: {
                message: "Une erreur est survenue lors de la recherche de la question . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        }
    }
}

module.exports = {
    create,
    read,
    readById,
    readAll,
}
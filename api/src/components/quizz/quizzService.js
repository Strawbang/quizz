const Quizz = require('./quizzModel')

const create = async data => {
 console.log(data);
 try {
     const response = await Quizz.create(data).then( quizz => {
        return {
            status: 200,
            data: {
                message: 'Le quizz ' + quizz.quizz + ' a été créé !',
                successful: true,
                quizz
            }
        }
     })
     return response
 } catch (e) {
    return {
        data: {
            message: "Une erreur est survenue lors de la création du quizz . Veuillez réessayer.",
            error: e.message,
            successful: false
        }
    };
 }
}

const read = async data => {
    try {
        const response = await Quizz.findOne({data}).then( quizz => {
            return {
                status: 200,
                data : {
                    message: 'Le quizz ' + quizz.quizz + 'a été trouvé !',
                    successful: true,
                    quizz
                }
            }
        })
        return response
    } catch (e) {
        return {
            data: {
                message: "Une erreur est survenue lors de la recherche du quizz . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        }
    }
}

const readAll = async () => {
    try {
        const response = await Quizz.find().then( quizz => {
            return {
                status: 200,
                data : {
                    message: 'Les quizzs on été trouvé !',
                    successful: true,
                    quizz
                }
            }
        })
        return response
    } catch (e) {
        return {
            data: {
                message: "Une erreur est survenue lors de la recherche de la quizz . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        }
    }
}

module.exports = {
    create,
    read,
    readAll
}
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import quizzService from '../CardQuizz/quizzService';
import questionService from './questionService';

const FormAdd = () => {

    const [quizz, setQuizz] = useState('');
    const [response, setResponse] = useState('');
    const [question, setQuestion] = useState([]);

    const getQuestion = async () => {
        await questionService.getQuestion().then( response => {
            setResponse(response)
        })
    }

    const createQuizz = async (quizz) => {
        await quizzService.createQuizz(quizz).then( response =>{
            console.log(response);
        })
    }

    const handleCheckBoxChange = (e, index) => {
        const { value, checked } = e.target;
        if(checked === true){
            setQuestion(question => [{_id: value},...question] );
        }
        else{
            var array = [...question];
            var index = array.map((o) => o._id).indexOf(e.target.value);
            if (index !== -1) {
              array.splice(index, 1);
              setQuestion(array);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createQuizz({"quizz": quizz, "questions" : question})
    }

    useEffect(() => {
        getQuestion();
    }, [])

    return(
        <form onSubmit={handleSubmit}>
            <div>
                    <TextField
                     label='quizz'
                     value={quizz}
                     onChange={e => setQuizz(e.target.value)}
                     required
                    />
                    {response && response.question.map( (question,index) => {
                        return(
                            <FormControlLabel key={index} control={<Checkbox />} name='_id' value={question._id} label={question.question} onChange={e => handleCheckBoxChange(e, index)}/>
                        )
                    })}
            </div>
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(question)}</div> */}
            <button type='submit'>Envoyer</button>
        </form>
    )

}

export default FormAdd;
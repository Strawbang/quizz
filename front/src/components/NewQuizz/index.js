import { Container,  Checkbox, FormControlLabel, Button } from '@mui/material';
import { useState, useEffect } from 'react';

import questionService from "../FormAddQuizz/questionService"

const NewQuizz = (props) => {
    const [response, setResponse] = useState('');
    const [result, setResult] = useState([]);
    const [disable, setDisable] = useState();

    const getQuestion = async () => {
        await questionService.getQuestionById(props.question_id).then( response => {
            setResponse(response)
        })
    }

    console.log(result)

    const handleCheckBoxChange = (e, index) => {
        const { id, value, checked } = e.target;
        console.log(id, value, checked);
        if(checked === true){
            setResult(result => [{response: value},...result] );
        }
        else{
            var array = [...result];
            var index = array.map((o) => o._id).indexOf(e.target.value);
            if (index !== -1) {
              array.splice(index, 1);
              setResult(array);
            }
        }
    };

    const validate = () =>{
        setDisable(true);
    }

    useEffect(() => {
        getQuestion();
    }, [])

    return(
        <>
            <Container maxWidth="sm">
                {response && response.question.map((question, index) => {
                    return(
                        <div key={index}>
                            <h1>{question.question}</h1>
                            {
                                question.answers.map((answer, index) => {
                                    return(
                                        <FormControlLabel key={index} disabled={disable} control={<Checkbox />} name='answer' value={answer.response} label={answer.answer} onChange={e => handleCheckBoxChange(e, index)}/>
                                    )
                                })
                            }
                        </div>
                    )
                })}
                <Button onClick={validate}>Valider</Button>
            </Container>
        </>
    )
}

export default NewQuizz;
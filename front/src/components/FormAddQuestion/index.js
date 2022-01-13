import { Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import questionService from '../FormAddQuizz/questionService';

const FormAddQuestion = () => {

    const [answer, setAnswer] = useState('');
    const [response, setResponse] = useState('');
    const [question, setQuestion] = useState('');
    const [inputList, setInputList] = useState([{ answer: "", response: "" }]);

    const createQuestion = async (question) => {
        console.log(question);
        await questionService.createQuestion(question).then( response =>{
            console.log(response);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createQuestion({"question": question, "answers" : inputList})
    }

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { answer: "", response: "" }]);
    };

    return(
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                        <Grid item>
                            <TextField
                            label='question'
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                            required
                            />
                        </Grid>
                        {inputList.map((x, i) => {
                            return(
                                <><Grid item>
                                    <TextField
                                        name='answer'
                                        value={x.answer}
                                        onChange={e => handleInputChange(e, i)} />
                                  </Grid>
                                  <Grid item>
                                    <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Response</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="response"
                                                value={x.response}
                                                label="Response"
                                                onChange={e => handleInputChange(e, i)}
                                            >
                                                <MenuItem value={true}>True</MenuItem>
                                                <MenuItem value={false}>False</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <div className="btn-box">

                                        {inputList.length !== 1 && <button
                                            className="mr10"
                                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                                        {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                                    </div>
                                </>
                            )
                        })}
                        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
                        <button type='submit'>Envoyer</button>
                </Grid>
            </form>
        </Container>
    )

}

export default FormAddQuestion;
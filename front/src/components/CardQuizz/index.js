import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import quizzService from './quizzService';
import {Link} from 'react-router-dom';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

const BasicCard = () => {

  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  const getQuizz = async () => {
    await quizzService.getQuizz().then( response => {
        setResponse(response)
    })
  }

  useEffect(() => {
    getQuizz();
  }, [])

  return (
      <>
        {response && response.quizz.map( (quizz,index) => {
            return (
              <Grid item>
                <Card key={index} sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {quizz.quizz}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate('/participe', {state: quizz.questions} )}>Participer</Button>
                  </CardActions>
                </Card>
              </Grid>
          )
        })}
      </>
  );
}

export default BasicCard;
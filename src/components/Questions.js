import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme ) => ({
  root: {
    width: '50%',
    backgroundColor: '#253053',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: "center",
    padding: theme.spacing(2),
    margin: 'auto',
    color: '#ffffff',
    fontSize: 20,
    position: 'absolute',
    left: '25%',
    top: '25%',
    
  },
  btn: {
    // margin: 'auto',
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
}
}));

export default function Questions() {
  
  const classes = useStyles()
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([]);
  const history = useHistory();
  
  const getQuesitons = () => {
    fetch(process.env.PUBLIC_URL + 'questions.json')
    .then((response) => {
        return response.json();
    }).then((jsonResponse) => {
      setQuestions(jsonResponse);
    });
}

    useEffect(() => {
        getQuesitons();
    },[]);
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const handleAnswerOptionClick = () => {    
      const answer =  questions[currentQuestion].answerOptions[value.replace('index_', '')]
       const isCorrect = answer.isCorrect
		if (isCorrect) {
			setScore(score + 1);
		}
		if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            
		} else {
            const scores = JSON.parse(localStorage.getItem('scores')) || []
            scores.unshift(score)
            localStorage.setItem('scores', JSON.stringify(scores.slice(0,10)))
            history.push('/results')
        }
        setValue('')
  };
  
  const handleScoreClick = () => {
    setShowScore(true);
  }

	return (
        <div>
            { questions.length > 0 ? (
                <Card className={classes.root}>

                    <div >
                            
                    <CardContent>
                    Question {currentQuestion + 1}/{questions.length}
                        </CardContent>
                        <FormControl component="fieldset" >{questions[currentQuestion].questionText}
                            <RadioGroup value={value} onChange={handleChange}>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <FormControlLabel key={index} value={'index_'+index}
                                control={<Radio />}
                                label={answerOption.answerText}>
                            </FormControlLabel>
                            ) )}
                            </RadioGroup>
                            
                <Button disabled={!value} className={classes.btn} variant="contained" color="secondary" onClick={() => handleAnswerOptionClick()}>Next</Button>
                            
                        </FormControl>
                </div>
                        
                </Card>
        ): <div></div>
    }
        </div>
	);
}
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Questions from './components/Questions';
import Results from "./components/Results";
import Loader from "./components/Loader";


function App() {


  return (
    <Router>
        <Switch>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Loader />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;







// import React, { useState } from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme ) => ({
//   root: {
//     minWidth: 275,
//     width: '50%',
//     backgroundColor: '#253053',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'start',
//     justifyContent: "center",
//     padding: theme.spacing(2),
//     margin: 'auto',
//     marginTop: '25px',
//     color: '#ffffff',
//     fontSize: 20,
//   },
//   wrap: {
//     height: '50%',
//     width: '50%',
//     margin: 'auto',
    
//   }
// }));

// export default function App() {
  
//   const classes = useStyles()
  
// 	const questions = [
// 		{
// 			questionText: 'What is the fastest land animal?',
// 			answerOptions: [
// 				{ answerText: 'Tiger', isCorrect: false },
// 				{ answerText: 'Cheetah', isCorrect: true },
// 				{ answerText: 'Giraffe', isCorrect: false },
// 				{ answerText: 'Wolf', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'Which of these is the fastest fish?',
// 			answerOptions: [
// 				{ answerText: 'Shark', isCorrect: false },
// 				{ answerText: 'Flying Fish', isCorrect: false },
// 				{ answerText: 'Tuna', isCorrect: false },
// 				{ answerText: 'Sailfish', isCorrect: true },
// 			],
// 		},
// 		{
// 			questionText: 'What is the fastest bird?',
// 			answerOptions: [
// 				{ answerText: 'Stork', isCorrect: false },
// 				{ answerText: 'Eagle', isCorrect: false },
// 				{ answerText: 'Peregrine Falcon', isCorrect: true },
// 				{ answerText: 'Hawk', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'Which of these is the shortest time span?',
// 			answerOptions: [
// 				{ answerText: 'Century', isCorrect: false },
// 				{ answerText: 'Decade', isCorrect: true },
// 				{ answerText: 'Millennium', isCorrect: false },
// 				{ answerText: 'A dozen years', isCorrect: false },
// 			],
//     },
//     {
// 			questionText: 'Which of these is the shortest measurement of length?',
// 			answerOptions: [
// 				{ answerText: 'Inch', isCorrect: false },
// 				{ answerText: 'Centimetre', isCorrect: true },
// 				{ answerText: 'Metre', isCorrect: false },
// 				{ answerText: 'Gramme', isCorrect: false },
// 			],
//     },
//     {
// 			questionText: 'Which of these words best completes this sentence grammatically: He _______ dodged the speeding car.',
// 			answerOptions: [
// 				{ answerText: 'fastly', isCorrect: false },
// 				{ answerText: 'neither of these', isCorrect: false },
// 				{ answerText: 'either of these', isCorrect: false },
// 				{ answerText: 'quickly', isCorrect: true },
// 			],
//     },
//     {
// 			questionText: 'Which of these things most likely takes up the least time?',
// 			answerOptions: [
// 				{ answerText: 'Reading a novel with at least 300 pages', isCorrect: false },
// 				{ answerText: 'Watching a movie', isCorrect: false },
// 				{ answerText: 'Driving from Los Angeles to New York', isCorrect: false },
// 				{ answerText: 'Taking a shower', isCorrect: true },
// 			],
//     },
//     {
// 			questionText: 'What is the shortest sentence in the English language?',
// 			answerOptions: [
// 				{ answerText: 'None of these', isCorrect: false },
// 				{ answerText: 'I am.', isCorrect: false },
// 				{ answerText: 'Go!', isCorrect: true },
// 				{ answerText: 'A.', isCorrect: false },
// 			],
//     },
//     {
// 			questionText: 'Of the following, who was the shortest U.S. president?',
// 			answerOptions: [
// 				{ answerText: 'James Madison', isCorrect: true },
// 				{ answerText: 'Abraham Lincoln', isCorrect: false },
// 				{ answerText: 'William Henry Harrison', isCorrect: false },
// 				{ answerText: 'George Washington', isCorrect: false },
// 			],
//     },
//     {
// 			questionText: 'Which of the following US presidents served for the shortest amount of time?',
// 			answerOptions: [
// 				{ answerText: 'James Madison', isCorrect: false },
// 				{ answerText: 'William Henry Harrison', isCorrect: true },
// 				{ answerText: 'George Washington', isCorrect: false },
// 				{ answerText: 'Abraham Lincoln', isCorrect: false },
// 			],
// 		},
//   ];
  
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //      history.push('/dashboard');
  //    }, 3000);
  //  },[]);
  
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  // const [score, setScore] = useState(0);
  // const [value, setValue] = React.useState('');
  
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  
  // const handleAnswerOptionClick = (isCorrect) => {
	// 	if (isCorrect) {
	// 		setScore(score + 1);
	// 	}

	// 	const nextQuestion = currentQuestion + 1;
	// 	if (nextQuestion < questions.length) {
	// 		setCurrentQuestion(nextQuestion);
	// 	} else {
	// 		setShowScore(true);
	// 	}
  // };
  
  // const handleScoreClick = () => {
  //   setShowScore(true);
  // }

	// return (
  //   <Card className={classes.root}>

	// 		{/* {showScore ? (
  //       <Button>
	// 			  <FormControl className={classes.root}>You scored {score} out of {questions.length}</FormControl>
  //         </Button>
	// 		) : ( */}
  //       <div className={classes.root}>
				
  //         <CardContent>
  //         Question {currentQuestion + 1}/{questions.length}
  //            </CardContent>
  //            <FormControl component="fieldset" >{questions[currentQuestion].questionText}
  //               <RadioGroup value={value} onChange={handleChange}>
  //             {questions[currentQuestion].answerOptions.map((answerOption) => (
  //                 <FormControlLabel onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} 
  //                     control={<Radio />} label={answerOption.answerText}> </FormControlLabel>
  //               ) )}
  //               </RadioGroup>
  //           </FormControl>
            
  //           <button className={classes.root} onClick={handleScoreClick}>
  //           {/* { showScore ? <Results /> : null } */}
  //         </button>
  //     </div>
	// 		{/* )} */}
  //     </Card>
      
      // const Results = () => (
      //   <div id="results" className="search-results">
      //     Some Results
      //   </div>
      // )
// 	);
// }
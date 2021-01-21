import React from 'react';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



export default function Results() {
    const useStyles = makeStyles((theme ) => ({
        root: {
            minHeight: '250px',
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
            margin: 'auto',
        }
      }));
    const classes = useStyles()
    const history = useHistory()
    const scores = JSON.parse(localStorage.getItem('scores'))
    
    const handlePlayAgainClick = () => {
        history.push('/questions')
    }
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                {scores.map((score, index) => (
                    <div>Game #{index + 1} - Score: {score}</div>
                ))}
                </CardContent>
                <Button className={classes.btn} variant="contained" color="secondary" onClick={() => handlePlayAgainClick()}>Play Again</Button>
                
            </Card>
        </div>
    )
}

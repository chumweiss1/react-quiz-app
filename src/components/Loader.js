import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
      
      '& > * + *': {
        marginLeft: theme.spacing(0),
      },
    },
  }));
  

export default function Loader() {
    
    const classes = useStyles();
    
    const history = useHistory();
    setTimeout(()=> {
        history.push('/questions')
    },5000)
    
    return (
        <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    )
}

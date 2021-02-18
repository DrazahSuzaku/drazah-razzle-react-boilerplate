// CORE START
import React from 'react';
// CORE END

import {makeStyles} from '@material-ui/core/styles';
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
    waitForIt: {
        zIndex: theme.zIndex.drawer + 1,
        color: 'black',
    },
}));

const LoadingGeneral = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.waitForIt}>
            <p>Loading</p>
        </Grid>
    )

};

export default LoadingGeneral;
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";

// STYLE START
const useStyles = makeStyles((theme) => ({
    allWidth: {
        display: 'flex',
        flex: '1 100%'
    },
}));

const CardSessionGhost = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignitems="center"
            spacing={3}
        >
            <Grid
                item
                xs={12}
                sm={6}>
                <Card variant="outlined" className={classes.cards}>
                    <CardContent>
                        <Typography variant="h6" color="primary" gutterBottom>
                            <Skeleton/>
                        </Typography>
                        <Typography gutterBottom>
                            <Skeleton/>
                        </Typography>
                        <Typography color="textPrimary" gutterBottom>
                            <Skeleton/>
                        </Typography>
                        <Typography color="textPrimary" gutterBottom>
                            <Skeleton/>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Grid className={classes.allWidth}>
                            <Button className={classes.allWidth} variant="outlined"
                                    color="secondary"
                                    size="small">
                                <Skeleton variant="rect" width={"100%"}/>
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>)

};

export default CardSessionGhost;
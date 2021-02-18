import React, {useEffect, useState} from "react";
import {getDate, isArrayEmpty, isNotUndefined} from "../../../services/UtilService";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";

import {Link as RouterLink} from 'react-router-dom';
import Link from "@material-ui/core/Link";


const CardSessions = (data) => {

    const sessions = data.sessions;

    const classes = useStyles();
    if (sessions === undefined || sessions.length === 0) {
        return null;
    }

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignitems="center"
            spacing={3}
        >
            {isNotUndefined(sessions) && !isArrayEmpty(sessions) ?
                sessions.map((session, index) => {
                    const startingDate = getDate(session.createdAt);
                    const updatingDate = getDate(session.updatedAt);
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            key={index}
                        >
                            <Card variant="outlined" className={classes.cards}>
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        <strong> [ <em>{session.campaign.name}</em> ]</strong> : <strong>{session.name}</strong>
                                    </Typography>

                                    <div className={classes.chips}>
                                        {
                                            isNotUndefined(session.players) && !isArrayEmpty(session.players) ? (


                                                session.players.map((player, index) => {
                                                    return <Chip key={index} label={player.name} variant="outlined"
                                                                 color="primary"/>
                                                })


                                            ) : null
                                        }
                                    </div>


                                    <Typography color="textPrimary" gutterBottom>
                                        <strong>Date de départ :</strong> {startingDate}
                                    </Typography>
                                    <Typography color="textPrimary" gutterBottom>
                                        <strong>Date dernière action :</strong> {updatingDate}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link component={RouterLink} to={ROUTE_GAME_BASE + '/' + session.id}
                                          className={classes.allWidth}>
                                        <Button
                                            className={classes.allWidth}
                                            color="primary"
                                            variant="contained"
                                            size="small"
                                        >
                                            Continuer la
                                            Session
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>)
                }) :
                <Skeleton/>
            }
        </Grid>
    )
};

export default CardSessions;
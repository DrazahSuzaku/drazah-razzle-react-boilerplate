// CORE START
import React, {Suspense, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';

// UI START
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import history from "@core/history";
import {useMutation, useQuery} from "react-query";
import HttpClient from "@core/httpClient";
import * as yup from 'yup';
import {ROUTE_MAIN_LANDING, ROUTE_API_LOGIN_CHECK} from "@core/routes";
// CORE END

// ASSETS START
import signinPageStyles from "./SigninPageStyle";
import {useTranslation} from "react-i18next";
// ASSETS END
// UI END

// CONFIG START
const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});
// CONFIG END

// LINKED LOCAL MODULES START
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Drazah
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// LINKED LOCAL MODULES END


// MAIN MODULE START
const SigninPage = () => {

    const classes = signinPageStyles();
    const {t} = useTranslation(['auth']);

    const {register, errors, handleSubmit} = useForm({
        criteriaMode: "all"
    });

    const loginAction = useMutation(
        loginParams => {
            return HttpClient.post(ROUTE_API_LOGIN_CHECK, loginParams);
        }, {
            onSuccess: (response) => {
                if (response.status === 204) {
                    const location = {
                        pathname: ROUTE_MAIN_LANDING,
                    };
                    history.push(location)
                }
            }
        }
    );

    const onSubmit = (loginData) => {
        if (loginSchema.validate(loginData)) {
            loginAction.mutate(loginData);
        }
    };

    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        {t('auth:connexion')}
                    </Typography>

                    <form className={classes.form} onSubmit={handleSubmit((data) => onSubmit(data))} noValidate>

                        <TextField
                            error={!!errors.email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={t('auth:email')}
                            name="username"
                            autoComplete="email"
                            autoFocus
                            inputRef={register({
                                required:  t('auth:requiredField'),
                                pattern: {
                                    value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                    message: "Ce n'est pas un format d'Email valide"

                                }
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({messages}) => {
                                const errorArray = [];
                                if (messages) {
                                    for (const message of Object.entries(messages)) {
                                        errorArray.push(message[1]);
                                    }
                                }
                                return messages
                                    ? errorArray.map((message, key) => (
                                        <p key={key}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                        <TextField
                            error={!!errors.email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={t('auth:password')}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={register({
                                required: t('auth:requiredField'),
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({messages}) => {
                                const errorArray = [];
                                if (messages) {
                                    for (const message of Object.entries(messages)) {
                                        errorArray.push(message[1]);
                                    }
                                }
                                return messages
                                    ? errorArray.map((message, key) => (
                                        <p key={key}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {
                                (loginAction.isLoading === false) ?  t('auth:connexion') : (
                                    <CircularProgress style={{'color': 'white'}}/>
                                )
                            }

                        </Button>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>

    );
};

// MAIN MODULE END


export default SigninPage;
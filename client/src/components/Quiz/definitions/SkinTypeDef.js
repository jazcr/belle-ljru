import React from "react";
import { Box, Grid, Card, CardContent, Button, Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
//import BackButton from "../BackButton";

const useStyles = makeStyles(theme => ({
    cardContainer: {
        backgroundColor: 'rgb(230, 224, 215)',
        color:'black',
        boxShadow: '0 15px 20px #7DC8D0, 0 15px 12px rgba(0,0,0,0.22)',
        borderRadius: '15%'
    },
    title: {
        fontSize: '200%',
        textAlign: 'center',
        marginTop:'5px'
    },
    content: {
        fontSize: '100%',
        textAlign: 'center'
    }

}))

const OilyDef = ({title, content, onBackClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.oily}>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Typography className={classes.title} style={{fontSize:'200%', textAlign:'center'}}> {title} </Typography>
                  <br />
                    <Typography className={classes.content}> {content} </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

const DryDef = ({title, content, onBackClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.oily}>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Typography className={classes.title}> {title} </Typography>
                    <br />
                    <Typography className={classes.content}> {content} </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

const ComboDef = ({title, content, onBackClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.oily}>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Typography className={classes.title}> {title} </Typography>
                    <br />
                    <Typography className={classes.content}> {content} </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export { OilyDef, DryDef, ComboDef }
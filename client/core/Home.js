import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import vergil from './../assets/images/vergil.png'

const styles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    }
}));

export default function Home() {
    const classes = styles();
    return(
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Home Page
            </Typography>
            <CardMedia className={classes.media} image={vergil} title="Vergil" />
            <CardContent>
                <Typography variant="body2" component="p">
                    Welcome to the MERN Scaffold home page.
                </Typography>
            </CardContent>
        </Card>
    );
}

import React from 'react'

import { Grid, Paper, Avatar, Typography } from '@material-ui/core'

import classes from './style/ThreadPreviewStyle'

function ThreadPreview(props) {
    return (
        <Paper className={classes.paper}>
            <Grid container wrap='nowrap' spacing={2}>
                <Grid item>
                    <Avatar>{props.author.AuthorName[0].toUpperCase()}</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                    <Typography noWrap align='left'>{props.title}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ThreadPreview;
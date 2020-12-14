import React from 'react'

import { Grid, Paper, Avatar, Typography, Box } from '@material-ui/core'

import { getThread } from './api/threadAPI'

import style from './style/ThreadPreviewStyle'

function ThreadPreview(props) {
    const classes = style();
    const handleClick = () => {
        console.log(props.title)
    }
    return (
        <Box className={classes.box}>
            <Paper className={classes.paper} onClick={handleClick}>
                <Grid container wrap='nowrap' spacing={2}>
                    <Grid item>
                        <Avatar>{props.author.AuthorName[0].toUpperCase()}</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap align='left'>{props.title}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}


export async function getThreadPreviews(threadIDs) {
    console.log('Getting previews')
    let threadPreviews = [];
    for (const id in threadIDs) {
        let res = await getThread(threadIDs[id])
        console.log(res);
        const author = {
            AuthorName: res.thread.AuthorUsername,
            AuthorID: res.thread.AuthorID
        }
        threadPreviews.push(<ThreadPreview author={author} title={res.thread.Title} />)
    }
    console.log('Got previews\n')
    console.log(threadPreviews)
    return threadPreviews;
}

export default ThreadPreview;
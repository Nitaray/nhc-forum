import React, { useState } from 'react'

import { Grid, Paper, Avatar, Typography, Box } from '@material-ui/core'

import { getThread } from './api/threadAPI'

import style from './style/ThreadPreviewStyle'
import { Redirect } from 'react-router-dom';

function ThreadPreview(props) {
    const classes = style();
    const [clicked, setClick] = useState(false);
    const handleClick = () => {
        setClick(true);
    }
    return (
        clicked ? (
            <Redirect to={{
                pathname: '/thread',
                state: {
                    id: props.id
                }
            }}/>
        ) : (
            <Box className={classes.box}>
                <Paper className={classes.paper} onClick={handleClick}>
                    <Grid container wrap='nowrap' spacing={2}>
                        <Grid item>
                            <Avatar>{props.author.AuthorName[0].toUpperCase()}</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap align='left'>
                                <Box fontWeight='fontWeightBold'>
                                    {props.title}
                                </Box>
                                <Box fontStyle='italic'>
                                    {props.author.AuthorName}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        )
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
        threadPreviews.push(<ThreadPreview id={threadIDs[id]} author={author} title={res.thread.Title} dateCreated={res.thread.CreationDate} />)
    }
    console.log('Got previews\n')
    console.log(threadPreviews)
    return threadPreviews;
}

export default ThreadPreview;
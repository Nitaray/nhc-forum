import React from 'react'

import { Grid, Paper, Avatar, Typography, Box } from '@material-ui/core'

import { getComment } from './api/commentAPI'

import style from './style/CommentStyle'

function Comment(props) {
    const classes = style();
    return (
        <Box className={classes.box}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar>{props.author.AuthorName[0].toUpperCase()}</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography align='left'>{props.content}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}


export async function getComments(commentIDs) {
    console.log('Getting comments')
    console.log(commentIDs)
    let comments = [];
    for (const id in commentIDs) {
        let res = await getComment(commentIDs[id])
        console.log(res);
        const author = {
            AuthorName: res.comment.AuthorUsername,
            AuthorID: res.comment.AuthorID
        }
        comments.push(<Comment id={commentIDs[id]} author={author} content={res.comment.Content} dateCreated={res.comment.CreationDate}/>)
    }
    console.log('Got comments\n')
    console.log(comments)
    return comments;
}

export default Comment;
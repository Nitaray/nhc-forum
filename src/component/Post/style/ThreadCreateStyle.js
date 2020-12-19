const style = (theme) => ({
    paper: {
        maxWidth: 'vw',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },

    textfield: {
        width: '100%',
    },

    button: {
        width: '100%',
        color: 'white',
        backgroundColor: theme.palette.success.main
    }
});

export default style;
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: 'vw',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        borderWidth: 10,
        borderColor: 'black'
    },
}));

export default useStyles;
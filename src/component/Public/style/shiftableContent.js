import { drawerWidth } from './navBar'

const style = (theme) => ({
    root: {
        display: 'flex',
        height: "100vh",
        backgroundImage: 'url(https://wallpaperaccess.com/full/1682029.jpg)',
        backgroundPosition: 'center',
    },
    bodyBox: {
        paddingTop: '6em',
    },
    bodyBoxShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
})

export default style
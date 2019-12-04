import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Link from '../../src/Link'
import { getLinkAlias } from '../utils/getLinkAlias'

import ListItem from '@material-ui/core/ListItem'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: 0,
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0
  },
  toolbarLink: {
    width: '100%'
  }
}))
function ResponsiveDrawer (props) {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  function handleDrawerToggle () {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <List>
        {props.sections.map(section => (
          <ListItem button key={section.page}>
            <Link
              color="inherit"
              noWrap
              as={getLinkAlias(section.page, section.as)}
              key={section.page}
              variant="body1"
              href={section.page}
              className={classes.toolbarLink}
            >
              {section.label}
            </Link>
          </ListItem>
        ))}

        {/* {links.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  )
  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="js">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Eredi Monticelli
              </Typography>
              <IconButton
                color="inherit"
                aria-label="Apri menu"
                edge="end"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  sections: PropTypes.array
}
export default ResponsiveDrawer

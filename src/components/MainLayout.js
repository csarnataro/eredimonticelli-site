import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby-theme-material-ui'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import Obfuscate from 'react-obfuscate'
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import theme from '../theme'
import Copyright from './Copyright'
import customComponents from './CustomMdxComponents'

const sections = [
  { label: 'Home', page: '/', as: '/' },
  { label: 'Prodotti', page: '/it/tranciati-in-legno' },
  { label: 'Mobili agriturismo', page: '/it/mobili-per-agriturismo' },
  { label: 'Metodo', page: '/it/metodo' },
  { label: 'Dove siamo', page: '/it/dove-siamo' },
  { label: 'Contatti', page: '/it/contatti' }
]

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    overflowX: 'auto',
    marginBottom: theme.spacing(2)
  },
  toolbarTitle: {
    flex: 1,
    padding: '20px'
  },
  toolbarLink: {
    padding: theme.spacing(1, 1, 0, 1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: `auto -${theme.spacing(4)}px`,
    [theme.breakpoints.down('sm')]: {
      margin: 'auto -24px'
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0)
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      marginTop: '56px'
    }
  },
  slogan: {
    ...theme.typography.body2
  },
  main: {
    padding: theme.spacing(2)
  }
}))

const DEFAULT_HERO_URL = 'https://source.unsplash.com/jFCViYFYcus/900x220'

export default function MainLayout ({ pageContext, children }) {
  const classes = useStyles()
  const pageTitle = pageContext.frontmatter && pageContext.frontmatter.title
    ? pageContext.frontmatter.title
    : 'Eredi Monticelli'

  const heroBgUrl = pageContext.frontmatter && pageContext.frontmatter.heroBg
    ? pageContext.frontmatter.heroBg
    : DEFAULT_HERO_URL

  const heroStyle = {
    backgroundImage: `url(${heroBgUrl})`
  }

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={{ ...customComponents }}>
        <CssBaseline />
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageContext.frontmatter.description} />
          <meta name="keywords" content={pageContext.frontmatter.keywords} />
          <meta name="author" content="Christian Sarnataro" />
          <style type="text/css">{`
            body {
              background-image: url(/images/bg.jpg);
            }
        `}</style>
        </Helmet>
        <Container fixed maxWidth="md" className={classes.container}>
          <ResponsiveDrawer sections={sections} />
          <Hidden xsDown implementation="js">

            {/* Main featured post */}
            <Paper style={heroStyle} className={`${classes.mainFeaturedPost}`} square>
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography
                      component="h1"
                      variant="h3"
                      color="inherit"
                      gutterBottom
                    >
                      Eredi Monticelli
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      Tranciati in legno di qualità
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            {/* End main featured post */}

            <Toolbar component="nav" variant="dense" className={classes.toolbar}>
              {sections.map(section => (
                <Link
                  color="inherit"
                  noWrap
                  to={section.page}
                  key={section.page}
                  variant="body1"
                  href={section.page}
                  className={classes.toolbarLink}
                >
                  {section.label}
                </Link>
              ))}
            </Toolbar>
          </Hidden>
          <main className={classes.main}>{children}</main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Container maxWidth="lg">
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                className={classes.slogan}
              >
              &gt;&gt; Il naturale equilibrio del legno &lt;&lt;
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="secondary"
                component="p"
              >
              Eredi Monticelli s.n.c. - Via XXV Aprile 11, Primaluna (LC)
              - {<Obfuscate email={process.env.EMAIL} />}
              </Typography>
              <Copyright />
            </Container>
          </footer>
          {/* End footer */}

        </Container>
      </MDXProvider>
    </ThemeProvider>

  )
}

MainLayout.propTypes = {
  children: PropTypes.array.isRequired,
  pageContext: PropTypes.object.isRequired
}

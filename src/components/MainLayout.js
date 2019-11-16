import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "../../src/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Copyright from "./Copyright";

const sections = [
  {label: "Home", page: "/index", as: '/'},
  {label: "Prodotti", page: "/it/tranciati-in-legno"},
  {label: "Mobili agriturismo", page: "/it/mobili-per-agriturismo"},
  {label: "Metodo", page: "/it/metodo"},
  {label: "Dove siamo", page: "/it/dove-siamo"},
  {label: "Contatti", page: "/it/contatti"},
];

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "space-between",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  toolbarTitle: {
    flex: 1,
    padding: "20px"
  },
  toolbarLink: {
    padding: theme.spacing(1, 1, 0, 1),
    flexShrink: 0,
    borderBottom: '4px solid gray'

  },

  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundImage: "url(https://source.unsplash.com/jFCViYFYcus/900x220)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    margin: `auto -${theme.spacing(4)}px`,
  },
  index: {
    backgroundImage: "url(https://source.unsplash.com/jFCViYFYcus/900x220)",
  },
  contacts: {
    backgroundImage: "url(https://source.unsplash.com/u3ajSXhZM_U/900x220)",
  },
  where: {
    backgroundImage: "url(https://source.unsplash.com/mHe5VpKhjOo/900x220)",
  },
  products: {
    backgroundImage: "url(https://source.unsplash.com/lQQ4FtSYjEo/900x220)",
  },
  method: {
    backgroundImage: "url(https://source.unsplash.com/guH91yuPaMk/900x220)",
  },
  furnitures: {
    backgroundImage: "url(https://source.unsplash.com/ryO9maYr4rY/900x220)",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0)
  },
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  slogan: {
    ...theme.typography.body2
  }
}));

export default ({ children, pageType = 'index' }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Container fixed maxWidth="md" className={classes.container}>
        {/* Main featured post */}
        <Paper className={`${classes.mainFeaturedPost} ${classes[pageType]}`} square>
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
              as={section.as || section.page}
              key={section.page}
              variant="body1"
              href={section.page}
              className={classes.toolbarLink}
            >
              {section.label}
            </Link>
          ))}
        </Toolbar>
        <main>{children}</main>
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
              color="textSecondary"
              component="p"
            >
              Eredi Monticelli s.n.c. - Via XXV Aprile 11, Primaluna (LC)
            </Typography>
            <Copyright />
          </Container>
        </footer>
        {/* End footer */}

      </Container>
    </React.Fragment>
  );
};

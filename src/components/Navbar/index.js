import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const GradientAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  height: 60,
}));

const RoundedButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: "8px 16px",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.1)",
    transition: "background-color 0.3s",
  },
}));

const BoldTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
}));

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "16px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  listItem: {
    
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      background: "rgba(255,255,255, 0.25)",
    },
  },
});

function Navbar() {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <GradientAppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={drawerOpen} onClose={closeDrawer}>
            <GradientAppBar position="static" color="transparent">
              <Toolbar>
                <Typography variant="h6">Menu</Typography>
              </Toolbar>
            </GradientAppBar>
            <List>
              <ListItem
                button
                className={classes.listItem}
                onClick={closeDrawer}
              >
                <Link to="/home" className={classes.link}>
                  <ListItemText
                    primary={
                      <Typography variant="body1" style={{ fontWeight: 600 }}>
                        Home
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
              <ListItem
                button
                className={classes.listItem}
                onClick={closeDrawer}
              >
                <Link to="/music" className={classes.link}>
                  <ListItemText
                    primary={
                      <Typography variant="body1" style={{ fontWeight: 600 }}>
                        Music
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
              <ListItem
                button
                className={classes.listItem}
                onClick={closeDrawer}
              >
                <Link to="/shop" className={classes.link}>
                  <ListItemText
                    primary={
                      <Typography variant="body1" style={{ fontWeight: 600 }}>
                        Shop
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
              <ListItem
                button
                className={classes.listItem}
                onClick={closeDrawer}
              >
                <Link to="/contact" className={classes.link}>
                  <ListItemText
                    primary={
                      <Typography variant="body1" style={{ fontWeight: 600 }}>
                        Contact
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
            </List>
          </Drawer>
          <BoldTypography
            variant="h6"
            className={classes.title}
            sx={{ flexGrow: 1 }}
          >
            E-commerce
          </BoldTypography>
          <RoundedButtonBase focusRipple className={classes.menuButton}>
            <BoldTypography variant="button" color="inherit">
              <Link to="/home" className={classes.link}>
                Home
              </Link>
            </BoldTypography>
          </RoundedButtonBase>
          <RoundedButtonBase focusRipple className={classes.menuButton}>
            <BoldTypography variant="button" color="inherit">
              <Link to="/music" className={classes.link}>
                Music
              </Link>
            </BoldTypography>
          </RoundedButtonBase>
          <RoundedButtonBase focusRipple className={classes.menuButton}>
            <BoldTypography variant="button" color="inherit">
              <Link to="/shop" className={classes.link}>
                Shop
              </Link>
            </BoldTypography>
          </RoundedButtonBase>
          <RoundedButtonBase focusRipple className={classes.menuButton}>
            <BoldTypography variant="button" color="inherit">
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </BoldTypography>
          </RoundedButtonBase>
        </Toolbar>
      </GradientAppBar>
    </div>
  );
}

export default Navbar;

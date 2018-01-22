import React from "react";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";

const Profile = props => {
  const { classes } = props;
  return (
    <div className={classes.profile}>
      <Avatar
        alt="Long Nguyen"
        src="https://cdn-images-1.medium.com/fit/c/100/100/0*bh4kZqN3bPPuk15J.jpg"
        className={classes.avatar}
      />
      <div className={classes.hero}>
        <Typography type="headline" gutterBottom>
          Long Nguyen
        </Typography>
        <Typography type="subheading" gutterBottom>
          University of Foreign Language Studies
        </Typography>
      </div>
    </div>
  );
};

const styles = theme => ({
  profile: {
    width: "660px",
    display: "flex"
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  }
});

export default withStyles(styles)(Profile);

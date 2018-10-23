import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function AvatarLogin(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
     
      <Avatar
        alt="Adelle Charles"
        src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

AvatarLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvatarLogin);

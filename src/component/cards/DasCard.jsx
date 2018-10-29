import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'
import './DasCard.css'

const styles = {
  card: {
    maxWidth: 345,
  },

 
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classNames(classes.card, 'boxRelative')}>
      <CardActionArea >
        <CardMedia

        image="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_960_720.png"
          className={classNames(classes.media, 'imageBox')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={'boxTeks'}> <h2>20/90</h2></div>
        </CardContent>
      </CardActionArea>
      <CardActions className={'display-box'}>
        <Button size="small" color="primary">
          Grap
        </Button>
        <Button size="small" color="primary">
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

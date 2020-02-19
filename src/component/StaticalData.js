import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#E66023',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontSize: '14px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      opacity: 1,
    },
    '&$tabSelected': {
      fontWeight: 'bold',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class StaticalData extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const repoLabel = (<div>
      <span>Repositories</span>
      <span className="bg-gray margin-left-5 padding-2">12</span>
    </div>);
    const starLabel = (<div>
      <span>Stars</span>
      <span className="bg-gray margin-left-5 padding-2">7</span>
    </div>);
    const followersLabel = (<div>
      <span>Followers</span>
      <span className="bg-gray margin-left-5 padding-2">3</span>
    </div>);
    const followingLabel = (<div>
      <span>Following</span>
      <span className="bg-gray margin-left-5 padding-2">2</span>
    </div>);
    return (
      <div>
        <Tabs
          value={value}
          onChange={this.handleChange}
          scrollable
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label={`Overview`}
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label={repoLabel}

          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label={starLabel}
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label={followersLabel}
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label={followingLabel}
          />
        </Tabs>
      </div>
    )
  }
}
export default withStyles(styles)(StaticalData);

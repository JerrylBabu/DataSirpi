import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabBack:{
      backgroundColor:'green'
  }
}));

export default function TabComponents( { TabOne , TabTwo , TabThree , ChangeTabs=null } ) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

    useEffect(() => {
        //  console.log(ChangeTabs,"tt");
        setValue(ChangeTabs)
        // console.log(value);
      }, [ChangeTabs])

  const handleChange = (event, newValue) => {
    //console.log(newValue);
    setValue(newValue);
  };

  return (
    <div class="tab-content">
    <div className={classes.root}>
      <AppBar position="static">

        <Tabs value={value} 
        variant="fullWidth" 
        textColor="white"
        className={classes.tabBack}
        TabIndicatorProps={{style: {background:'#ffff'}}}
        onChange={handleChange} 
        aria-label="simple tabs example" 
        centered>

          <Tab label="Basic" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
          <Tab label="Score" {...a11yProps(2)} />
          
        </Tabs>

      </AppBar>
      <div class="tab-content">
      <TabPanel value={value} index={0}>
        { TabOne }
      </TabPanel>
      <TabPanel value={value} index={1}>
        { TabTwo }
      </TabPanel>
      <TabPanel value={value} index={2}>
        { TabThree }
      </TabPanel>
      </div>
    </div>
    </div>
  );
}
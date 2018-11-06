import React from 'react';
import {AppBar, Tabs} from '@material-ui/core/';
import Tab from '@material-ui/core/Tab';

export default ({ muscles, category, onSelect }) => {
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0
  
    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : muscles[index - 1])
  
    return <AppBar position="static">
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group =>
        <Tab key={group} label={group} />
        )}
      </Tabs>
      </AppBar>
  }
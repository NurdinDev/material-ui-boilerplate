import * as React from 'react';
import ListItem from 'material-ui/List/ListItem';

export const ListItemLink = (props: any) => {
  return <ListItem button component="a" {...props} />;
};


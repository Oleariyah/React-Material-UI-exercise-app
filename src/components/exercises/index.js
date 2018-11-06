import React, { Fragment } from 'react';
import {Grid, Paper, Typography, List} from '@material-ui/core/';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core/';
import {Delete, Edit} from '@material-ui/icons/';
import { paper } from './style/style';
import Form from './form';

export default ({
    muscles,
    exercises,
    editMode,
    category,
    onSelect,
    exercise,
    exercise: {
      id,
      title = 'Welcome!',
      description = 'Please select an exercise from the list on the left.'
    },
    onDelete,
    onSelectEdit,
    onEdit
   }) =>
    <Grid container>
      <Grid item sm>
        <Paper style={paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group
              ? <Fragment key={group}>
                  <Typography
                    variant="headline"
                    color="secondary"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ id, title }) =>
                      <ListItem
                        key={id}
                        button
                        onClick={() => onSelect(id)}
                      >
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                        <IconButton color="primary" onClick={() => onSelectEdit(id)}>
                        <Edit />
                        </IconButton>
                        <IconButton color="primary" onClick={() => onDelete(id)}>
                        <Delete />
                        </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </List>
                </Fragment>
              : null
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={paper}>
        <Typography
        variant="display1"
        color="secondary"
        gutterButton
      >
        {title}
      </Typography>
        {editMode? 
          <Form
          key={id}
          exercise={exercise}
          muscles={muscles}
          onSubmit={onEdit}
          /> : 
          <Fragment>
          <Typography
            variant="subheading"
          >
            {description}
          </Typography>
          </Fragment>}
        </Paper>
      </Grid>
    </Grid>
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { button } from './style/style';

export default class extends Component{

    state = this.getInitState() 

    getInitState() {
        const {exercise} = this.props

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleSubmit = () => {
        //Todo Validate

        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state
        })

    }


    handleChange = name => ({target: {value}}) => {
        this.setState({
                [name]: value
        })

    }

    render() {
        
        const {title, description, muscles} = this.state,
              {exercise, muscles: categories} = this.props

        return (
            <form>
            <TextField
            id="standard-name"
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            fullWidth
            />
            <br/>
            <FormControl 
            fullWidth >
            <InputLabel htmlFor="muscle">Muscle</InputLabel>
            <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
          {categories.map(category => 
             <MenuItem value={category}>
             {category}
             </MenuItem>
            )}
          </Select>
            </FormControl>
            <br/>
            <TextField
            id="standard-name"
            label="Description"
            multiline
            row ="4" 
            value={description}
            onChange={this.handleChange('description')}
            margin="normal"
            fullWidth
            />
            <br/>
            <Button
            style={button}            
            variant= "raised"
            onClick={this.handleSubmit}
            disabled={!title || !muscles}
            color="primary">
            {exercise ? "Edit" : "Create"}
            </Button>
        </form>
        )
        
        }}

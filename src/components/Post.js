import React from "react";
import { Card, Typography, CardContent, CardActions, Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import PostModel from "./PostModel";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
    this.handleToggleModalOpen = this.handleToggleModalOpen.bind(this);
  }

  handleToggleModalOpen() {
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h3" component="h3">
              {this.props.post.title}
            </Typography>
            <Typography variant="body2">
              {this.props.post.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              onClick={this.handleToggleModalOpen}
              >
                DETAIL
              </Button>
            <Button size="small" variant="contained" color="primary">EDIT</Button>
            <Button 
              size="small"
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon/>}
              onClick={(e) => this.props.onDelete(this.props.post.id, e)}
            >
              DELETE
            </Button>
          </CardActions>
        </Card>
        <PostModel
          post={this.props.post}
          open={this.state.modalOpen}
          onClose={this.handleToggleModalOpen}
          onDelete={this.props.onDelete}
        />
      </div>
    );
  }
}

export default Post;
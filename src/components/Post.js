import React from "react";
import { Card, Typography, CardContent, CardActions, Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import PostModel from "./PostModel";
import EditForm from "./EditForm";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      editFormOpen: false,
      editFormInputs: {
          title: "",
          content: "",
      },
    }
    this.handleToggleModalOpen = this.handleToggleModalOpen.bind(this);
    this.handleToggleEditFormOpen = this.handleToggleEditFormOpen.bind(this);
    this.handleInputTitleChange = this.handleInputTitleChange.bind(this);
    this.handleInputContentChange = this.handleInputContentChange.bind(this);
  }

  handleToggleModalOpen() {
    this.setState({modalOpen: !this.state.modalOpen});
  }

  handleInputTitleChange(e) {
    const newInputs = Object.assign({}, this.state.editFormInputs)
    newInputs["title"] = e.target.value;
    this.setState({
        editFormInputs: newInputs
    });
  }

  handleInputContentChange(e) {
    const newInputs = Object.assign({}, this.state.editFormInputs)
    newInputs["content"] = e.target.value;
    this.setState({
      editFormInputs: newInputs
    });
  }

  handleToggleEditFormOpen() {
    this.setState({
      editFormOpen: !this.state.editFormOpen
    });
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
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={this.handleToggleEditFormOpen}
              >
                EDIT
            </Button>
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
        {this.state.editFormOpen &&
        <EditForm
          post={this.props.post}
          inputs={this.state.editFormInputs}
          onChangeTitle={this.handleInputTitleChange}
          onChangeContent={this.handleInputContentChange}
          onSubmit={this.props.onUpdate}
        />
        }
      </div>
    );
  }
}

export default Post;
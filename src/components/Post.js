import React from "react";
import { Card, Typography, CardContent, CardActions, Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

function Post(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" component="h3">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">DETAIL</Button>
        <Button size="small" variant="contained" color="primary">EDIT</Button>
        <Button size="small" variant="contained" color="secondary" startIcon={<DeleteIcon/>}>DELETE</Button>
      </CardActions>
    </Card>
  );
}

export default Post;
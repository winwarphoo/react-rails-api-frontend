import React from "react";
import { Modal, Grid, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const rand = () => Math.round(Math.random() * 20) - 10;

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    height: 500,
    backgroundColor: "#d9ded9",
    border: '0.5px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PostModel = (props) => {
  const classes = useStyles();
  const modalStyle = getModalStyle();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>{props.post.title}</h2>
      <p>{props.post.content}</p>
      <p>作成日時: {props.post.created_at}</p>
      <p>更新日時: {props.post.updated_at}</p>
      <Grid container>
        <Grid item xs={4}>
          <Button
            size="small"
            variant="contained"
            color="primary"
          >
            EDIT
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon/>}
            onClick={(e) => props.onDelete(props.post.id, e)}
          >
            DELETE
          </Button>
        </Grid>
        <Grid item xs={4}>
        <Button
          size="small"
          variant="contained"
          onClick={props.onClose}
        >
          CLOSE
        </Button>
        </Grid>
      </Grid>
    </div>
  );
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
    >
      {body}
    </Modal>
  );
}

export default PostModel;
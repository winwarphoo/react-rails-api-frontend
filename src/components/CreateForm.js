import React from "react";
import { TextField, Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const CreateForm = (props) => {
  return (
    <form>
      <TextField
        label="title"
        id="title"
        value={props.inputs["title"]}
        onChange={props.onChangeTitle}
      />
      <TextField
        label="content"
        id="content"
        value={props.inputs["content"]}
        onChange={props.onChangeContent}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon/>}
        onClick={props.onSubmit}
      >
        Send
      </Button>
    </form>
  );
}

export default CreateForm;
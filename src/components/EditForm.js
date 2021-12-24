import React from "react";
import{ Box,Grid, TextField, Button } from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";

const EditForm = (props) => {
  return (
    <Box mt={3}>
      <form>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              label="title"
              id="title"
              value={props.inputs["title"] || props.post["title"]}
              onChange={props.onChangeTitle}
             />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="content"
              id="content"
              value={props.inputs["content"] || props.post["content"]}
              onChange={props.onChangeContent}
            />
          </Grid>
          <Box mt={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon/>}
                onClick={(e) => props.onSubmit(props.post.id, props.inputs, e)}
              >
                UPDATE
              </Button>
            </Grid>
          </Box>
        </Grid>
      </form>
    </Box>
  );
}

export default EditForm;
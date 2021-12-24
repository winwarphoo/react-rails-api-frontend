import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import PostList from './components/PostList';
import CreateForm from './components/CreateForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createFormInputs: {
        title: "",
        content: "",
      },
      posts: [],
    }
    this.handleInputTitleChange = this.handleInputTitleChange.bind(this);
    this.handleInputContentChange = this.handleInputContentChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }

  get axios() {
    const axiosBase = require('axios');
    return axiosBase.create({
      baseURL: process.env.REACT_APP_DEV_API_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'
    });
  }

  componentDidMount() {
    this.axios.get('/posts')
      .then(results => {
        console.log(results);
        this.setState({
          posts: results.data
        });
      })
      .catch(data => {
        console.log(data);
      })
  }

  handleInputTitleChange(e) {
    const newInputs = Object.assign({}, this.state.createFormInputs)
    newInputs["title"] = e.target.value;
    this.setState({
      createFormInputs: newInputs
    });
  }
  handleInputContentChange(e) {
    const newInputs = Object.assign({}, this.state.createFormInputs);
    newInputs["content"] = e.target.value;
    this.setState({
      createFormInputs: newInputs
    });
  }
  handlePostSubmit(e) {
    e.preventDefault();
    if (this.state.createFormInputs["title"] && this.state.createFormInputs["content"]) {
      this.axios.post("/posts", {
        post: this.state.createFormInputs,
      })
        .then(res => {
          const posts = this.state.posts.slice();
          posts.push(res["data"]);
          this.setState({
            posts: posts,
            createFormInputs: {
              title: "",
              content: "",
            }
          });
        })
        .catch(data => {
          console.log(data)
        });
    }
  }

  handlePostDelete(id, e) {
    e.preventDefault();
    this.axios.delete(`/posts/${id}`)
      .then(res => {
        const targertIndex = this.state.posts.findIndex(post => {
          return post["id"] === res["data"]["id"]
        });
        const posts = this.state.posts.slice();
        posts.splice(targertIndex, 1);

        this.setState({
          posts: posts
        });
      })
      .catch(data => {
        console.log(data);
      });
  }

  handlePostUpdate(id, inputs, e) {
    e.preventDefault();
    const inputValues = Object.values(inputs);

    if (inputValues.every(value => value)) {
      this.axios.patch(`/posts/${id}`, {
        post: inputs
      })
        .then(results => {
          const posts = this.state.posts.slice();
          const index = posts.findIndex(post => post["id"] === id);
          posts[index] = results["data"];

          this.setState({
              posts: posts
          });
        })
        .catch(data => {
          console.log(data);
        });
    }
}

  render() {
    return (
      <div className="App">
        <Box p={5}>
          <CreateForm
            inputs={this.state.createFormInputs}
            onChangeTitle={this.handleInputTitleChange}
            onChangeContent={this.handleInputContentChange}
            onSubmit={this.handlePostSubmit}
          />
          <Box p={3}>
            <PostList
              posts={this.state.posts}
              onDelete={this.handlePostDelete}
              onUpdate={this.handlePostUpdate}
            />
          </Box>
          
        </Box>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import PostList from './components/PostList';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Box p={5}>
          <PostList />
        </Box>
      </div>
    );
  }
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostDetail } from './page/PostDetail';
import { Posts } from './page/Posts';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<PostDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

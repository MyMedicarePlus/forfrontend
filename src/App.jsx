import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import PostList from './components/PostList';
import Post from './components/Post';

function App() {
 
  return (
    <>
   
      <div className='content'>
      <Header></Header>
      <Post></Post>
      
      <Footer></Footer>
      </div>
    
    </>
  )
}

export default App

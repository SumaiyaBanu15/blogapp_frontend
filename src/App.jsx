import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';

function App() {
    const [posts, setPosts] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <div className="container">
            <Navbar onNewPost={() => setShowCreate(true)} />
            {showCreate && (
                <CreatePost 
                    onClose={() => setShowCreate(false)}
                    onPostCreated={fetchPosts}
                />
            )}
            <div className="row mt-4">
                {posts.map(post => (
                    <BlogPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default App;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   // Fetch posts from the backend
//   useEffect(() => {
//     axios.get('http://localhost:5000/posts')
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   // Submit a new post
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/posts', { title, content })
//       .then(response => {
//         setPosts([...posts, response.data]);
//         setTitle('');
//         setContent('');
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="App">
//       <h1>Blog Posts</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Comment"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <div className='btn-submit'> 
//         <button type="submit" >Add Post</button>
//         </div>
//       </form>
//       <div>
//         {posts.map(post => (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import BlogPost from './components/BlogPost';
// import CreatePost from './components/CreatePost';

// function App() {
//     const [posts, setPosts] = useState([]);
//     const [showCreate, setShowCreate] = useState(false);

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/posts');
            
//             // Check if response is OK
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setPosts(data);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <Navbar onNewPost={() => setShowCreate(true)} />
//             {showCreate && (
//                 <CreatePost 
//                     onClose={() => setShowCreate(false)}
//                     onPostCreated={fetchPosts}
//                 />
//             )}
//             <div className="row mt-4">
//                 {posts.map(post => (
//                     <BlogPost key={post.id} post={post} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;

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
            
            // Check if response is OK
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Refresh posts after delete
                fetchPosts();
            } else {
                console.error('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleEdit = async (id, updatedPost) => {
        try {
            const response = await fetch(`http://localhost:5000/api/posts/${id}`, {  // <-- Make sure id is passed correctly
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });
            if (response.ok) {
                // Refresh posts after edit
                fetchPosts();
            } else {
                console.error('Failed to edit post');
            }
        } catch (error) {
            console.error('Error editing post:', error);
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
                    <BlogPost 
                        key={post.id} 
                        post={post} 
                        onDelete={handleDelete} 
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

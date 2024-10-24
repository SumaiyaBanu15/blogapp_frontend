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

import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

function BlogPostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        setPosts(data);
    };

    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/posts/${postId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setPosts(posts.filter((post) => post.id !== postId));
                alert('Post deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleEdit = (post) => {
        // You can open an edit modal or navigate to an edit page here
        alert(`Edit functionality for post ID: ${post.id} not implemented yet.`);
    };

    return (
        <div className="row">
            {posts.map((post) => (
                <BlogPost
                    key={post.id}
                    post={post}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default BlogPostList;

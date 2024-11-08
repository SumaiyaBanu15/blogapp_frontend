import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CreatePost({ onClose, onPostCreated }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(''); // New state for image URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, image }), // Include image URL in the request
            });
            
            if (response.ok) {
                alert('Blog Created Successfully');  // Show alert
                onPostCreated();
                onClose();
            } else {
                console.error('Failed to create post:', await response.json());
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create New Post</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Content</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)} // Capture image URL
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Create Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Define prop types
CreatePost.propTypes = {
    onClose: PropTypes.func.isRequired,
    onPostCreated: PropTypes.func.isRequired
};

export default CreatePost;

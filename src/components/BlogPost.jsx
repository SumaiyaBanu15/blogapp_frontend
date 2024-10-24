import React from 'react';
import PropTypes from 'prop-types';

function BlogPost({ post }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    {/* Display the image if it exists */}
                    {post.image && (
                        <img
                            src={`http://localhost:5000/uploads/${post.image}`} 
                            alt={post.title}
                            className="card-img-top"  // Optional: use Bootstrap class for styling
                        />
                    )}
                    <p className="card-text">{post.content}</p>
                    <small className="text-muted">
                        Posted on: {new Date(post.created).toLocaleDateString()}
                    </small>
                </div>
            </div>
        </div>
    );
}

// Define prop types
BlogPost.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
        image: PropTypes.string  // Added image prop type
    }).isRequired
};

export default BlogPost;

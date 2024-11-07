import React from 'react';
import PropTypes from 'prop-types';

function BlogPost({ post, onDelete, onEdit }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    {post.image && (
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
                    )}
                    <small className="text-muted">
                        Posted on: {new Date(post.created).toLocaleDateString()}
                    </small>
                    <div className="mt-3">
                        <button onClick={() => onEdit(post)} className="btn btn-warning me-2">Edit</button>
                        <button onClick={() => onDelete(post.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

BlogPost.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        image: PropTypes.string,  // Ensure image prop is optional as some posts may not have images
        created: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default BlogPost;

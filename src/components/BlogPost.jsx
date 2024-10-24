import React from 'react';

function BlogPost({ post }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <small className="text-muted">
                        Posted on: {new Date(post.created).toLocaleDateString()}
                    </small>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;

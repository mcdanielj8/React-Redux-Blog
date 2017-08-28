import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, post => {
			return (
				<li className="white list-group-item" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						{post.title}
					</Link>
				</li>
			);
		})
	}

	render(){
		return (
			<div className="white">
				<div className="white text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add your Zen
					</Link>
				</div>
				<h3>Zen Blog</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	};
};


function mapStateToProps(state) {
	return {posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex); 
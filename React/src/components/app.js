import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCategory } from '../actions';

class App extends Component {

	componentWillMount() {
		this.props.showCategory()
	}

	categoryContent() {
		console.log('teste')
	}

	renderCategoryList() {
		return this.props.category.map((category) => {
			return (
				<li>
					<a href="#" onClick={this.categoryContent}>{category}</a>
				</li>
				)
		})
	}

	render() {
	    return (
	      <div>
	      	<h2>Category List</h2>
	      	<ul>
	      		{ this.renderCategoryList() }
	      	</ul>
	      </div>
	    );
	  }
	}

function mapStateToProps(state) {
	return {
		category: state.category.list
	}
}

export default connect(mapStateToProps, { showCategory })(App)
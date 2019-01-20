import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '../shared/searchIcon'

class SearchBar extends PureComponent {
	state = {
		searchQuery: ''
	}

	_onChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			if(this.state.searchQuery === ''){
				this.props.clearSearch()
			}
		})
	}	

	_search = (e) => {
		e.preventDefault()
		this.props.search(this.state.searchQuery.split(' '))
	}
	
	render(){
		return(
			<form 
				onSubmit = {this._search}
				className = "searchForm">
				<input 
					name = {'searchQuery'}
					type = {'text'} 
					className = "searchInput"
					onChange = {this._onChangeHandler}
					/>
				<button
					className = "searchButton"
					type = "submit"
					value = "">
					<SearchIcon />
				</button>
			</form>
		)
	}
}


SearchBar.propTypes = {
	clearSearch: PropTypes.func.isRequired,
	search: PropTypes.func.isRequired
}

export default SearchBar
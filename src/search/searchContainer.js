import React, { PureComponent } from 'react' 
import PropTypes from 'prop-types';
import SearchListView from './searchListView'
import SearchBar from './searchBar'

class SearchContainer extends PureComponent{
	state = {
		matches: []
	}

	// for each entry, check if one of the query words are in the keywords property
	search = (searchQueryWords) => {
		const matches = this.props.cachedData.filter((data) => {
			return searchQueryWords.some((word) => {
				return data.keywords.search(word) >= 0
			})
		})
		this.setState({ matches: matches })
	}

	clearSearch = () => {
		this.setState({ matches: [] })
	}

	render(){
		return(
			<div className = "searchContainer">
				<SearchBar 
					search = {this.search}
					clearSearch = {this.clearSearch}
					/>
				<SearchListView
					matches = {this.state.matches}
					favourites = {this.props.favourites}
					toggleFavourite = {this.props.toggleFavourite}
				/>
			</div>
		)
	}
}

SearchContainer.propTypes = {
	favourites: PropTypes.object.isRequired,
	toggleFavourite: PropTypes.func.isRequired,
	cachedData: PropTypes.arrayOf(PropTypes.shape({
		body: PropTypes.string.isRequired,
		category: PropTypes.string,
		title: PropTypes.string.isRequired,
		keywords: PropTypes.string.isRequired
	})),
}

export default SearchContainer
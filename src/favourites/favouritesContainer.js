import React, { PureComponent } from 'react'
import FavouritesView from './favouritesView.js'
import PropTypes from 'prop-types'

class FavouritesContainer extends PureComponent{
	_findFavourite = () => {
		const favourites = this.props.cachedData.filter((item) => {
			return this.props.favourites.has(item.title)
		})
		return favourites
	}

	render(){
		return(
			<FavouritesView 
				favourites = {this._findFavourite()}
				toggleFavourite = {this.props.toggleFavourite}
			/>
		)
	}
}

FavouritesContainer.propTypes = {
	cachedData: PropTypes.arrayOf(PropTypes.shape({
		body: PropTypes.string.isRequired,
		category: PropTypes.string,
		title: PropTypes.string.isRequired,
		keywords: PropTypes.string.isRequired
	})),
	favourites: PropTypes.object.isRequired,
	toggleFavourite: PropTypes.func.isRequired
}

export default FavouritesContainer
import React from 'react'
import PropTypes from 'prop-types'
import ItemView from '../shared/itemView'

const FavouritesView = ({ favourites, toggleFavourite }) => (
	<div className = "favouritesContainer">
		<h2>
			Favourites
		</h2>
		{favourites.map((item) => (
			<ItemView 
				{...item} 
				key = {item.title}
				favourited = {true}
				toggleFavourite = {toggleFavourite}
			/>))}
	</div>
)

FavouritesView.propTypes = {
	favourites: PropTypes.array.isRequired,
	toggleFavourite: PropTypes.func.isRequired
}

export default FavouritesView
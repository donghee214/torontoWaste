import React from 'react'
import PropTypes from 'prop-types'
import ItemView from '../shared/itemView'

const SearchListView = ({ matches, favourites, toggleFavourite }) => {
	return (
		<div className = "listContainer">
			{matches.map((item) => 
				<ItemView 
					{...item} 
					key = {item.title}
					favourited = {favourites.has(item.title)}
					toggleFavourite = {toggleFavourite}
					/>
			)}
		</div>
)}

SearchListView.propTypes = {
	matches: PropTypes.array,
	favourites: PropTypes.object.isRequired,
	toggleFavourite: PropTypes.func.isRequired
}

export default SearchListView
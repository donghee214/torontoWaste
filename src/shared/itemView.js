import React from 'react'
import Favourite from './favourite'
import PropTypes from 'prop-types'
const ItemView = ({ body, title, keywords, favourited, toggleFavourite }) => {
	
	// parse the body text
	const renderHTML = (rawHTML) => {
		const unescapeHTML = (escapedHTML) => (
			escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"')
		)
		return React.createElement("div", { dangerouslySetInnerHTML: { __html: unescapeHTML(rawHTML) } })
	}

	return (
		<div className = 'itemContainer'>
			<div className = "iconContainer" onClick = {() => toggleFavourite(title)}>
				<Favourite 
					fill = {favourited ? '#23995C' : '#AAAAAA'}
				/>
			</div>
			<div className = "titleCol">
				<p>
					{title}
				</p>	
			</div>
			<div className = "descriptionCol">
				{renderHTML(body)}
			</div>
		</div>
	)
}

ItemView.propTypes = {
	body: PropTypes.string,
	title: PropTypes.string.isRequired,
	keywords: PropTypes.string.isRequired,
	favourited: PropTypes.bool.isRequired,
	toggleFavourite: PropTypes.func.isRequired
}

export default ItemView
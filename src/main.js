import React, { PureComponent } from 'react'
import SearchContainer from './search/searchContainer'
import FavouritesContainer from './favourites/favouritesContainer'
import Loading from './shared/loading'

class Main extends PureComponent{
	// all app-wide state management is done from this level
	constructor(props){
		super(props)
		this.state = {
			favourites: new Set(),
			cachedData: [],
			toggleFavourite: (title) => {
				if(this.state.favourites.has(title)){
					this.state.favourites.delete(title)
					const newFavourites = new Set(this.state.favourites)
					this.setState({ favourites: newFavourites })
				}
				else{
					this.state.favourites.add(title)
					const newFavourites = new Set(this.state.favourites)
					this.setState({ favourites: newFavourites })
				}
			}
		}
	}
	
	componentDidMount(){
		this._fetchData()
	}

	// fetch the data once on load and cache it to avoid making unnecessary calls
	_fetchData = async () => {
		let data = await fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
		let parsedData = await data.json()
		this.setState({ cachedData: parsedData })
	}

	render(){
		if(this.state.cachedData.length === 0){
			return <Loading />
		}
		return(
	  		<div className = 'mainContainer'>
	  			<SearchContainer 
	  				{...this.state}
	  			/>
	  			<FavouritesContainer 
	  				{...this.state}
	  			/>
	  		</div>
			)
		}
}



export default Main
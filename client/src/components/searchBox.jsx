import React from "react";
import axios from 'axios'
import {serverUrl} from '../config'


function SearchBox() {
	
	const [getSearch, setSearch] = React.useState("")
	/* Add Event Listeners */
	/* use Effect Runs Once after Components Render */
	const _token = `Bearer ${localStorage.getItem('assignment_access_token')}`;
	React.useEffect(() => {
		let element = document.getElementById("search_button");
		element.addEventListener(onclick, (event) => {
			let search_text = document.getElementById("inputBookSearch").value;
			// setSearch(search_text)
			// searchBooks(search_text)
			// const searchBooks = async (text) => {
			// 	console.log(`${serverUrl}/Books?search=${text}`)
			// 	let response = await axios.get(
			// 		`${serverUrl}/Books?search=${text}`,
			// 		{
			// 			headers: {
			// 				"Authorozation": _token
			// 			}
			// 		}
			// 	)
		
			// 	console.log(response.data)
			// }
		})
	})


	return (
		<>
			<div className="container mt-5">
				<form className="row g-3">
					<div className="col-auto">
						<label htmlFor="search_book" className="visually-hidden">Search Book</label>
						<input type="text" readOnly className="form-control-plaintext" id="search_book"/>
					</div>
					<div className="col-auto">
						<label htmlFor="inputBookSearch" className="visually-hidden">Search Book</label>
						<input type="text" className="form-control" onChange={(e) => setSearch(e.value)} id="inputBookSearch" placeholder="Search Books" />
					</div>
					<div className="col-auto">
						<label htmlFor="inputBookSearch" className="visually-hidden"></label>
						<input type="text" className="form-control" onChange={(e) => setSearch(e.value)} value={getSearch} id="inputBookSearch" placeholder="Search Books" />
					</div>
					<div className="col-auto">
						<button type="button"  id="search_button" className="btn btn-primary mb-3">Search</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default SearchBox;
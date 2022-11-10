import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTechFromFavoriteList } from "../redux/tech/actions";

import FavouriteItem from "./FavouriteItem";

const Favourites = () => {
	const techList = useSelector((state) => state.tech.tech);
	const dispatch = useDispatch();

	console.log(techList);

	const favouritesTech = techList.filter((tech) => tech.favorite === true);
	console.log(favouritesTech);

	const handleClick = (id) => {
		dispatch(removeTechFromFavoriteList(id));
	};

	const $oneFavTech = favouritesTech.map((tech) => {
		return <FavouriteItem key={tech.id} {...tech} onClick={handleClick} />;
	});

	return (
		<>
			<table style={{ border: "solid", borderCollapse: "collapse" }}>
				<thead>
					<tr>
						<td style={{ border: "solid", textAlign: "center" }}>
							Наименование
						</td>
						<td style={{ border: "solid", textAlign: "center" }}>Цена</td>
						<td style={{ border: "solid", textAlign: "center" }}>★</td>
					</tr>
				</thead>
				<tbody>{$oneFavTech}</tbody>
			</table>
		</>
	);
};

export default Favourites;

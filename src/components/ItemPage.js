import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
	addTechToFavoriteList,
	removeTechFromFavoriteList,
} from "../redux/tech/actions";

const ItemPage = () => {
	const [oneTech, setOneTech] = useState();
	const { id } = useParams();
	const dispatch = useDispatch();
	const techList = useSelector((state) => state.tech.tech);
	console.log(id);

	console.log(techList);

	useEffect(() => {
        console.log('работаю');
		const oneTech = techList.filter((tech) => tech.id === Number(id));
		console.log(oneTech);
		setOneTech(oneTech[0]);
	}, [techList, id]);

	return (
		<>
			{oneTech && (
				<>
					<h1>{oneTech.title}</h1>
					<p>Цена ${oneTech.price}</p>
					<button
						onClick={
							oneTech.favorite !== true
								? () => dispatch(addTechToFavoriteList(oneTech.id))
								: () => dispatch(removeTechFromFavoriteList(oneTech.id))
						}
					>
						{oneTech.favorite === true
							? "Удалить из избранного"
							: "В избранное"}
					</button>
				</>
			)}
		</>
	);
};

export default ItemPage;

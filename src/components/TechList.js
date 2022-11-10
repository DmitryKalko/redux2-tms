import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TechItem from "./TechItem";
import { deleteTech } from "../redux/tech/actions";

const TechList = (props) => {
	const dispatch = useDispatch();
	const techList = useSelector((state) => state.tech.tech);

	console.log(props);
	const handleClick = (id) => {
		dispatch(deleteTech(id));
	};

	const $items = techList.map((tech) => (
		<TechItem key={tech.id} {...tech} onClick={handleClick} />
	));

	return <>{$items}</>;
};

export default TechList;

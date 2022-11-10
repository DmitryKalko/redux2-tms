import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTech } from "../redux/tech/actions";

import TechList from "./TechList";
import FormCreate from "./FormCreate";

const TechPage = () => {
	const dispatch = useDispatch();

	const addingTech = (oneTech) => {
		console.log(oneTech);
		dispatch(addTech(oneTech));
	};
	return (
		<>
			<h3>Форма добавления техники</h3>
			<FormCreate saveTech={addingTech} />
			<br />
			<h3>Список техники</h3>
			<button style={{ backgroundColor: "yellow" }}>
				<Link to={`/favourites`} style={{ textDecoration: "none" }}>
					ИЗБРАННАЯ ТЕХНИКА
				</Link>
			</button>
			<br />
			<TechList />
		</>
	);
};

export default TechPage;

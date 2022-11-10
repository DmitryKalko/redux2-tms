import React, { useState } from "react";

const FormCreate = ({ saveTech }) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(null);

	const submitForm = (e) => {
		e.preventDefault();
		const oneTech = { title, price };
		saveTech(oneTech);
		e.target.reset();
	};

	return (
		<form onSubmit={submitForm}>
			Добавьте наименование товара
			<input
				type='text'
				name='title'
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Введите текст'
				autoComplete='off'
			/>
			<br />
			<br />
			Добавьте стоимость товара
			<input
				type='text'
				name='price'
				onChange={(e) => setPrice(e.target.value)}
				placeholder='Введите текст'
				autoComplete='off'
			/>
			<br />
			<br />
			<button>Добавить</button>
		</form>
	);
};

export default FormCreate;

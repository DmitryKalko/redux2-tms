import { Route, Routes } from "react-router-dom";

import TechPage from './components/TechPage';
import FavouritesPage from './components/FavouritesPage';
import ItemPage from './components/ItemPage';

const App = () => {
	return (
		<Routes>
      <Route path='/' element={<TechPage/>} />
			<Route path='/favourites' element={<FavouritesPage/>} />
			<Route path='/tech/:id' element={<ItemPage />} />
		</Routes>
	);
};
export default App;

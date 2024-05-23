import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Home = () => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-4xl title-font font-bold uppercase'>Recipe Dictionary</h1>
			<h4 className='text-2xl my-5'>Welcome to Recipe Dictionary! Search up your favourite dish for its recipe 😄</h4>
			<SearchBar />
		</div>
	);
};

export default Home;

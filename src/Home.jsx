import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Home = () => {
	return (
		<div className='flex flex-col items-center'>
			<Link to='/' className='text-4xl font-bold '>
				Recipe Dictionary
			</Link>
			<h4 className='text-2xl mt-10 mb-5'>Welcome to Recipe Dictionary! Search up your favourite dish for its recipe 😄</h4>
			<SearchBar />
		</div>
	);
};

export default Home;

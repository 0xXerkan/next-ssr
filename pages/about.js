import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
	return (
			<div style={{fontSize: '20px', color: 'blue' }}>
				<h1>About</h1>
				<div>
					<Image />				
				</div>
				<Link href='/'>
				<button>Home</button>
				</Link>
				<p>I was a magician once!</p>
			</div>
		);
}

export default About;
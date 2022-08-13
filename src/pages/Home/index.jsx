import './styles.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>HOME</h1>
      <Link to="/" />
    </div>
  );
}

export default Home;

import Navbar from '../components/Layout';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Bienvenido a mi aplicación</h1>
      </div>
    </div>
  );
}

export default Home;

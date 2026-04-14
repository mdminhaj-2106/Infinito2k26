import Hero from './hero';
import Content from './content';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Content2 from './content2';
const Spons = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <Hero />
      <Content />
      <Content2 />
      <Footer />
    </div>
  );
};

export default Spons;

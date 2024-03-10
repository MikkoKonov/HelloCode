import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import Footer from "../components/Footer/Footer";
import HistorySection from "../components/HistorySection/HistorySection";
import PageContentSection from "../components/PageContentSection/PageContentSection";
import MainSection from "../components/MainSection/MainSection";


const Home: React.FC = () => {
  return (
    <div>
      <MainSection/>
      <PageContentSection/>
      <HistorySection/>
      <AdvantagesSection/>
      <Footer/>
    </div>
  );
};

export default Home;
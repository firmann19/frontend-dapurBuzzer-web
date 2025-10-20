import Banner from "../components/Banner";
import Category from "../components/Category";
import PackageMicroInfluencer from "../components/PackageMikroInfluencer/PackageMicroInfluencer";
import OurClient from "../components/OurClient";
import Review from "../components/Review";
import InfluencerAll from "../components/Influencer/InfluencerAll";
import InfluencerRecomend from "../components/Influencer/InfluencerRecomend";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      <Banner />
      <Category />
      <InfluencerRecomend />
      <InfluencerAll />
      <PackageMicroInfluencer />
      <OurClient />
      <Review />
    </div>
  );
}

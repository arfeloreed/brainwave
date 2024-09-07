import { GoogleOAuthProvider } from "@react-oauth/google";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benifits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  if (!clientId) {
    console.error("Google OAuth Client ID is missing.");
    return <div>Error: Google OAuth Client ID is not defined.</div>;
  }

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Benifits />
          <Collaboration />
          <Services />
          <Pricing />
          <Roadmap />
          <Footer />
        </div>

        <ButtonGradient />
      </GoogleOAuthProvider>
    </>
  );
};

export default App;

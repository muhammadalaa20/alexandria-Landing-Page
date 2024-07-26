import Header from "@/components/Header";
import Home from "../../components/Home";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Footer from "@/components/Footer";

export default async function page() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  console.log(user, isUserAuthenticated);
  return (
    <>
      <Header 
        user={user}
        isAuthenticated={isUserAuthenticated}
      />
      <Hero/>
      <Home
        user={user}
        isAuthenticated={isUserAuthenticated}
      />
      <Carousel/>
      <Footer />
    </>
  )
}

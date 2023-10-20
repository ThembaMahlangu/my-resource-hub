import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Themba's Resource Hub</title>
      </Head>
      <div className="min-h-screen bg-blue-200">
        <Navbar />
        <main>
          <HomeHero />
        </main>
        <Footer />
      </div>
    </>
  )
}
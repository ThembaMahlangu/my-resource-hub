import Docs from "@/components/Docs";
import DynamicHero from "@/components/DynamicHero";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation | Themba's Resource Hub</title>
      </Head>
      <div className="min-h-screen bg-blue-200">
        <Navbar />
        <main>
          <div className="relative">
            <DynamicHero text1="Documentation" text2="Learn how to use the components" image={'/background.webp'} />
          </div>
          <div className="relative">
            <Docs />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
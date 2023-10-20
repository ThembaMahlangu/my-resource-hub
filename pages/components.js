import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import TabsContent from "@/components/TabsContent";
import Head from "next/head";

export default function Components() {
  return (
    <>
      <Head>
        <title>Components | Themba's Resource Hub</title>
      </Head>
      <div className="min-h-screen bg-blue-200">
        <Navbar />
        <main>
          <Table />
          <div className="pt-5">
            <TabsContent />
          </div>
          <div className="pt-5">
            
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
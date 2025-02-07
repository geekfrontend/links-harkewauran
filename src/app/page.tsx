import Hero from "@/components/shared/Hero";
import Links from "@/components/shared/Link/Links";
import { Separator } from "@/components/ui/separator";
import Layout from "@/layout";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Layout>
          <Layout.Header>
            <Hero />
          </Layout.Header>
          <Separator className="w-[80%] mx-auto my-4" />
          <Layout.Main>
            <div className="p-5">
              <Links />
            </div>
          </Layout.Main>
          <Separator className="w-[80%] mx-auto my-4" />
          <Layout.Footer />
        </Layout>
      </div>
    </>
  );
}

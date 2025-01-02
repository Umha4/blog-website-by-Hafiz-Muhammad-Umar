import Image from "next/image";
import { client, urlFor } from "@/sanity/lib/client";
import { simpleBlogCard } from "@/sanity/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HomeAboutPage from "./components/aboutme";
import AboutMeHome from "./components/aboutmehome";
import HomeContact from "./components/homecontact";
import CommentsSection from "./components/Commentsection";

// Fetch data from Sanity
async function getData() {
  const query = `
    *[_type == 'blog'][0...3] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array if there's an error
  }
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <main className="mx-auto max-w-screen-2xl overflow-x-hidden">
      {/* About Section */}
      <div>
        <HomeAboutPage />
        <AboutMeHome />
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 justify-center items-center px-10 text-slate-950">
        {data.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No blog posts available.</p>
        ) : (
          data.map((post, idx) => (
            <Card key={idx}>
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                width={500}
                height={300}
                className="rounded-t-lg object-cover"
                layout="responsive" // Ensures responsive image scaling
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2">{post.title}</h3>
                <p>{post.smallDescription}</p>
                <Button asChild className="w-full mt-7">
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Read More Button */}
      <div className="text-center mt-10">
        <Link href="/tblog">
          <button className="py-3 px-4 text-center font-bold bg-orange-400 rounded-sm border-x-black text-black">
            Read More Blog
          </button>
        </Link>
      </div>

      {/* Contact and Comments Section */}
      <HomeContact />
      <CommentsSection />
    </main>
  );
}

import { client, urlFor } from "@/sanity/lib/client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { simpleBlogCard } from "@/sanity/lib/interface";
import CommentsSection from "../components/Commentsection";

async function getData() {
  const query = `
    *[_type == 'blog']| order(_createdAt asc){
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
    <main className="px-12 mx-auto max-w-screen-2xl overflow-x-hidden  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 mt-[40px]">
    {data.map((post,idx) =>(
     <Card key={idx}>
      <Image
      className="rounded-t-lg h-[200px] object-cover "
      height={500}
      width={500}
      src={urlFor(post.titleImage).url()}
      alt="image"/>

      <CardContent>
        <h1 className=" line-clamp-2 font-bold flex justify-start mt-3 text-lg">
          {post.title}
        </h1>
        <p className="line-clamp-3 flex justify-start text-sm mt-3 text-gray-600 dark:text-gray-300">
          {post.smallDescription}
        </p>
        <Button asChild className="w-full mt-7">
          <Link href={`/blog/${post.currentSlug}`} className="bg-blue-600 hover:bg-blue-400">Read More</Link>
        </Button>
      </CardContent>
     </Card>
)
)}
  
</main>
  );
}

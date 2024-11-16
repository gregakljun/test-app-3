import { SignIn } from '@clerk/nextjs';

// Define the return type for `generateStaticParams`
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Fetch your posts from a backend or API (replace with actual URL)
  const posts = await fetch('/sign-in')
    .then((res) => res.json())
    .catch((error) => {
      console.error('Failed to fetch posts:', error);
      return []; // Return empty array in case of error
    });

  // Return an array of slug objects
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// Define the types for `params` in the `Page` component
interface PageParams {
  slug: string;
}

// The main page component for the sign-in page
export default async function Page({ params }: { params: PageParams }) {
  const { slug } = params;

  return (
    <div className="flex items-center justify-center flex-col gap-10 min-h-screen">
      <h1 className="text-4xl font-bold mt-20">Sign In</h1>
      {/* You can display the slug if needed for debugging or other purposes */}
      <p>Requested post slug: {slug}</p>

      {/* Display the SignIn component from Clerk */}
      <SignIn />
    </div>
  );
}

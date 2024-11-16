import { SignUp } from '@clerk/nextjs';

// Define the type for the `post` object (assumes 'slug' is a string)
interface Post {
  slug: string;
}

// Define the return type for `generateStaticParams`
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts: Post[] = await fetch('https://.../posts').then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Define the types for `params` in the `Page` component
interface PageParams {
  slug: string;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: PageParams }) {
  const { slug } = params;
  return (
    <div className='flex items-center justify-center flex-col gap-10'>
      <h1 className='text-4xl font-bold mt-20'>This is signup page</h1>
      <SignUp />
    </div>
  );
}

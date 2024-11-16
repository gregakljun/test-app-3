import { SignIn } from '@clerk/nextjs';

export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }) {
  const { slug } = await params
  return (
      <div className='flex items-center justify-center flex-col gap-10'>
        <h1 className='text-4xl font-bold mt-20'>This is signin page</h1>
        <SignIn />
      </div>
    );
}

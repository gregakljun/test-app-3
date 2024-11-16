import { SignIn } from '@clerk/nextjs';

// Define the return type for `generateStaticParams`
// Since we only need a static sign-in page, we don't actually need dynamic params here.
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Return an empty array as no params are needed for the sign-in page
  return [];
}

// Define the types for `params` in the `Page` component
interface PageParams {
  slug: string;
}

// SignIn page component
export default function Page({ params }: { params: PageParams }) {
  return (
    <div className="flex items-center justify-center flex-col gap-10 min-h-screen">
      <h1 className="text-4xl font-bold mt-20">Sign In</h1>
      
      {/* Display the SignIn component from Clerk */}
      <SignIn />
    </div>
  );
}

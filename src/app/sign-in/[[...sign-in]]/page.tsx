import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center justify-center md:pt-24 pt-4'>
      <SignIn afterSignOutUrl="/"/>
    </div>
  );
}
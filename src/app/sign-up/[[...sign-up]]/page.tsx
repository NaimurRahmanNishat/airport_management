import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center text-center justify-center'>
      <SignUp afterSignOutUrl="/"/>
    </div>
  );
}
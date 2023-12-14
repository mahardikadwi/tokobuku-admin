// components/SignOut.js
import { signOut } from 'next-auth/react';
import Layout from './Layout';
import { useRouter } from 'next/router';

export default function SignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({redirect: false});
    router.push("/");
  }

  return (
    <Layout>
      <h1 className="text-center">Are you sure you want to sign out?</h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={handleSignOut}>
          Yes
        </button>
        <button className="btn-default">No</button>
      </div>
    </Layout>
  );
}

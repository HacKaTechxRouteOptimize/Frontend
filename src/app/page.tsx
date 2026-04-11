"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <div onClick={() => signIn("google")}>Login</div>;
  }

  return (
    <div>
      <p>{session?.user?.name}</p>
      <button type="button" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
};

export default Page;

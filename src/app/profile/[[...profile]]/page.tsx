import { UserProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

const Profile = async () => {
  const authResult = await auth(); 
  const { userId } = authResult;
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-2xl">{user?.username}</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;

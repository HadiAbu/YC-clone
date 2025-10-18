import React from "react";
import Link from "next/link";

type UserPageProps = {
  params: {
    id: string;
  };
};

const UserPage = async ({ params }: UserPageProps) => {
  const { id } = await params;
  return (
    <div className="flex justify-between">
      <h1>User Details page {id}</h1>
      <Link href="/dashboard/users">Back to Users</Link>
    </div>
  );
};

export default UserPage;

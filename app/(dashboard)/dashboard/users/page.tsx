import Link from "next/link";
import React from "react";

const UsersPage: React.FC = () => {
  const linkStyle = "text-blue-600 hover:bg-gray-100 hover:text-blue-800";
  return (
    <div>
      <h1>Users dashboard</h1>
      <>
        <ul className="mt-10">
          <li className={linkStyle}>
            <Link href="/dashboard/users/1">User details 1</Link>
          </li>
          <li className={linkStyle}>
            <Link href="/dashboard/users/2">User details 2</Link>
          </li>
          <li className={linkStyle}>
            <Link href="/dashboard/users/3">User details 3</Link>
          </li>
          <li className={linkStyle}>
            <Link href="/dashboard/users/4">User details 4</Link>
          </li>
        </ul>
      </>
    </div>
  );
};

export default UsersPage;

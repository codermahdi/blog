import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h2>Welcome to MAHDI's Blog</h2>
      <button className="btn btn-wide btn-primary">
        <Link href={"/blog"}>Show All Blogs</Link>
      </button>
    </main>
  );
}

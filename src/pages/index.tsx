import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <Link href={"/search"}>View developer profiles</Link>
      </main>
    </>
  );
}

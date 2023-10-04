import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex grow flex-col items-center">
        <div className="flex w-full flex-col items-center bg-gradient-to-b from-orange to-pink py-20 text-5xl text-white font-bold">
          <div className="flex flex-col gap-2">
            <p>TOMORROW&apos;S DEVELOPERS.</p>
            <p>AVAILABLE.</p>
            <p>TODAY.</p>
          </div>
        </div>
        <Link
          href={"/search"}
          className="self-center rounded-xl bg-orange p-4 text-3xl text-white mt-20"
        >
          View developer profiles
        </Link>
      </main>
    </>
  );
}

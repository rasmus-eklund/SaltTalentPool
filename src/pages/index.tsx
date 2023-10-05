import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex grow flex-col items-center">
        <div className="flex w-full flex-col items-center bg-gradient-to-b from-orange to-pink py-20 text-2xl text-white font-bold md:text-5xl">
          <div className="flex flex-col gap-2">
            <p>TOMORROW&apos;S DEVELOPERS.</p>
            <p>AVAILABLE.</p>
            <p>TODAY.</p>
          </div>
        </div>
        <Link
          href={"/search"}
          className="self-center rounded-xl bg-orange p-4 text-xl text-white mt-20 md:text-3xl"
        >
          View developer profiles
        </Link>
      </main>
    </>
  );
}

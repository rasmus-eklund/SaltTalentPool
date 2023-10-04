import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="shrink-1 flex h-1/6 items-center pl-16">
    <Link href={"/"}>
      <Image src="/logoBlack.png" alt="salt logo" width={130} height={30} />
    </Link>
  </header>
);

export default Header;

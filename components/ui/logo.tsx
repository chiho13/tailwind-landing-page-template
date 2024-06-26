import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        src="/images/vontane2.svg"
        width={220}
        height={80}
        alt="vontane logo"
      />
    </Link>
  );
}

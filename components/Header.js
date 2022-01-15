import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-secondary bg-gradient py-2">
      <div className="container">
        <Link href={'/'}>
          <a className="text-white"><h1>Bir Dübüşün Hatıra Defteri</h1></a>
        </Link>
      </div>
    </header>
  )
}

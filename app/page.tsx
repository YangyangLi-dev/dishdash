import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div></div>
        <div>
          <div>
            <h1>Dish Dash for Delicious Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div>
            <Link href={"/community"}>Join the Community</Link>
            <Link href={"/meals"}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section></section>
      </main>
    </>
  );
}

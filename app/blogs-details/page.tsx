import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/NavBar";

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <section className="relative bg-cover bg-center pt-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/blogs-details/blog1">
              <a>
                <Image
                  width={400}
                  height={400}
                  src="/blog1.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">Blog1</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                    &quot;Explore insightful content on Amazon through our blog,
                    where we delve into diverse topics ranging from product
                    reviews to the latest trends. Gain valuable knowledge and
                    stay informed about the e-commerce giant with
                    Crafty._.Wishes.&quot;
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/blogs-details/blog2">
              <a>
                <Image
                  width={400}
                  height={400}
                  src="/blog2.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">Blog2</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                    &quot;Discover the secrets of Snapchat on our blog, where we
                    unravel the latest features, creative tips, and strategies
                    to enhance your Snapchat experience. Dive into our
                    insightful posts to master the art of storytelling through
                    snaps and stay updated on the dynamic world of ephemeral
                    content.&quot;
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

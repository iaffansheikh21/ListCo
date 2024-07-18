// import Image from "next/image";
// const blogData = [
//     {
//         id: 1,
//         slug: "blog1",
//        description: 'Discover the best SPA salons for relaxation and rejuvenation.',
//        alt: 'ニュース 1',
//        date: '3月12日',
//        author: 'Author1',
//        title: 'リラクゼーションに最適なSPAサロン',
//        category: 'ティップス',
//         details: `Introduction 
//                 In the realm of multinational technology companies, few have left an indelible mark on the world as Amazon. From its humble beginnings as an online bookstore to its current status as a global e-commerce and technology giant, Amazon's journey has been nothing short of remarkable. Inception and Early Days
//                 From Books to Everything
//                 Founded by Jeff Bezos in 1994, Amazon started as an online bookstore. Bezos envisioned a digital marketplace that could offer an extensive selection of books to customers worldwide. The success of this initial venture laid the groundwork for Amazon's expansion into other product categories. Evolution into a Tech Behemoth
//                 Diversification and Innovation
//                 Amazon's commitment to innovation and customer-centric services propelled it beyond e-commerce. The company diversified its offerings, venturing into cloud computing, artificial intelligence, and entertainment. Amazon Web Services (AWS) emerged as a leading cloud services provider, hosting websites and applications for businesses globally. Conclusion
//                 In the landscape of global technology and e-commerce, Amazon stands as a testament to the power of innovation, adaptability, and customer-centricity. From its roots as a virtual bookstore to its current status as a multifaceted technology giant, Amazon's journey continues to shape the way we live, work, and shop in the digital age. As Amazon ventures into new frontiers, its impact on industries and consumer behavior remains a compelling narrative in the ever-evolving story of technological progress.`,
//         imageUrl: "/blog1.jpg",
//     },
//     {
//         id: 2,
//         slug: "blog2",
//         alt: 'ニュース 2',
//         date: '3月12日',
//         author: 'Author2',
//         title: 'リラクゼーションに最適なSPAサロン',
//         category: 'ティップス',
//         details: `Introduction Snapchat, a trailblazing multimedia messaging app, has revolutionized the way we share moments, interact with friends, and consume content. With its ephemeral nature and innovative features, Snapchat has carved a unique niche in the realm of social media. In this blog, we delve into the captivating world of Snapchat, exploring its inception, standout features, and the cultural impact it has made. The Birth of Snapchat From Dorm Room to Global Sensation Snapchat was conceived in 2011 by Evan Spiegel, Bobby Murphy, and Reggie Brown while they were students at Stanford University. The trio, fueled by a desire to create a more authentic and fleeting form of communication, developed the concept of disappearing photos and videos. Little did they know that this idea would blossom into one of the most popular social media platforms worldwide. Conclusion Snapchat's journey from a dorm room project to a global phenomenon is a testament to its innovation and ability to adapt. With its emphasis on ephemeral messaging, creative features, and cultural impact, Snapchat continues to be a driving force in the ever-evolving world of social media. As we navigate the digital landscape, Snapchat remains a captivating platform, inviting users to share their stories in a way that is uniquely their own.`,
//         imageUrl: "/blog2.jpg",
//          description: 'Find out the top tips for choosing the best SPA salon for your needs.'
//     },



// ];

// export default function Blog({ params }: { params: { slug: string } }) {
//     const selectedBlog = blogData.filter((item) => item.slug === params.slug);

//     if (selectedBlog.length === 0) {
//         return <div>Blog not found</div>;
//     }

//     const blog = selectedBlog[0];

//     return (
//         <div>
//             <section className="bg-cover bg-center"
//                 style={{ backgroundImage: `url(${blog.imageUrl})`, height: "350px", }}>
//             </section>
//             <h1 className="text-4xl font-extrabold">{blog.description}</h1>
//             <h3 className="font-normal">{blog.title}</h3>
//             <h3 className="font-normal">{blog.author}</h3>
//             <p className="font-normal">{blog.details}</p>
            

//         </div>
//     );
// }

import Image from "next/image";
import Navbar from "../../components/NavBar";

const blogData = [
  {
    id: 1,
    slug: "blog1",
    description: 'Discover the best SPA salons for relaxation and rejuvenation.',
    alt: 'ニュース 1',
    date: '3月12日',
    author: 'Author1',
    title: 'リラクゼーションに最適なSPAサロン',
    category: 'ティップス',
    details: `Introduction 
            In the realm of multinational technology companies, few have left an indelible mark on the world as Amazon. From its humble beginnings as an online bookstore to its current status as a global e-commerce and technology giant, Amazon's journey has been nothing short of remarkable. Inception and Early Days
            From Books to Everything
            Founded by Jeff Bezos in 1994, Amazon started as an online bookstore. Bezos envisioned a digital marketplace that could offer an extensive selection of books to customers worldwide. The success of this initial venture laid the groundwork for Amazon's expansion into other product categories. Evolution into a Tech Behemoth
            Diversification and Innovation
            Amazon's commitment to innovation and customer-centric services propelled it beyond e-commerce. The company diversified its offerings, venturing into cloud computing, artificial intelligence, and entertainment. Amazon Web Services (AWS) emerged as a leading cloud services provider, hosting websites and applications for businesses globally. Conclusion
            In the landscape of global technology and e-commerce, Amazon stands as a testament to the power of innovation, adaptability, and customer-centricity. From its roots as a virtual bookstore to its current status as a multifaceted technology giant, Amazon's journey continues to shape the way we live, work, and shop in the digital age. As Amazon ventures into new frontiers, its impact on industries and consumer behavior remains a compelling narrative in the ever-evolving story of technological progress.`,
    imageUrl: "/blog1.jpg",
  },
  {
    id: 2,
    slug: "blog2",
    alt: 'ニュース 2',
    date: '3月12日',
    author: 'Author2',
    title: 'リラクゼーションに最適なSPAサロン',
    category: 'ティップス',
    details: `Introduction Snapchat, a trailblazing multimedia messaging app, has revolutionized the way we share moments, interact with friends, and consume content. With its ephemeral nature and innovative features, Snapchat has carved a unique niche in the realm of social media. In this blog, we delve into the captivating world of Snapchat, exploring its inception, standout features, and the cultural impact it has made. The Birth of Snapchat From Dorm Room to Global Sensation Snapchat was conceived in 2011 by Evan Spiegel, Bobby Murphy, and Reggie Brown while they were students at Stanford University. The trio, fueled by a desire to create a more authentic and fleeting form of communication, developed the concept of disappearing photos and videos. Little did they know that this idea would blossom into one of the most popular social media platforms worldwide. Conclusion Snapchat's journey from a dorm room project to a global phenomenon is a testament to its innovation and ability to adapt. With its emphasis on ephemeral messaging, creative features, and cultural impact, Snapchat continues to be a driving force in the ever-evolving world of social media. As we navigate the digital landscape, Snapchat remains a captivating platform, inviting users to share their stories in a way that is uniquely their own.`,
    imageUrl: "/blog3.jpg",
    description: 'Find out the top tips for choosing the best SPA salon for your needs.'
  },
];

export default function Blog({ params }: { params: { slug: string } }) {
  const selectedBlog = blogData.find((item) => item.slug === params.slug);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  const blog = selectedBlog;

  return (
    <div>
      <Navbar />
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8">
          <h1 className="text-4xl font-extrabold">{blog.description}</h1>
          {/* <h3 className="font-normal mt-4">{blog.title}</h3>
          <h3 className="font-normal mt-2">{blog.author}</h3> */}
          <p className="font-normal mt-4">{blog.details}</p>
        </div>
        <div className="lg:w-1/2 p-8">
          <Image
            src={blog.imageUrl}
            alt={blog.alt}
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
      </section>
    </div>
  );
}

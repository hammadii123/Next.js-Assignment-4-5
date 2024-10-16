import Image from "next/image";
import Link from "next/link";
import styles1 from "./hello1.css"
import styles2 from "./hello2.css"

export default function Home() {
  return (

    
<>
  <header className="header">
    <h1>My Blog</h1>
  </header>
  {/* Blog Section */}
  <main className="container">
    <section className="blog-grid">
      {/* Blog 1 */}
      <article className="blog-card">
        {/* <img src="blog1.jpg" alt="Blog 1" /> */}
        <h2>DevOps and Cloud Computing: Best Practices</h2>
        <p className="button"> In todays fast-paced tech industry, DevOps and cloud computing are
        revolutionizing the way we develop, deploy, and manage applications.
        This blog delves into the best practices for integrating DevOps with
        cloud infrastructure to optimize efficiency and scalability.</p>
        {/* <a href="blog1.html">Read More</a> */}
        <Link   href={"/blog1"}>Read More</Link>
      </article>
      {/* Repeat for at least 6 blogs */}
      <article className="blog-card">
        {/* <img src="blog2.jpg" alt="Blog 2" /> */}
        <h2>How AI is Transforming Software Development</h2>
        <p className="button">Artificial Intelligence (AI) is revolutionizing software development
        processes. From automating mundane coding tasks to enhancing security
        and optimizing code, AI tools are reshaping how developers build
        applications.</p>
       
        <Link  href={"/blog2"}>Read More</Link>
      </article>
      


      {/* Blog3 */}
      <article className="blog-card">
        {/* <img src="blog2.jpg" alt="Blog 2" /> */}
        <h2>Mastering Full-Stack Development in 2024</h2>
        <p className="button"> Full-stack development is one of the most sought-after skills in the
        tech industry. It requires knowledge of both front-end and back-end
        technologies, and staying updated on the latest trends is crucial for
        success.</p>
        {/* <a href="blog2.html">Read More</a> */}
        <Link href={"/blog3"}>Read More</Link>
      </article>
    </section>
  </main>
  {/* Footer */}
  <footer className="footer">
    <p>© 2024 My Blog. All rights reserved.</p>
  </footer>
</>

    
  );
}

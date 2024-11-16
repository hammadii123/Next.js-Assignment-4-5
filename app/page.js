import Image from "next/image";
import Link from "next/link";
import styles1 from "./hello1.css"
import styles2 from "./hello2.css"

export default function Home() {
  return (

    // bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]
<>
  <header className="header  ">
    <h1>My Blog</h1>
  </header>
  {/* Blog Section */}
  <main className="container ">
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
        <Link   class="linkButton" href={"/blog1"}>Read More</Link>
      </article>
      {/* Repeat for at least 6 blogs */}
      <article className="blog-card">
        {/* <img src="blog2.jpg" alt="Blog 2" /> */}
        <h2>How AI is Transforming Software Development</h2>
        <p className="button">Artificial Intelligence (AI) is revolutionizing software development
        processes. From automating mundane coding tasks to enhancing security
        and optimizing code, AI tools are reshaping how developers build
        applications.</p>
        {/* <a href="blog2.html">Read More</a> */}
        <Link  class="linkButton" href={"/blog2"}>Read More</Link>
      </article>
      {/* Add more blogs following this structure */}


      {/* Blog3 */}
      <article className="blog-card">
        {/* <img src="blog2.jpg" alt="Blog 2" /> */}
        <h2>Mastering Full-Stack Development in 2024</h2>
        <p className="button"> Full-stack development is one of the most sought-after skills in the
        tech industry. It requires knowledge of both front-end and back-end
        technologies, and staying updated on the latest trends is crucial for
        success.</p>
        {/* <a href="blog2.html">Read More</a> */}
        <Link class="linkButton" href={"/blog3"}>Read More</Link>
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

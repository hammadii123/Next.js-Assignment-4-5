import React from 'react'
import Blogcss from '../app/blog.css'

const Blog3 = () => {
  return (
    
    <>
  {/* Header */}
  <header className="header">
    <h1>Tech Insights Blog</h1>
  </header>
  {/* Blog Content */}
  <main className="container">
    <article className="blog-detail">
      <h1>Mastering Full-Stack Development in 2024</h1>
      {/* <img src="fullstack.jpg" alt="Full Stack Development" /> */}
      <p>
        Full-stack development is one of the most sought-after skills in the
        tech industry. It requires knowledge of both front-end and back-end
        technologies, and staying updated on the latest trends is crucial for
        success.
      </p>
      <p>Key technologies to master in 2024 include:</p>
      <ul>
        <li>React.js or Vue.js for dynamic front-end interfaces.</li>
        <li>
          Node.js and Express.js for building scalable back-end applications.
        </li>
        <li>
          Databases like MongoDB or PostgreSQL to handle data storage
          efficiently.
        </li>
        <li>
          Version control with Git, and containerization tools like Docker.
        </li>
      </ul>
      <p />
      <p>
        Combining these skills enables you to build end-to-end applications that
        can scale, offer seamless user experiences, and meet business
        requirements.
      </p>
    </article>
  </main>
  {/* Footer */}
  <footer className="footer">
    <p>© 2024 Tech Insights Blog. All rights reserved.</p>
  </footer>
</>

    
  )
}

export default Blog3

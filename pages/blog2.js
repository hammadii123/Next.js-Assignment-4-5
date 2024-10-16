import React from 'react'
import Blogcss from '../app/blog.css'

const Blog2 = () => {
  return (
    <div>
      
      <>
  {/* Header */}
  <header className="header">
    <h1>Tech Insights Blog</h1>
  </header>
  {/* Blog Content */}
  <main className="container">
    <article className="blog-detail">
      <h1>How AI is Transforming Software Development</h1>
      {/* <img src="ai-software.jpg" alt="AI in Software Development" /> */}
      <p>
        Artificial Intelligence (AI) is revolutionizing software development
        processes. From automating mundane coding tasks to enhancing security
        and optimizing code, AI tools are reshaping how developers build
        applications.
      </p>
      <p>
        AI-driven code assistants like GitHub Copilot and TabNine are helping
        developers write code faster and more efficiently. Machine learning
        algorithms are being integrated into development environments to detect
        bugs and optimize performance in real-time.
      </p>
      <p>
        The future of software development is set to become more AI-driven, with
        faster release cycles, improved code quality, and fewer human errors.
      </p>
    </article>
  </main>
  {/* Footer */}
  <footer className="footer">
    <p>© 2024 Tech Insights Blog. All rights reserved.</p>
  </footer>
</>

      
    </div>
  )
}

export default Blog2

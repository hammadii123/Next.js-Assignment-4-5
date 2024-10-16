import React from 'react'
import Blogcss from '../app/blog.css'

const Blog4 = () => {
  return (
    <>
  {/* Header */}
  <header className="header">
    <h1>Tech Insights Blog</h1>
  </header>
  {/* Blog Content */}
  <main className="container">
    <article className="blog-detail">
      <h1>Top Cybersecurity Practices for Developers</h1>
      {/* <img src="cybersecurity.jpg" alt="Cybersecurity Image" /> */}
      <p>
        As more applications are developed, the risk of security vulnerabilities
        also increases. Following cybersecurity best practices ensures that your
        software is secure from common threats like SQL injections, XSS, and
        DDoS attacks.
      </p>
      <p>Some critical practices include:</p>
      <ul>
        <li>
          Validating all inputs to prevent SQL injection and other injection
          attacks.
        </li>
        <li>
          Implementing proper authentication and authorization mechanisms like
          OAuth and JWT.
        </li>
        <li>
          Regularly updating software dependencies to prevent vulnerabilities
          from outdated libraries.
        </li>
        <li>Encrypting sensitive data, both at rest and in transit.</li>
      </ul>
      <p />
      <p>
        By incorporating these practices early in the development process, you
        can prevent data breaches and ensure the integrity of your application.
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

export default Blog4

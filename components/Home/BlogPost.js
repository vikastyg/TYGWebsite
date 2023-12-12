import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <section className="blog-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Articles</h2>
            
          </div>

          <div className="row justify-content-center">

            {/* 1st article  */}
            
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/articles/8">
                    <img src="/images/blog/blog-details88.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                  <ul>
                      <li>
                        <p>Blog</p>
                      </li>
                      <li>Software Testing</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/articles/8">
                    FireFlink’s Self Healing Features Improves Script Failure Caused by UI Reskin
                    </Link>
                  </h3>

                  <p>
                  Discover how FireFlink is evolving the way we manage user interfaces (UI), automatically...
                  </p>

                  <Link href="/articles/8" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2nd article  */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/articles/7">
                    <img src="/images/blog/blog-details7.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                  <ul>
                      <li>
                        <p>Blog</p>
                      </li>
                      <li>Software Testing</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/articles/7">
                    Revolutionary On-Demand Test Automation
                    </Link>
                  </h3>

                  <p>
                  Testing applications for minimal bugs poses a considerable challenge, as even minor issues in the testing setup can result in numerous bugs infiltrating the application...
                  </p>

                  <Link href="/articles/7" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3rds article  */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                <Link href="/articles/1">
                    <img src="/images/blog/blog-details1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                  <ul>
                      <li>
                        <p>Blog</p>
                      </li>
                      <li>Software Testing</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/articles/1">
                      One stop solution for Scriptless Automated Testing –
                      FireFlink
                    </Link>
                  </h3>

                  <p>
                    FireFlink’s NLP-based automated testing scripts are capable
                    of performing end-to-end web testing without coding...
                  </p>

                  <Link href="/articles/1" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;

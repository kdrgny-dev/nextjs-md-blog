import Link from "next/link";

export default function Post({ post }) {
  const {title, image, excerpt, date} = post.frontmatter;
  return (
    <>
      <div className="col-sm-6 col-lg-4 mb-4">
        <Link href={`/blog/${post.slug}`}>
          <a className="btn">
            <div className="card h-100">
              <img src={image} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{excerpt}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{date}</small>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  )
}

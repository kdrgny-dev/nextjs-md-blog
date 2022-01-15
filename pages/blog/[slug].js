import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

export default function PostDetail({frontmatter: {title, date, image}, content, slug}) {
  return (
    <div className='container'>
      <div className="row align-items-center py-2">
        <div className="col">
          <div className='page-header' style={{ backgroundImage: `url(/${image})`, height:`200px`, position:'relative'}}>
            <Link href='/'>
              <a className="btn btn-primary">Back</a>
            </Link>
            
            <span className="position-absolute badge rounded-pill bg-dark date-badge">
              {date}
            </span>
          </div>
        </div>
      </div>
      <div className='post-detail' dangerouslySetInnerHTML={{__html: marked(content)}}></div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map(file => ({ 
    params: {
      slug: file.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithContent = fs.readFileSync(path.join('posts', slug + '.md'), 'utf8');
  const { data: frontmatter, content } = matter(mdWithContent);
  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }
}

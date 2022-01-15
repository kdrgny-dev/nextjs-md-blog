import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';
import {sortByDate} from '../utils';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          posts.map((post, index) => {
            return (
              <Post post={post} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(file => { 
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join('posts', file), 'utf8');
    const { data:frontmatter } = matter(content);
    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate)
    },
  }
}

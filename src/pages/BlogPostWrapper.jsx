import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

function BlogPostWrapper() {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
}

export default BlogPostWrapper;

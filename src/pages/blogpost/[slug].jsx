import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const Blogspot = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <main className={styles.main}>
      <div>
        <h1>Blog Title: {blog.title} </h1>
        <hr />
        <hr />
        <div className={styles.blogsList}>
          <div>
            <p>By: {blog.Author}</p>
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export async function getServerSideProps(context) {
  let { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/blogs?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
}

export default Blogspot;






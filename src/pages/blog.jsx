import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   console.log("Use Effect");
  //   fetch("http://localhost:3000/api/getblog")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       console.log(parsed,'Blog main Page Parsed data');
  //       setBlogs(parsed);
  //     });
  // }, []);
  console.log(blogs,'Blog main page')
  return (
    <main className={styles.main}>
      <div>
        <div className="blog">
          <h1>Popular Blogs</h1>
          <hr />
          <hr />
          {blogs.map((item,index) => {
            return (
              <div className="blogItem" key={index}>
                <h3>{item.title}</h3>
                <h4>Author: {item.Author}</h4>
                <Link href={`/blogpost/${item.slug}`}>
                  <p>{item.content.substr(0,144)}.....</p>
                  <hr />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};


export async function getServerSideProps(context){
  let data = await  fetch("http://localhost:3000/api/getblog")
  let allBlogs = await data.json()
  return {props: {allBlogs}}
}


export default Blog;

# Posts-and-Cards
import { useEffect, useState } from "react"
import Card from "./Card"

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <div className="flex flex-col h-[100vh] p-4">
      <h1 className="text-4xl font-bold">Posts</h1>

      <div className="flex flex-col gap-4 mt-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  )
}

export default App

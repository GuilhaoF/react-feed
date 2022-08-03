import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar"


import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=40',
      name: 'John Smith',
      role: 'Cto'
    },
    content: [
      { type: 'paragraph', content: 'Mini Clone Twitter com React e Tailwind' },
      { type: 'paragraph', content: 'Acabei de subir um  projeto React + Tailwind Css no github ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥' },
      { type: 'link', content: 'Github', },
    ],
    publishedAt: new Date('2022-05-03 20:00:05')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=40',
      name: 'John',
      role: 'Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'React meu  favorito 😎🤩🤩🤟🤟' },
      { type: 'link', content: 'Docs' },
    ],
    publishedAt: new Date('2022-07-26 20:00:05')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>

      </div>


    </div>

  )
}



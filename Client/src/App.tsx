import './App.css'
import Post from "./Components/post"

function App() {
  return (
    <>
      <Post 
        title="First Post"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSQdhtmlJA4VWLnyN1Mn_zYDRAY6w5uS1Yg&s"
        author="John Doe"
        time="2h ago"
        likesNum={13}
      />
    </>
  )
}

export default App

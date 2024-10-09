import { useState } from "react";
import Blog from "./components/Blog"
import { existingBlogs } from "./components/blogs"

function App() {

  const [blogs, setBlogs] = useState(existingBlogs);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: '', author: '', date: '', imgUrl: '', content: '' });



  interface NewBlog {
    title: string;
    author: string;
    date: string;
    content: string;
    imgUrl: string;
}
  const addBlog= (newBlog:NewBlog)=>{
    setBlogs(prevBlogs => [
      ...prevBlogs,
      { id: prevBlogs.length + 1, ...newBlog }
  ]);
        setIsFormVisible(false);
        
  };
  const handleFetchJoke = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/jokes', {
        method: 'GET',
        headers: {
          'X-Api-Key': '2/DHjoPvKUULzXHPWwk8wQ==a4ZKhp1n7po2QNlo', 
        },
      });
      const data = await response.json();
      if (data.length > 0) {
        setNewBlog(prev => ({
          ...prev,
          content: data[0].joke, 
        }));
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({ ...prev, [name]: value }));
  };
  const handleInput=()=>{
    setIsFormVisible(true);
  }
  return (
    <main className="py-10  h-screen grid-cols-3">
      <div className="flex items-center justify-center text-center">
  <h1 className="font-bold text-3xl font-afacad-flux">
    Your blogs
  </h1>
  <button onClick={handleInput} className="ml-4 bg-purple-300 text-black px-4 py-2 rounded font-afacad-flux font-bold">+ Add new Blog</button>
</div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-blue-300 p-5 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Add New Blog</h2>
            <input name="title" placeholder="Title" value={newBlog.title} onChange={handleInputChange} className="border p-2 w-full mb-2" />
            <input name="author" placeholder="Author" value={newBlog.author} onChange={handleInputChange} className="border p-2 w-full mb-2" />
            <input name="date" placeholder="Date (YYYY-MM-DD)" value={newBlog.date} onChange={handleInputChange} className="border p-2 w-full mb-2" />
            <input name="imgUrl" placeholder="Image URL" value={newBlog.imgUrl} onChange={handleInputChange} className="border p-2 w-full mb-2" />
            <textarea name="content" placeholder="Content" value={newBlog.content} onChange={handleInputChange} className="border p-2 w-full mb-2" />

            <button onClick={handleFetchJoke} className="bg-green-500 text-white px-4 py-2 rounded">Fetch Joke</button>
            <button onClick={() =>{ addBlog(newBlog) ;
               setNewBlog({ title: '', author: '', date: '', imgUrl: '', content: '' });
            }
            } className="bg-yellow-400 text-white px-4 py-2 rounded">Submit</button>
            <button onClick={() => setIsFormVisible(false)} className="ml-2 bg-purple-950 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      )}
      <div>

      <div className="grid grid-cols-3 gap-4 px-4 mt-10 bg-slate-100 rounded-md p-5">
            {blogs.map(blog =>(
                <Blog
                   key={blog.id}
                   title={blog.title}
                   author={blog.author}
                   content={blog.content}
                   imgUrl={blog.imgUrl}
                   date={blog.date}
                   />
            ))}
        </div>
        
      </div>
    </main>
  )
}

export default App

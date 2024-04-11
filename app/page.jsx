'use client'
import { useState } from 'react'; // Import useState for managing state
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem('user');
  const [tasks, setTasks] = useState([]); // State for managing tasks
  const [newTask, setNewTask] = useState(''); // State for managing new task input

  console.log({ user });

  if (!user && !userSession) {
    router.push('/sign-up');
    return null;
  }

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); // Clear input field after adding task
    }
  };

  // Function to handle logging out
  const handleLogout = () => {
    signOut(auth);
    sessionStorage.removeItem('user');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
  <button onClick={handleLogout} className="mb-4">Log out</button>

  {/* To-Do List */}
  <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
    <h2 className="text-2xl mb-4">To-Do List</h2>
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Enter new task"
      className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black" // Added text-black class
    />
    <button
      onClick={handleAddTask}
      className="w-full px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
    >
      Add Task
    </button>
    <ul className="text-lg text-black"> {/* Added text-black class */}
      {tasks.map((task, index) => (
        <li key={index} className="mb-2">{task}</li>
      ))}
    </ul>
  </div>
</main>


  );
}

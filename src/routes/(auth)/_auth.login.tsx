import { useState } from 'react';
import { loginApi } from '../../api/auth';
import { createFileRoute } from '@tanstack/react-router'
import { useGlobalContext } from '../../contexts/GlobalContext';

interface FormState {
  username: string;
  password: string;
}

export const Route = createFileRoute('/(auth)/_auth/login')({
  component: Login,
})

function Login() {
  const { setUser } = useGlobalContext();
  const [form, setForm] = useState<FormState>({
    username: "mor_2314",
    password: "83r5^_"
  });
  const handleFormChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  }

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = loginApi(form);
    setUser({ username: "Test User", image: "https://github.com/shadcn.png", token: response });
  }

  return (
    <section className="w-96 mx-auto mt-20 border p-4 rounded-lg shadow-lg">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Login</h1>
        <p className="leading-7">Enter your details below to login</p>
      </div>
      <form className="space-y-4 mt-4">
        <div className="space-y-1 flex flex-col">
          <label htmlFor="username">Username</label>
          <input className="py-0.5 px-2 border outline-none rounded-lg" type="text" name="username" id="username" value={form.username} onChange={(e) => handleFormChange(e.target.name, e.target.value)} />
        </div>
        <div className="space-y-1 flex flex-col">
          <label htmlFor="password">Password</label>
          <input className="py-0.5 px-2 border outline-none rounded-lg" type="password" name="password" id="password" value={form.password} onChange={(e) => handleFormChange(e.target.name, e.target.value)} />
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={handleLogin}>Login</button>
      </form>
    </section>
  )
}

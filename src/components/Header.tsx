import { useGlobalContext } from "../contexts/GlobalContext"

const Header = () => {
    const { logout } = useGlobalContext();

    return (
        <header className="border-b-2 border-b-gray-800 flex justify-between items-center py-3 px-4">
            <div>
                <h3 className="text-xl font-semibold">TestHead</h3>
            </div>
            <div>
                <ul>
                    <li>
                        <button onClick={() => { logout(); }} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Logout</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
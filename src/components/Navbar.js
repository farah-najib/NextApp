import Link from 'next/link'
import ThemeChanger from './DarkSwitch'

const Navbar = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Users', href: '/users' },
        { name: 'contact', href: '/contact' }
    ]

    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div
                    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navigation.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                            >
                                <li>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <ThemeChanger />
            </div>
        </nav>
    )
}

export default Navbar

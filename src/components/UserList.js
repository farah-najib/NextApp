import Link from 'next/link'
const UserList = ({ users }) => {
    return (
        <>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {users.map((user) => (
                    <li key={user.id} className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    <Link
                                        legacyBehavior
                                        href={`/users/${user.id}`}
                                    >
                                        <a>{user.name}</a>
                                    </Link>
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {user.email}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {user.username}{' '}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UserList

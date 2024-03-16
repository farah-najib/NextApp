import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserList from '../components/UserList'

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', username: 'johndoe' },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        username: 'janesmith'
    }
]

test('renders user list with correct user data', () => {
    render(<UserList users={users} />)

    users.forEach((user) => {
        const nameElement = screen.getByText(user.name)
        const emailElement = screen.getByText(user.email)
        const usernameElement = screen.getByText(user.username)

        expect(nameElement).toBeInTheDocument()
        expect(emailElement).toBeInTheDocument()
        expect(usernameElement).toBeInTheDocument()
    })
})

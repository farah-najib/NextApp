import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserPost from '../components/UserPost'

test('renders user post with title, body, and read more link', () => {
    const title = 'Sample Title'
    const body = 'This is a sample body text for testing.'
    render(<UserPost title={title} body={body} user_id={1} />)
    const titleElement = screen.getByText(title)
    const bodyElement = screen.getByText(body)
    const userDetailsLink = screen.getByText('User details')

    expect(titleElement).toBeInTheDocument()
    expect(bodyElement).toBeInTheDocument()
    expect(userDetailsLink).toBeInTheDocument()
})

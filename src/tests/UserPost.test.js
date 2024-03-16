import { render, screen } from '@testing-library/react'
import UserPost from '../components/UserPost'

test('renders user post with title, body, and read more link', () => {
    const title = 'Sample Title'
    const body = 'This is a sample body text for testing.'
    render(<UserPost title={title} body={body} />)
    const titleElement = screen.getByText(title)
    const bodyElement = screen.getByText(body)
    const readMoreLink = screen.getByText('Read more')

    expect(titleElement).toBeInTheDocument()
    expect(bodyElement).toBeInTheDocument()
    expect(readMoreLink).toBeInTheDocument()
})

import UserPost from '../components/UserPost'
import fetcher, { API_URL } from '../utils/api'

const Home = ({ posts }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Home</h1>
            <div className="mx-auto px-4 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
                {posts.map((post) => (
                    <UserPost
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        user_id={post.userId}
                    />
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await fetcher(`${API_URL}/posts`)

    return {
        props: {
            posts
        }
    }
}

export default Home

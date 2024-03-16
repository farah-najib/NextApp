// pages/index.js

import fetcher, { API_URL } from '../../utils/api'
import UserList from '../../components/UserList'

const Index = ({ users }) => {
    return (
        <div>
            <h1>Users</h1>
            <UserList users={users} />
        </div>
    )
}

export async function getStaticProps() {
    const users = await fetcher(`${API_URL}/users`)

    return {
        props: {
            users
        }
    }
}

export default Index

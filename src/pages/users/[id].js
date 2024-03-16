// pages/users/[id].js


import Link from "next/link"
import { Tab } from "@headlessui/react"
import Image from "next/image"
import classNames from "classnames"
import fetcher, { API_URL } from "../../utils/api";

const User = ({ user }) => {
    const tabs = [
        { name: "User Info" },
        { name: "Posts", count: user.posts?.length },
        { name: "Albums", count: user.albums?.length },

      ]
  return (
    // <div>
    //   <h1>User page</h1>
    //   <h2>{user.name}</h2>
    //   <p>{user.email}</p>
    // </div>
    <div className="container py-6 mx-auto">
    <div className="flex flex-col sm:flex-row mt-10">
      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <div className="flex flex-col items-center text-center justify-center prose prose-sm md:prose-md lg:prose-lg dark:prose-invert">
          <h4 className="mt-4">{user.name}</h4>
          <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
        </div>
      </div>
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex space-x-1 border-b border-gray-200 prose prose-md dark:prose-invert max-w-none">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-full whitespace-nowrap py-2.5 leading-5 border-b-2 no-underline focus:outline-none",
                    selected
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent hover:text-gray-700 hover:border-gray-200"
                  )
                }
              >
                {tab.name}
                {tab.count ? (
                  <span className="hidden ml-3 py-0.5 px-2.5 rounded-full prose-sm md:inline-block items-center justify-center bg-blue-100 text-gray-600">
                    {tab.count}
                  </span>
                ) : null}
              </Tab>
            ))}
          </Tab.List>
         <Tab.Panels>
            <Tab.Panel className="rounded-b-xl bg-white dark:bg-slate-800 prose prose-md dark:prose-invert max-w-none p-5">
              <dl>
                <div className="bg-gray-100 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt>Full name</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    {user.name}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt>User name</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    {user.username}
                  </dd>
                </div>
                <div className="bg-gray-100 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt>Email address</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    <Link legacyBehavior href={`mailto://${user.email}`}>
                      <a className="no-underline">{user.email}</a>
                    </Link>
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt>Address</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    {user.address.street} {user.address.suite}
                    <br />
                    {user.address.city}
                    <br />
                    {user.address.zipcode}
                  </dd>
                </div>
                <div className="bg-gray-100 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt>Phone</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    <Link legacyBehavior href={`tel://${user.phone}`}>
                      <a className="no-underline">{user.phone}</a>
                    </Link>
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt>Web site</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    <Link legacyBehavior href={`https://${user.website}`}>
                      <a className="no-underline">{user.website}</a>
                    </Link>
                  </dd>
                </div>
                <div className="bg-gray-100 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt>Company</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    <span className="font-semibold">
                      {user.company.name}
                    </span>
                    <br />
                    <span>{user.company.catchPhrase}</span>
                    <br />
                    <span>{user.company.bs}</span>
                  </dd>
                </div>
              </dl>
            </Tab.Panel>
            <Tab.Panel className="rounded-b-xl bg-white dark:bg-slate-800 prose prose-md dark:prose-invert max-w-none p-5">
              {user.posts?.map(post => (
                <article key={post.id}>
                  <h3>{post.title}</h3>
                  <p className="mb-3 line-clamp-3 md:line-clamp-none">
                    {post.body}
                  </p>
                </article>
              ))}
            </Tab.Panel>
            <Tab.Panel className="rounded-b-xl bg-white dark:bg-slate-800 prose prose-md dark:prose-invert max-w-none p-5">
              {user.albums?.map(album => (
                <article key={album.id}>
                  <h3>{album.title}</h3>
                  <p className="mt-3">{album.photos?.length} photos</p>
                </article>
              ))}
            </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  </div>


  );
};

export default User;

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  let user = await fetcher(`${API_URL}/users/${id}`)

  if (!Object.keys(user).length) {
    return {
      notFound: true
    }
  }
  user.posts = await fetcher(`${API_URL}/users/${id}/posts`)

  user.albums = await fetcher(`${API_URL}/users/${id}/albums`)



  return {
    props: {
      user,
    },
  };
};

// export const getStaticPaths = async () => {
//   const { data } = await Axios.get("https://jsonplaceholder.typicode.com/users");
//   const posts = data.slice(0, 10);
//   const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
//   return {
//     paths,
//     fallback: true,
//   };
// };
export const getStaticPaths = async () => {
    const users = await fetcher(`${API_URL}/users`)

    const paths = users.map(user => ({
      params: { id: user.id.toString() }
    }))

    return {
      paths,
      fallback: false
    }
  }

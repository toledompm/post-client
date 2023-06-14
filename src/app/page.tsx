
type Post = {
  id: number;
  title: string;
  description?: string;
};

export default function Home() {
  const postsData: Post[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Post ${index + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }));

  postsData[0].description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet."

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-4 sm:py-8 md:py-16 lg:py-20 px-4 sm:px-24 md:px-48 lg:px-72">
      <div className="bg-gray-800 shadow-md rounded-lg w-full h-full flex flex-col items-center justify-center border-2 border-gray-100">
        {postsData.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </div>
    </main>
  );
}

function Divider() {
  return (
    <div className="border-b border-gray-500 my-0 w-full" />
  );
}

function PostCard({post}: {post: Post}) {
  return (
    <div className="block w-full h-full">
      <div className="py-4 px-8">
        <div className="text-xl font-semibold text-white mb-2">
          <h3>{post.title}</h3>
        </div>
        <div className="text-white mb-4">
          <p>{post.description}</p>
        </div>
        <div className="bg-gray-700 rounded-lg mb-2 pb-40 sm:pb-80 md:pb-120 lg:pb-160">
          <div className="bg-white rounded-t-lg pb-6">
          </div>
        </div>
        <div className="flex">
          {['tag1', 'tag2', 'tag3'].map((tag) => (TagBubble({tag})))}
        </div>
      </div>
      {Divider()}
    </div>
  );
}

function TagBubble({tag}: {tag: string}) {
  return (
    <div className="text-gray-600 mr-2 text-sm my-2">
      #{tag}
    </div>
  );
}

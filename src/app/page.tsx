import Link from 'next/link';
import Image from 'next/image';

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

  postsData[0].description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24">
      <div className="bg-gray-800 shadow-md rounded-lg w-full sm:w-70 h-full sm:h-70vh flex flex-col items-center justify-center border-2 border-gray-100">
        <ul className="grid grid-cols-1">
          {postsData.map((post) => (
            <PostCard key={post.id} post={post}/>
          ))}
        </ul>
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
    <div className="sm:col-span-1 lg:col-span-1 sm:row-span-1 lg:row-span-1">
        <div className="block w-full h-full">
          <div className="grid grid-cols-12">
            <div className="p-4 col-span-1">
              <Image
                src="https://via.placeholder.com/150"
                alt="Picture of the author"
                width="150"
                height="150"
                className="rounded-full"
              />
            </div>
            <div className="sm:col-span-11 py-4 pr-8 block">
              <div className="">
                <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
              </div>
              <div className="">
                <p className="text-white">{post.description}</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-10 my-5 w-auto">
              </div>
              <div className="flex">
                {['tag1', 'tag2', 'tag3'].map((tag) => (TagBubble({tag})))}
              </div>
            </div>
          </div>
        </div>
        {Divider()}
    </div>
  );
}

function TagBubble({tag}: {tag: string}) {
  return (
    <div className="bg-green-700 rounded-full px-2 py-1 text-white mr-2 my-2 text-sm">
      {tag}
    </div>
  );
}

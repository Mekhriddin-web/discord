import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl text-gray-200 font-bold mb-4'>
        Приветствую в элитном клубt!
      </h1>
      <button className='bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded'>
        Начать общаться!
      </button>
    </main>
  );
}

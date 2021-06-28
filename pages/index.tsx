import Head from 'next/head'
import { Sidebar } from './components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next Appqqq</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      </Head>

      <main className="container w-full h-full flex">
        <Sidebar />
        <div className="bg-c1 inline-flex w-9/12">
          <span>test</span>
        </div>
      </main>
    </div>
  )
};

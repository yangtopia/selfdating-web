import Link from 'next/link';
import Header from '../src/components/header';

const Index = () => {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
};

export default Index;

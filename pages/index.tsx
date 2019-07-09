import Link from 'next/link';
import Header from '../src/components/header';
import '../styles.scss';

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

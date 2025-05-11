import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Child Care Log App</title>
        <meta name="description" content="Track and support children's daily care through simple logging." />
      </Head>

      <main style={styles.container}>
        <h1 style={styles.title}>Welcome to the Child Care Log App</h1>
        <p style={styles.subtitle}>Empowering carers and children through daily insights and secure collaboration.</p>

        <Image
          src="/app-preview.png"
          alt="App Preview"
          width={300}
          height={600}
        />

        <div style={styles.buttonGroup}>
          <a href="https://play.google.com/store/apps/details?id=yourapp" target="_blank" rel="noopener noreferrer">
            <Image src="/google-play-badge.png" alt="Google Play" width={150} height={50} />
          </a>
          <a href="https://apps.apple.com/app/idyourappid" target="_blank" rel="noopener noreferrer">
            <Image src="/app-store-badge.svg" alt="App Store" width={150} height={50} />
          </a>
        </div>

        <p style={{ marginTop: 20 }}>
          <Link href="/PrivacyPolicy">Privacy Policy</Link>
        </p>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '1rem auto'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem'
  }
};

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Tools for reducing bandwidth usage and optimizing web application performance">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 60px)',
        padding: '2rem',
      }}>
        <img 
          src="/img/logo.svg" 
          alt="Sustainable Browser Logo" 
          style={{
            width: '200px',
            height: '200px',
            marginBottom: '3rem',
          }}
        />
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
          {siteConfig.title}
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--ifm-color-emphasis-600)',
          marginBottom: '3rem',
          textAlign: 'center',
          maxWidth: '600px',
        }}>
          {siteConfig.tagline}
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/browser-extension/installation">
            Browser Extension
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/vite-postprocessing/intro">
            Vite Postprocessing
          </Link>
        </div>
      </main>
    </Layout>
  );
}

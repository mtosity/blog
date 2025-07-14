import BlogLayout from "../../components/BlogLayout";
import CodeBlock from "../../components/CodeBlock";

export default function NextJSPost() {
  return (
    <BlogLayout 
      title="Getting Started with Next.js" 
      date="December 20, 2023"
    >
      <p>
        Next.js is a powerful React framework that makes building web applications a breeze. 
        It provides many features out of the box that would otherwise require additional setup and configuration.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
      
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Server-Side Rendering (SSR)</strong> - Better SEO and initial page load performance</li>
        <li><strong>Static Site Generation (SSG)</strong> - Pre-generate pages at build time</li>
        <li><strong>API Routes</strong> - Build your backend API alongside your frontend</li>
        <li><strong>File-based Routing</strong> - No need to configure routes manually</li>
        <li><strong>Built-in CSS Support</strong> - Support for CSS Modules, Sass, and CSS-in-JS</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
      
      <p>
        Creating a new Next.js project is simple with create-next-app:
      </p>
      
      <CodeBlock 
        code="npx create-next-app@latest my-app --typescript --tailwind"
        language="bash"
      />
      
      <p>
        This command creates a new Next.js project with TypeScript and Tailwind CSS configured out of the box.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Project Structure</h2>
      
      <p>
        A typical Next.js project has the following structure:
      </p>
      
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>app/</strong> - Contains your application pages (App Router)</li>
        <li><strong>public/</strong> - Static assets like images and fonts</li>
        <li><strong>components/</strong> - Reusable React components</li>
        <li><strong>styles/</strong> - CSS and styling files</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Next.js?</h2>
      
      <p>
        Next.js offers an excellent developer experience while maintaining high performance for end users. 
        Its flexibility allows you to choose between different rendering methods based on your needs.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Performance Benefits</h3>
      
      <p>
        Next.js automatically optimizes your application for performance with features like automatic code splitting,
        image optimization, and font optimization.
      </p>
    </BlogLayout>
  );
}
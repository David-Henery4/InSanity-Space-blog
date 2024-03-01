

## Things I've Picked Up, learn't and practiced in this project

#### Context Provider Behaviour
In React, a context provider is used to pass data through the component tree without having to pass props down manually at every level. It's a more efficient way to share state between multiple components.
There can only be one main provider, otherwise they could clash. (E.g - a main one clashed with a more nested specific one) Can be differnt ones for completely different state though.

#### CSS Line-Clamp
The CSS `line-clamp` property allows you to limit the number of lines of text shown. It's useful for truncating text in a user interface where space is limited.

#### Using URLSearchParams for Filtering, Searches & Pagination
`URLSearchParams` is a built-in JavaScript object that makes it easy to work with query strings in URLs. It can be used to implement features like filtering, searches, and pagination in web applications. Works well with server components and server-side functionality.

#### Next.js Incremental Site regeneration (ISR), Server side rendering (SSR), Static site generation (SSG), and with data revalidation handling
Next.js ISR allows you to generate static pages on-demand, which means they are rendered at request time, not at build time. This is useful for content that changes often but doesn't need to be updated for every request.

  1. Next.js Incremental Site Regeneration (ISR): <br>
  Incremental Static Regeneration (ISR) is a feature in Next.js where static pages can be updated incrementally after they have been generated. This means that the server will regenerate the page in the background while serving the stale (old) page to the user. Once the page has been regenerated, the server will then serve the new page to subsequent users.

  2. Server Side Rendering (SSR): <br>
  Server Side Rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client. The client’s JavaScript bundle can then take over and the SPA can operate as normal. SSR is used for improving performance and is beneficial for SEO.

  3. Static Site Generation (SSG): <br>
  Static Site Generation (SSG) is a feature where the server generates the HTML pages at build time instead of on each request. The advantage of this approach is that the server can serve static files, which can be cached by CDN for performance.

  4. Data Revalidation <br>
  Data revalidation refers to the process of updating the data at regular intervals. In the context of ISR, it means that the page will be regenerated at most once every specified number of seconds. If you provide a revalidate key in the return object from getStaticProps, then it will trigger a regeneration of the page after the given number of seconds.

#### Server Actions Uses
Server actions in Next.js are functions that run on the server and can be used to handle form submissions, access APIs, send emails, and more.

Server actions are a feature of Next.js that allow you to write server-side code directly in your Next.js application. They are essentially API routes that live alongside your pages in the pages/api directory.

1. Handling Form Submissions: Server actions can be used to process form data on the server. For example, when a user submits a form on your website, a server action could validate the form data, save it to a database, and send a response back to the client.

2. Accessing APIs: Server actions can be used to fetch data from external APIs. This is useful when you need to fetch data that is either private or dynamic. The server action can make a request to the API, process the response, and then send the processed data to the client.

3. Sending Emails: Server actions can be used to send emails. For example, you could create a server action that accepts an email address and a message from a form on your website, and then uses a service like SendGrid or AWS SES to send an email.

4. Performing Server-Side Computations: Since server actions run on the server, they can be used to perform computations or operations that you don’t want to expose to the client. For example, you could create a server action that generates a unique identifier, hashes a password, or performs some other secure operation.

5. Interacting with Databases: Server actions can interact with databases. This means you can create, read, update, and delete records in your database directly from your Next.js application.

Remember, because server actions are just server-side JavaScript, you can use any Node.js package or API in your server actions. This makes them incredibly powerful and flexible. However, always be mindful of security and performance considerations when working with server actions.

 #### Suspense & Error Boundaries
React's Suspense and Error Boundaries are features that help manage loading and error states in a React application. Suspense lets you wait for some code to load and declaratively specify a loading state, while an error boundary is a React component that catches JavaScript errors anywhere in their child component tree.

#### Next.js Cache Behaviour
Next.js has a built-in cache for static pages. This means that once a page is generated, Next.js will serve the static file for subsequent requests, which can greatly improve performance.

#### Shared Layouts & Route Groups
In Next.js, shared layouts allow you to reuse the same layout across multiple pages. Route groups, on the other hand, allow you to organize your routes in a way that makes sense for your application.

#### Page Becomes Dynamic from Static When Using the Pages Props/Params
In Next.js, a page becomes dynamic when it uses props or params that change. This can affect error handling when calling APIs in server components or server actions. If a page is implicitly set as dynamic by something like searchParams, Next.js detects this and switches the page from static to dynamic. This can cause an error when building for production if not handled correctly.

Good to know: <br>
  1. searchParams is a Dynamic API whose values cannot be known ahead of time. Using it will opt the page into dynamic rendering at request time.

  2. searchParams returns a plain JavaScript object and not a URLSearchParams instance.
  
   - Some resources
     - https://stackoverflow.com/questions/78010331/dynamic-server-usage-page-couldnt-be-rendered-statically-because-it-used-next
     - https://nextjs.org/docs/messages/app-static-to-dynamic-error
     - https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-functions
     - https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional

<br>
<br>

## Topics To Be Researched

#### Research about "SWR"
SWR is a React Hooks library for remote data fetching. It could be used for highly interactive projects and with server-side rendering.

#### Uses for Cookies
Cookies are small pieces of data stored on the user's computer by the web browser. They are often used for keeping track of information such as user preferences that the website can retrieve to personalize the page when the user visits the website next time.

#### Learn More About How to Use the Next.js Image Component Properly
The Next.js Image Component is an extension of the HTML `<img>` element, evolved for the modern web. It includes a variety of built-in performance enhancements.

<br>
<br>

## Main Sanity CMS Concepts to Practice

#### Block Text (PortableText)
Portable Text is a JSON-based rich text specification for complex content structures. It's used in Sanity CMS to handle rich text content.

#### Working with GROQ APIs
GROQ (Graph-Relational Object Queries) is Sanity's query language. It's used to fetch, filter, and join your data across documents and datasets.

#### Working with Schemas
In Sanity, schemas are used to define the structure and validation of documents.

#### Building & Working with the Dashboard
The Sanity Dashboard is a customizable space where you can add tools, plugins, and views to suit your workflow.

#### Dashboard Live Previews & Side by Side Previews
Sanity CMS offers live previews of your content, allowing you to see changes in real-time. Side by side previews allow you to view your content next to your editor.

#### Working with and Implementing Different Types of Content
Sanity CMS allows you to work with and implement different types of content, from simple text fields to complex nested objects.
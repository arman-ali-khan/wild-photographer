import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Questions and Answers</h2>
		<div className="divide-y divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-bold text-xl md:col-span-5">Difference Between SQL and NoSQL </h3>
				<p className="md:pl-0 md:col-span-7">SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used. <br /><br />

The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.<br /><br />

Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.</p>
			</div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-bold text-xl md:col-span-5">What is JWT Token? and how does it work?</h3>
				<p className="md:pl-0 md:col-span-7"><b>JWT</b>, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                <br /><br />
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.<br /><br />

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
			</div>


         

            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-bold text-xl md:col-span-5">Difference between Javascript and NodeJS</h3>
				<p className="md:pl-0 md:col-span-7"> <b>NodeJS :</b> <br />
NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 
                <br /><br />
                <b>JavaScript : </b><br />
Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
                </p>
			</div>

            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-bold text-xl md:col-span-5">How does node js handle multiple requests same time?</h3>
				<p className="md:pl-0 md:col-span-7"> We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. 
                <br /><br />
                <b>How NodeJS handle multiple client requests? </b><br />NodeJS receives multiple client requests and places them into <b>EventQueue</b>. NodeJS is built with the concept of event-driven architecture. NodeJS has its own <b>EventLoop</b> which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
                <br /><br />
                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS <b>cluster</b> module or <b>worker_threads</b> module.
                </p>
			</div>

		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;
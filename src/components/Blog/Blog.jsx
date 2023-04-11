import React from 'react';

const Blog = () => {
    return (
        <div className='bg-violet-100 p-10 rounded-3xl mt-10'>
            <h2 className='font-semibold text-4xl'>1. When should you use Context API ?</h2>
            <p className='my-3 text-2xl text-slate-600'>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
</p>
 <h2 className='font-semibold text-4xl mt-10'>2. What is Custom Hook ?</h2> 
 <p className='my-3 text-2xl text-slate-600'> Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
 <h2 className='font-semibold text-4xl mt-10'>3. What is useRef ?</h2>
 <p className='my-3 text-2xl text-slate-600'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
</p>
<h2 className='font-semibold text-4xl mt-10'>4. What is useMemo ?</h2>
<p className='my-3 text-2xl text-slate-600'>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
</p>
        </div>
    );
};

export default Blog;
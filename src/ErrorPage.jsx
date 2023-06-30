import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='text-center text-3xl text-error'>
            <div className='w-[75%] mx-auto'>
                <img
                    className='mx-auto w-full h-2/4'
                    src="https://img.freepik.com/premium-vector/website-page-found-error-robot-character-with-magnifying-glass-hand-site-crash-technical_502272-1890.jpg?w=740"
                    alt="" />
                   
            </div>
            <h2
                className='my-2 font-extrabold text-2xl'>
                <span
                    className='text-error'>
                    ERROR
                </span> {status || 404}
            </h2>
            <p
                className='font-bold my-4'>
                {error?.message}
            </p>
            <Link
                to='/'
                className='no-underline text-white px-5 py-3 font-bold rounded bg-error mb-20'
            >
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;
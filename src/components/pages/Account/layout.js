import NavbarLogin from '@components/common/Layout/nav_login';
import Sidebar from '@components/common/Layout/sidebar';
// import Layout from '@layout';

export default function CustomLayout({ children, userData }) {
  return (
    <div className='min-h-screen bg-gray-101 dark:bg-gray-900'>
      <NavbarLogin userData={userData}/>
      <main className='flex'>
        <div className='w-1/6'>
          <Sidebar />
        </div>
        <div className='w-5/6 bg-gray-50'>
          <div className='container p-8'>{children}</div>
        </div>
      </main>
    </div>
  );
}

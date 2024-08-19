import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo.png';
import useStore from '@/store/store';
import UserMenu from '@/components/menus/UserMenu';
import StatsMenu from '@/components/menus/StatsMenu';
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";

const ServiceMemberMenuItems = [
  {
    label: 'My Transcripts',
    path: '/serviceMember/transcripts',
  },
  {
    label: 'My Inquiries',
    path: '/serviceMember/inquiries',
  },
  {
    label: 'My Degree Agreements',
    path: '/serviceMember/degreeAgreements',
  },
  {
    label: 'Degree Pathways Catalog',
    path: '/serviceMember/degreePathways',
  },
  {
    label: 'Counseling',
    path: '/serviceMember/counseling',
  },
  {
    label: 'Quick Links',
    path: '/quickLinks',
  },
];

const ProgramAdminMenuItems = [
  {
    label: 'Inquiries',
    path: '/programAdmin/inquiries',
  },
  {
    label: 'Accounts Management',
    path: '/programAdmin/accountsManagement',
  },
  {
    label: 'ESO Management',
    path: '/programAdmin/esoManagement',
  },
  {
    label: 'Quick Links',
    path: '/quickLinks',
  },
];

const ESOMenuItems = [
  {
    label: 'ESO Inquiries',
    path: '/eso/inquiries',
  },
  {
    label: 'Degree Pathways Catalog',
    path: '/eso/degreePathways',
  },
  {
    label: 'Counseling',
    path: '/eso/counseling',
  },
  {
    label: 'Quick Links',
    path: '/quickLinks',
  },
];

const ExecMenuItems = [
  {
    label: 'Enrollment Statistics',
    path: '/execStakeholder/enrollment',
  },
  {
    label: 'Personnel by Branch',
    path: '/execStakeholder/personnelData',
  },
  {
    label: 'Quick Links',
    path: '/quickLinks',
  },
];

const handleClick = (label, user) => {
  console.log(label)
  const context = {
      actor: {
        first_name: user?.user?.first_name || 'Anonymous',
        last_name: user?.user?.last_name || 'User',
      },
      verb: {
        id: "http://example.org/verb/explored",
        display: `Viewed ${label}`,
      },
      object: {
          definitionName: `Viewed ${label}`,
      },
      resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
      resultExtValue: "test",
  };
  console.log(context)
  xAPISendStatement(context);
  console.log("sent")
}

function Button({ data, user }) {
  const router = useRouter();
  if (data.path === router?.asPath) {
    return (
      <Link href={data.path}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button onClick={handleClick(data.label, user)} className='px-1 font-bold text-lg text-white border-b-2 border-white-800 hover:white-gray-900'>
          {data.label}
        </button>
      </Link>
    );
  }
  return (
    <Link href={data.path}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <button className='transition-all duration-100 px-2 border-b-2 border-transparent text-lg text-white hover:text-gray-300'>
        {data.label}
      </button>
    </Link>
  );
}

export default function Header() {
  const router = useRouter();
  const user = useStore((state) => state.userData);
  const { removeUserData } = useStore((state) => state);
  const handleLogout = () => {
    router.push('/');
    removeUserData();
  };
  return (
    <header className={'bg-dod-700 w-full shadow z-50'}>
      <nav
        className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}
        aria-label={'Top'}
      >
        <div className='w-full py-4 inline-flex items-center justify-between z-50'>
          <div className={'flex items-center justify-start gap-2'}>
            {user &&
            <Link href={'/dashboard'} passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <button
                title='Home'
                id={'homepage-button'}
                className={'cursor-pointer'}
              >
                <Image src={logo} alt={'Home'} height={'60'} width={'60'} />
              </button>
            </Link>
            }
            
            {user?.role === 'Service Member' && ServiceMemberMenuItems.map((item) => {
                return <Button key={item.label} data={item} />;
            })}
            {user?.role === 'Program Administrator' && ProgramAdminMenuItems.map((item) => {
                return <Button key={item.label} data={item} />;
            })}
            {user?.role === 'ESO' && ESOMenuItems.map((item) => {
                return <Button key={item.label} data={item} />;
            })}
            {user?.role === 'Executive Stakeholder' && ExecMenuItems.map((item) => {
                if(item.label === "Enrollment Statistics"){
                  return <StatsMenu />
                }
                return <Button key={item.label} data={item} user={user}/>;
            })}
          </div>
            <div className='space-x-4'>
              {!user? (
              <>
              <Link href={'/'} passHref>
                <button className='disabled:hidden bg-dod-500 py-2 px-4 rounded inline-block text-white hover:opacity-90 hover:shadow transform transition-all duration-100 ease-in-out font-semibold'>
                  Sign In
                </button>
              </Link>
              <Link href={'/register'} passHref>
                <button className='disabled:hidden bg-dod-500 py-2 px-4 rounded inline-block text-white hover:opacity-90 hover:shadow transform transition-all duration-100 ease-in-out font-semibold'>
                  Sign Up
                </button>
              </Link>
              </>
              ):(
                <UserMenu logout={handleLogout} userData={user}/>
              )}
            </div>
         
        </div>
      </nav>
    </header>
  );
}

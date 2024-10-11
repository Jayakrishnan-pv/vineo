// page.tsx user-dashboard
import { Button, Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Dashboard: React.FC = () => {
  const data = [
    {
      src: '/assets/images/piedra_negra_torrontés-3.svg',
      alt: 'bottle-1',
      name: 'Piedra Negra',
      winery: 'Lurton',
      region: 'Mendoza, Argentina',
      rating: 0,
    },
    {
      src: '/assets/images/artuke-removebg-preview-1.svg',
      alt: 'bottle-2',
      name: 'Artuke',
      winery: 'Bodega Artuke',
      region: 'Rioja, España',
      rating: 4,
    },
    {
      src: '/assets/images/casilla_del_guapo-3.svg',
      alt: 'bottle-3',
      name: 'Casilla Dei Guapo',
      winery: 'Gran Feudo',
      region: 'Navarra, España',
      rating: 0,
    },
  ];

  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
      <div className="w-64 -translate-x-full rounded-2xl bg-white transition-transform duration-150 ease-in md:m-10 md:translate-x-0 md:shadow-2xl">
        <div className="flex items-center justify-center py-4">
          <div className="mt-5 inline-flex">
            <Image src="/assets/images/vineo-logo.png" alt="vineo-logo" className="" width={100} height={100} />
          </div>
        </div>
        <div className="px-4 py-6">
          <ul className="flex h-full flex-col justify-between">
            <div>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image src="/assets/images/logo/home.svg" alt="home icon" width={25} height={25} className="" />
                  </div>
                  <div className="ml-3 text-gray-600">incio</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image src="/assets/images/logo/inbox-Regular.svg" alt="home icon" width={25} height={25} className="" />
                  </div>
                  <div className="ml-3 text-gray-600">Bodega virtual</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image src="/assets/images/logo/star.svg" alt="home icon" width={25} height={25} className="" />
                  </div>
                  <div className="ml-3 text-gray-600">Subscription</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-green-400">
                    <Image src="/assets/images/logo/settings.svg" alt="home icon" width={25} height={25} className="" />
                  </div>
                  <div className="ml-3 text-gray-600">settings</div>
                </Link>
              </li>
            </div>

            <li className="my-32">
              <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center justify-center text-lg text-gray-400">
                  <Image src="/assets/images/logo/vector.svg" alt="home icon" width={20} height={20} className="" />
                </div>
                <div className="ml-3 text-gray-600">Logout</div>
              </Link>
            </li>
            <li className="my-16">
              <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center justify-center text-lg text-gray-400">
                  <Image src="/assets/images/logo/coin.svg" alt="home icon" width={25} height={25} className="" />
                </div>
                <div>
                  <div className="ml-3 text-gray-600">Carios Bernabeu</div>
                  <div className="ml-3 block text-xs text-gray-400">400 Vineo Coins</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right container */}

      <div className="-ml-64 flex grow flex-col transition-all duration-150 ease-in md:ml-0">
        <div className="flex grow flex-col p-4">
          <div className="m-5 rounded-2xl border-2 bg-white p-4 shadow-2xl md:m-2">
            <div>
              <div className="m-5 text-xl">
                Tu recomendación más reciente
              </div>
              <div className="">
                <div className="flex flex-col text-center md:flex-row">
                  <div className="m-5 flex grow flex-col rounded-xl py-4 shadow-2xl md:flex-row">
                    {data.map(rec => (
                      <div key={rec.alt} className="flex grow flex-col items-center">
                        <Image
                          src={rec.src}
                          alt={rec.alt}
                          width={100}
                          height={100}
                          className="size-48 object-contain"
                        />
                        <div className="text-red-400">{rec.name}</div>
                        <div className="mt-5 text-sm text-gray-400">{rec.winery}</div>
                        <div className="mb-5 text-sm text-gray-400">{rec.region}</div>
                        <Rating name="read-only" value={rec.rating} readOnly className="custom-rating " />
                      </div>
                    ))}
                  </div>
                  <div className="my-5 flex grow flex-col rounded-xl shadow-2xl">
                    <Image
                      src="/assets/images/graph.svg"
                      alt="graph"
                      width={300}
                      height={300}
                      className=" object-contain"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="contained" className="my-10 rounded-xl bg-red-400 px-10">¡Envíame esta caja a casa!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const chartData = {
    labels: ['Sport Car', 'SUV', 'Coupe', 'Hatchback', 'MPV'],
    datasets: [
      {
        label: 'Top 5 Car Rental',
        data: [17439, 9478, 18197, 12510, 14406],
        backgroundColor: [
          '#5470C6',
          '#91CC75',
          '#FAC858',
          '#EE6666',
          '#73C0DE'
        ],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white p-6 shadow-xl">
        <nav>
          <h2 className="text-gray-400 text-sm font-bold mb-4">MAIN MENU</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-white bg-blue-600 p-3 rounded-lg text-lg font-bold flex items-center hover:bg-blue-700">
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="#car-rent-page" onClick={(e) => { e.preventDefault(); document.getElementById('car-rent-page').classList.remove('hidden'); }} className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
                <span className="ml-2">Car Rent</span>
              </Link>
            </li>
            <li>
              <Link href="/temas/insight" className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
                <span className="ml-2">Insight</span>
              </Link>
            </li>
            <li>
              <Link href="/temas/reimburse" className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
                <span className="ml-2">Reimburse</span>
              </Link>
            </li>
            <li>
              <Link href="/temas/inbox" className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
                <span className="ml-2">Inbox</span>
              </Link>
            </li>
            <li>
              <Link href="/temas/calendar" className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
                <span className="ml-2">Calendar</span>
              </Link>
            </li>
          </ul>
          <div className="border-t my-6"></div>
          <h2 className="text-gray-400 text-sm font-bold mb-4">PREFERENCES</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/settings" className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
                <span className="ml-2">Settings</span>
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
                <span className="ml-2">Help & Center</span>
              </Link>
            </li>
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-200">
              <span className="text-gray-600 text-lg font-bold">Dark Mode</span>
              <button className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700"></button>
            </li>
          </ul>
          <div className="mt-10">
            <Link href="/logout" className="text-gray-600 p-3 rounded-lg text-lg font-bold flex items-center hover:text-blue-600 hover:bg-gray-200">
              <span className="ml-2">Log Out</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Details Rental */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold mb-4">Details Rental</h2>
            <MapContainer center={[-23.5505, -46.6333]} zoom={10} className="h-48 w-full rounded-lg mb-4">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-23.5505, -46.6333]}>
                <Popup>Nissan GT - R Location</Popup>
              </Marker>
            </MapContainer>
            <div className="flex items-center mb-4">
              <Image src="/car-image.png" alt="Car" width={120} height={80} className="rounded-lg shadow-md" />
              <div className="ml-4">
                <h3 className="text-lg font-bold">Nissan GT - R</h3>
                <p className="text-gray-500">Sport Car</p>
                <span className="text-gray-400 text-sm">#9761</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="font-semibold">Pick - Up</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <div>
                  <label className="block text-sm text-gray-500">Locations</label>
                  <span className="block font-medium">Kota Semarang</span>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Date</label>
                  <span className="block font-medium">20 July 2022</span>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Time</label>
                  <span className="block font-medium">07:00</span>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="font-semibold">Drop - Off</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-500">Locations</label>
                  <span className="block font-medium">Kota Semarang</span>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Date</label>
                  <span className="block font-medium">21 July 2022</span>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Time</label>
                  <span className="block font-medium">01:00</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <span className="text-gray-500 font-medium">Total Rental Price</span>
              <span className="font-bold text-3xl">$80.00</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">Overall price and includes rental discount</p>
          </div>

          {/* Top 5 Car Rental and Recent Transaction */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl space-y-8">
            {/* Top 5 Car Rental */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Top 5 Car Rental</h2>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="material-icons">more_vert</span>
                </button>
              </div>
              <div className="flex justify-center">
                <div className="h-24 w-24"><Doughnut data={chartData} /></div>
              </div>
              <div className="flex flex-col justify-center items-center mt-4">
                <span className="text-3xl font-bold">72,030</span>
                <span className="text-gray-500">Rental Car</span>
                <div className="mt-6 flex flex-col items-start space-y-2">
                  {chartData.labels.map((label, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></div>
                      <span className="text-sm font-medium text-gray-700">{label}</span>
                      <span className="ml-auto text-sm text-gray-500">{chartData.datasets[0].data[index].toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transaction */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Transaction</h2>
                <Link href="/transactions" className="text-blue-600 hover:text-gray-700">View All</Link>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <Image src="/car-image1.png" alt="Car 1" width={80} height={50} className="rounded-lg" />
                  <div className="flex-1 ml-4">
                    <span className="font-bold">Nissan GT - R</span>
                    <p className="text-gray-500 text-sm">Sport Car</p>
                    <span className="text-gray-400 text-sm">20 July</span>
                  </div>
                  <span className="font-bold text-lg">$80.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <Image src="/car-image2.png" alt="Car 2" width={80} height={50} className="rounded-lg" />
                  <div className="flex-1 ml-4">
                    <span className="font-bold">Koenigsegg</span>
                    <p className="text-gray-500 text-sm">Sport Car</p>
                    <span className="text-gray-400 text-sm">19 July</span>
                  </div>
                  <span className="font-bold text-lg">$99.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <Image src="/car-image3.png" alt="Car 3" width={80} height={50} className="rounded-lg" />
                  <div className="flex-1 ml-4">
                    <span className="font-bold">Rolls - Royce</span>
                    <p className="text-gray-500 text-sm">Sport Car</p>
                    <span className="text-gray-400 text-sm">18 July</span>
                  </div>
                  <span className="font-bold text-lg">$96.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <Image src="/car-image4.png" alt="Car 4" width={80} height={50} className="rounded-lg" />
                  <div className="flex-1 ml-4">
                    <span className="font-bold">CR - V</span>
                    <p className="text-gray-500 text-sm">SUV</p>
                    <span className="text-gray-400 text-sm">17 July</span>
                  </div>
                  <span className="font-bold text-lg">$80.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Car Rent Page */}
        <div id="car-rent-page" className="hidden">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl mt-8">
            <h2 className="text-xl font-bold mb-4">Car Rent Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Billing Info</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Name</label>
                  <input type="text" placeholder="Your name" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Phone Number</label>
                  <input type="text" placeholder="Phone number" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Address</label>
                  <input type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Town / City</label>
                  <input type="text" placeholder="Town or city" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Rental Info</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Pick - Up Location</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Select your city</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Pick - Up Date</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Drop - Off Location</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Select your city</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Drop - Off Date</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Proceed to Payment</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

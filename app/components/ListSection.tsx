import Image from 'next/image';
import Link from 'next/link';

const ListSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-4">Advanced Filter</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Province</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Province</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Kpk">Kpk</option>
                <option value="Gilgit Baltistan">Gilgit Baltistan</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select City</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Multan">Multan</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Near</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>1 km</option>
                <option>2 km</option>
                <option>3 km</option>
                <option>4 km</option>
                <option>5 km</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price range</label>
              <div className="flex flex-col">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">$50 - $100</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">$100 - $150</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">$150 - $200</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">$200 - $250</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">$250 - $300</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tags</label>
              <div className="flex flex-col">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Wireless Internet</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Accepts Credit Cards</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Smoking</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Parking Streets</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Coupons</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">5432 Listings are available</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Single listing item */}
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="relative">
                <Image
                  src="/List1.png"
                  alt="Listing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  CLOSED
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Urban areas</h3>
                <p className="text-gray-600">
                  Lets uncover the best places to eat, drink
                </p>
                <p className="mt-2 text-sm text-gray-500">Food & Restaurant</p>
              </div>
            </div>
            {/* Repeat the above block for more listings */}
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="relative">
                <Image
                  src="/List2.png"
                  alt="Listing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  CLOSED
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Urban areas</h3>
                <p className="text-gray-600">
                  Lets uncover the best places to eat, drink
                </p>
                <p className="mt-2 text-sm text-gray-500">Food & Restaurant</p>
              </div>
            </div>
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="relative">
                <Image
                  src="/List3.png"
                  alt="Listing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  CLOSED
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Urban areas</h3>
                <p className="text-gray-600">
                  Lets uncover the best places to eat, drink
                </p>
                <p className="mt-2 text-sm text-gray-500">Food & Restaurant</p>
              </div>
            </div>
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="relative">
                <Image
                  src="/List1.png"
                  alt="Listing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  CLOSED
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Urban areas</h3>
                <p className="text-gray-600">
                  Lets uncover the best places to eat, drink
                </p>
                <p className="mt-2 text-sm text-gray-500">Food & Restaurant</p>
              </div>
            </div>
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="relative">
                <Image
                  src="/List2.png"
                  alt="Listing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  CLOSED
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Urban areas</h3>
                <p className="text-gray-600">
                  Lets uncover the best places to eat, drink
                </p>
                <p className="mt-2 text-sm text-gray-500">Food & Restaurant</p>
              </div>
            </div>
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="relative">
                <Image
                  src="/List3.png"
                  alt="Listing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  CLOSED
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Urban areas</h3>
                <p className="text-gray-600">
                  Lets uncover the best places to eat, drink
                </p>
                <p className="mt-2 text-sm text-gray-500">Food & Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;

export default function Table() {
  const tableData = [
    {
      id: 1,
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Sandton',
      age: '38',
      role: 'Admin',
      department: 'IT',
      phone: '123456789',
      email: 'example@example.com'
    },
    {
      id: 2,
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Alberton',
      age: '63',
      role: 'Admin',
      department: 'Finance',
      phone: '123456789',
      email: 'garett@example.com'
    },
    {
      id: 3,
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'Centurion',
      age: '66',
      role: 'Admin',
      department: 'HR',
      phone: '123456789',
      email: 'ashton@example.com'
    },
    {
      id: 4,
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Pretoria',
      age: '22',
      role: 'Admin',
      department: 'SAP',
      phone: '123456789',
      email: 'cedric@example.com'
    },
    {
      id: 5,
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Johannesburg',
      age: '33',
      role: 'Admin',
      department: 'Procurement',
      phone: '123456789',
      email: 'airi@example.com'
    },
    {
      id: 6,
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'Cape Town',
      age: '61',
      role: 'Admin',
      department: 'Distribution',
      phone: '123456789',
      email: 'brielle@example.com'
    }
  ]

  return (
    <div id="table" className="overflow-x-auto pt-5">
      <div className="flex flex-col items-center justify-center bg-[#D1E8E2] py-5 min-w-full">
        <h1 className="text-3xl font-bold text-black font-mono text-center">Data Table</h1>
      </div>
      <table className="min-w-full bg-[#D1E8E2] shadow-lg rounded font-mono">
        <thead>
          <tr className="border-2">
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Position
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Office
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 border-2 border-black py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 border-2 border-black shadow-md">
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.position}</td>
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.office}</td>
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.age}</td>
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.role}</td>
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.department}</td>
              <td className="px-6 border-2 shadow-lg border-black py-4 whitespace-nowrap">{item.phone}</td>
              <td className="px-6 border-2 shadow-lg border-black text-blue-500 cursor-pointer py-4 whitespace-nowrap">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

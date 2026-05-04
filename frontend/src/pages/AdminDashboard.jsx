import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "../api/axios"; 

const IconTrash = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
);

// ... keep IconRefresh and IconDatabase components

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await getAllUsers();
      setUsers(data.users || []);
    } catch (err) {
      console.error("Data retrieval failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Purge this identity from the database?")) {
      try {
        await deleteUser(id);
        // Optimistically update UI
        setUsers(users.filter(user => user._id !== id));
      } catch (err) {
        alert("Purge failed. Node restricted.");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = users.filter(user => 
    user.identifier.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111] font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER SECTION - Identical to your code */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-black text-white rounded">
                <IconDatabase />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Database Node</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter">Identity Console</h1>
            <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-widest">Encrypted Data Stream</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search Identifier..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-all w-full md:w-64 font-medium"
            />
            <button 
              onClick={fetchData}
              className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-600"
            >
              <IconRefresh />
            </button>
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm shadow-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Timestamp</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Identifier</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Key Access</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="4" className="px-8 py-6 bg-slate-50/50"></td>
                    </tr>
                  ))
                ) : filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user._id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6 text-xs font-mono text-slate-400">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-bold tracking-tight text-slate-900">{user.identifier}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                          {user.password}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <button 
                          onClick={() => handleDelete(user._id)}
                          className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          title="Purge Entry"
                        >
                          <IconTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-8 py-20 text-center">
                      <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">No Records Found In Node</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER INFO */}
        <div className="flex justify-between items-center opacity-30 px-4">
           <span className="text-[10px] font-black uppercase tracking-widest">Total Entries: {filteredUsers.length}</span>
           <span className="text-[10px] font-black uppercase tracking-widest">Protocol: AES-256 Bit Extraction</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
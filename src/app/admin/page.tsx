"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, 
  CheckCircle, 
  FileText, 
  Loader2, 
  Lock, 
  LogOut, 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  X, 
  Calendar, 
  AlertTriangle, 
  Download,
  ExternalLink,
  ImageIcon,
  Users,
  CalendarCheck,
  BarChart3,
  RefreshCw,
  LayoutDashboard
} from 'lucide-react';

interface ReportItem {
  _id: string;
  patientName: string;
  phoneNumber: string;
  patientId?: string;
  reportTitle: string;
  testName?: string;
  reportDate?: string;
  fileUrl: string;
  fileType: string;
  fileName?: string;
  fileSize?: number;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Menu Tab: 'dashboard' | 'reports' | 'bookings' | 'analytics'
  const [activeTab, setActiveTab] = useState<'dashboard' | 'reports' | 'bookings' | 'analytics'>('reports');
  
  // Reports State
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [fetchingReports, setFetchingReports] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Add Report Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addPatientName, setAddPatientName] = useState('');
  const [addPhoneNumber, setAddPhoneNumber] = useState('');
  const [addReportTitle, setAddReportTitle] = useState('');
  const [addReportDate, setAddReportDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [addFile, setAddFile] = useState<File | null>(null);
  const [isDraggingAdd, setIsDraggingAdd] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState('');
  const addFileInputRef = useRef<HTMLInputElement>(null);

  // Edit Report Modal State
  const [editingReport, setEditingReport] = useState<ReportItem | null>(null);
  const [editPatientName, setEditPatientName] = useState('');
  const [editPhoneNumber, setEditPhoneNumber] = useState('');
  const [editReportTitle, setEditReportTitle] = useState('');
  const [editReportDate, setEditReportDate] = useState('');
  const [editFile, setEditFile] = useState<File | null>(null);
  const [isDraggingEdit, setIsDraggingEdit] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState('');
  const editFileInputRef = useRef<HTMLInputElement>(null);

  // Delete Confirmation Modal State
  const [deletingReport, setDeletingReport] = useState<ReportItem | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // View Report Modal State
  const [viewingReport, setViewingReport] = useState<ReportItem | null>(null);

  // Success / Global Toast Message
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Other Tabs Data
  const [bookings, setBookings] = useState<any[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [fetchingBookings, setFetchingBookings] = useState(false);
  const [stats, setStats] = useState<any[]>([]);
  const [fetchingStats, setFetchingStats] = useState(false);

  // Check local storage for persistent login session
  useEffect(() => {
    const auth = localStorage.getItem('jangra_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchReports();
    }
  }, []);

  // Format File Size Helper
  const formatBytes = (bytes?: number) => {
    if (!bytes) return '';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Helper to validate and handle any incoming file (Drag & Drop, Paste Ctrl+V, or File Picker)
  const handleIncomingFile = (file: File, target: 'add' | 'edit') => {
    const isAllowed =
      file.type.includes('pdf') ||
      file.type.includes('image') ||
      Boolean(file.name.match(/\.(pdf|jpg|jpeg|png)$/i));

    if (!isAllowed) {
      const err = 'Please upload a PDF or image file (PDF, JPG, JPEG, PNG).';
      if (target === 'add') setAddError(err);
      else setEditError(err);
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      const err = 'File size exceeds 15MB limit. Please upload a smaller file.';
      if (target === 'add') setAddError(err);
      else setEditError(err);
      return;
    }

    const cleanName =
      file.name === 'image.png' || !file.name
        ? `Report_${Date.now().toString().slice(-4)}.png`
        : file.name;
    const finalFile = file.name === cleanName ? file : new File([file], cleanName, { type: file.type || 'image/png' });

    if (target === 'add') {
      setAddFile(finalFile);
      setAddError('');
      showToast(`Ready to upload: ${finalFile.name}`);
    } else {
      setEditFile(finalFile);
      setEditError('');
      showToast(`Replacement file selected: ${finalFile.name}`);
    }
  };

  // Clipboard Paste Support (Ctrl+V) anywhere while Add or Edit modal is open
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (!isAddModalOpen && !editingReport) return;

      const items = e.clipboardData?.items;
      let pastedFile: File | null = null;

      if (e.clipboardData?.files && e.clipboardData.files.length > 0) {
        pastedFile = e.clipboardData.files[0];
      } else if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].kind === 'file') {
            const f = items[i].getAsFile();
            if (f) {
              pastedFile = f;
              break;
            }
          }
        }
      }

      if (pastedFile) {
        e.preventDefault();
        const target = isAddModalOpen ? 'add' : 'edit';
        handleIncomingFile(pastedFile, target);
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [isAddModalOpen, editingReport]);

  const fetchReports = async () => {
    setFetchingReports(true);
    try {
      const res = await fetch('/api/reports');
      const data = await res.json();
      if (res.ok && data.success) {
        setReports(data.reports || []);
      }
    } catch (err) {
      console.error('Fetch reports error:', err);
    } finally {
      setFetchingReports(false);
    }
  };

  const fetchBookings = async () => {
    setFetchingBookings(true);
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      if (res.ok) setBookings(data.bookings || []);
    } catch (err) {
      console.error(err);
    } finally {
      setFetchingBookings(false);
    }
  };

  const fetchStats = async () => {
    setFetchingStats(true);
    try {
      const res = await fetch('/api/analytics/clicks');
      const data = await res.json();
      if (res.ok) setStats(data.stats || []);
    } catch (err) {
      console.error(err);
    } finally {
      setFetchingStats(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'jangra@2026') {
      setIsAuthenticated(true);
      localStorage.setItem('jangra_admin_auth', 'true');
      setLoginError('');
      fetchReports();
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('jangra_admin_auth');
    setUsername('');
    setPassword('');
  };

  // Add Report Handler
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddError('');

    if (!addPatientName.trim() || !addPhoneNumber.trim() || !addReportTitle.trim() || !addFile) {
      setAddError('Please fill in all required fields and choose a report file.');
      return;
    }

    const cleanPhone = addPhoneNumber.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setAddError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setAddLoading(true);
    const formData = new FormData();
    formData.append('patientName', addPatientName.trim());
    formData.append('phoneNumber', cleanPhone);
    formData.append('reportTitle', addReportTitle.trim());
    formData.append('reportDate', addReportDate);
    formData.append('file', addFile);

    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        showToast('Report uploaded and saved successfully!');
        setIsAddModalOpen(false);
        setAddPatientName('');
        setAddPhoneNumber('');
        setAddReportTitle('');
        setAddReportDate(new Date().toISOString().split('T')[0]);
        setAddFile(null);
        fetchReports();
      } else {
        setAddError(data.error || 'Failed to upload report');
      }
    } catch (err) {
      setAddError('Network error occurred during report upload.');
    } finally {
      setAddLoading(false);
    }
  };

  // Open Edit Modal
  const openEditModal = (report: ReportItem) => {
    setEditingReport(report);
    setEditPatientName(report.patientName);
    setEditPhoneNumber(report.phoneNumber || report.patientId || '');
    setEditReportTitle(report.reportTitle || report.testName || '');
    const dateVal = report.reportDate ? new Date(report.reportDate).toISOString().split('T')[0] : '';
    setEditReportDate(dateVal);
    setEditFile(null);
    setEditError('');
  };

  // Save Edit Handler
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReport) return;
    setEditError('');

    const cleanPhone = editPhoneNumber.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setEditError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setEditLoading(true);
    const formData = new FormData();
    formData.append('patientName', editPatientName.trim());
    formData.append('phoneNumber', cleanPhone);
    formData.append('reportTitle', editReportTitle.trim());
    if (editReportDate) formData.append('reportDate', editReportDate);
    if (editFile) formData.append('file', editFile);

    try {
      const res = await fetch(`/api/reports/${editingReport._id}`, {
        method: 'PUT',
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        showToast('Report updated successfully!');
        setEditingReport(null);
        fetchReports();
      } else {
        setEditError(data.error || 'Failed to update report');
      }
    } catch (err) {
      setEditError('Network error occurred during update.');
    } finally {
      setEditLoading(false);
    }
  };

  // Delete Report Handler
  const confirmDelete = async () => {
    if (!deletingReport) return;
    setDeleteLoading(true);

    try {
      const res = await fetch(`/api/reports/${deletingReport._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.ok && data.success) {
        showToast('Report and uploaded file deleted successfully.');
        setDeletingReport(null);
        fetchReports();
      } else {
        alert(data.error || 'Failed to delete report.');
      }
    } catch (err) {
      alert('Network error while deleting report.');
    } finally {
      setDeleteLoading(false);
    }
  };

  const formatDateDisplay = (dateString?: string) => {
    if (!dateString) return '-';
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });
    } catch {
      return dateString;
    }
  };

  const isImage = (report: ReportItem) => {
    const type = (report.fileType || '').toLowerCase();
    const url = (report.fileUrl || '').toLowerCase();
    return type === 'jpg' || type === 'jpeg' || type === 'png' || url.endsWith('.jpg') || url.endsWith('.png');
  };

  // Filtered reports
  const filteredReports = reports.filter((r) => {
    const s = searchTerm.toLowerCase();
    const name = (r.patientName || '').toLowerCase();
    const phone = (r.phoneNumber || r.patientId || '').toLowerCase();
    const title = (r.reportTitle || r.testName || '').toLowerCase();
    return name.includes(s) || phone.includes(s) || title.includes(s);
  });

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F5F9FD] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="w-14 h-14 bg-[#1D64D8] rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-500/20">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="mt-5 text-center text-3xl font-extrabold text-[#0A1938]">
            Admin Sign In
          </h2>
          <p className="mt-2 text-center text-xs sm:text-sm text-slate-500">
            Jangra Diagnostics &amp; Dental Care Centre • Staff Portal
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
          <div className="bg-white py-8 px-6 sm:px-10 shadow-[0_4px_24px_rgba(10,25,56,0.06)] rounded-3xl border border-slate-100">
            <form className="space-y-5" onSubmit={handleLogin}>
              {loginError && (
                <div className="bg-rose-50 text-rose-700 p-3.5 rounded-xl text-xs sm:text-sm text-center border border-rose-200">
                  {loginError}
                </div>
              )}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1D64D8]/10 focus:border-[#1D64D8] text-slate-900 text-sm outline-none bg-slate-50 focus:bg-white"
                  placeholder="Enter admin username"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1D64D8]/10 focus:border-[#1D64D8] text-slate-900 text-sm outline-none bg-slate-50 focus:bg-white"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md shadow-blue-500/10 cursor-pointer"
              >
                Sign In to Admin Panel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Banner / Navbar */}
      <header className="bg-[#0A1938] text-white border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1D64D8] flex items-center justify-center font-black text-white text-base">
                J
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold leading-none tracking-tight">
                  Jangra Diagnostics
                </h1>
                <p className="text-[11px] text-blue-200 font-medium mt-0.5">
                  Admin &amp; Report Management System
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/download-report"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Patient Portal
              </a>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-200 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Menu */}
      <div className="bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto py-2">
            <button
              onClick={() => setActiveTab('reports')}
              className={`inline-flex items-center gap-2 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'reports'
                  ? 'bg-[#EBF5FE] text-[#1D64D8]'
                  : 'text-slate-600 hover:text-[#0A1938] hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" /> Reports Management
              <span className="ml-1 bg-white border border-sky-100 text-[#1D64D8] text-[11px] px-2 py-0.2 rounded-full font-bold">
                {reports.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`inline-flex items-center gap-2 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-[#EBF5FE] text-[#1D64D8]'
                  : 'text-slate-600 hover:text-[#0A1938] hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </button>

            <button
              onClick={() => {
                setActiveTab('bookings');
                fetchBookings();
              }}
              className={`inline-flex items-center gap-2 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'bookings'
                  ? 'bg-[#EBF5FE] text-[#1D64D8]'
                  : 'text-slate-600 hover:text-[#0A1938] hover:bg-slate-100'
              }`}
            >
              <CalendarCheck className="w-4 h-4" /> Appointments
            </button>

            <button
              onClick={() => {
                setActiveTab('analytics');
                fetchStats();
              }}
              className={`inline-flex items-center gap-2 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-[#EBF5FE] text-[#1D64D8]'
                  : 'text-slate-600 hover:text-[#0A1938] hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="w-4 h-4" /> Analytics
            </button>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-2xl flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage('')} className="text-emerald-500 hover:text-emerald-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ========================================================
            REPORTS MANAGEMENT TAB (Core Focus)
           ======================================================== */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            
            {/* Action Bar */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A1938] tracking-tight">
                  Diagnostic Reports
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Upload, search, view, edit, or delete patient test reports.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search name, phone, or test..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2.5 border border-slate-200 rounded-2xl text-xs sm:text-sm w-full sm:w-72 bg-slate-50 focus:bg-white focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10 outline-none"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  onClick={fetchReports}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-2xl transition-colors cursor-pointer self-center sm:self-auto"
                  title="Refresh Reports"
                >
                  <RefreshCw className={`w-4 h-4 ${fetchingReports ? 'animate-spin' : ''}`} />
                </button>

                <button
                  onClick={() => {
                    setIsAddModalOpen(true);
                    setAddError('');
                  }}
                  className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-bold px-5 py-2.5 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add New Report
                </button>
              </div>
            </div>

            {/* Reports Table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(10,25,56,0.04)] overflow-hidden">
              {fetchingReports ? (
                <div className="py-20 text-center text-slate-500 flex flex-col items-center justify-center">
                  <Loader2 className="w-8 h-8 text-[#1D64D8] animate-spin mb-3" />
                  <p className="text-xs sm:text-sm font-medium">Loading reports from database...</p>
                </div>
              ) : filteredReports.length === 0 ? (
                <div className="py-16 text-center text-slate-500 px-4">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-400">
                    <FileText className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-[#0A1938]">No Reports Found</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                    {searchTerm
                      ? `No records matching "${searchTerm}". Try a different name or number.`
                      : 'No reports uploaded yet. Click "+ Add New Report" to publish your first patient report.'}
                  </p>
                  {!searchTerm && (
                    <button
                      onClick={() => setIsAddModalOpen(true)}
                      className="mt-4 inline-flex items-center gap-1.5 bg-[#1D64D8] text-white font-semibold text-xs px-4 py-2 rounded-xl"
                    >
                      <Plus className="w-3.5 h-3.5" /> Upload First Report
                    </button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-100 text-left">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Patient Name
                        </th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Phone
                        </th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Test / Report
                        </th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                          File
                        </th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {filteredReports.map((report) => {
                        const isImg = isImage(report);
                        const phone = report.phoneNumber || report.patientId || 'N/A';
                        const title = report.reportTitle || report.testName || 'Report';

                        return (
                          <tr key={report._id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-bold text-[#0A1938]">{report.patientName}</div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-slate-600 font-medium">
                              <span className="font-mono text-xs bg-slate-100 px-2.5 py-1 rounded-lg">
                                {phone}
                              </span>
                            </td>

                            <td className="px-6 py-4">
                              <div className="font-semibold text-slate-800 max-w-xs truncate" title={title}>
                                {title}
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-slate-500 text-xs">
                              {formatDateDisplay(report.reportDate || report.createdAt)}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <span
                                className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                                  isImg
                                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                                }`}
                              >
                                {isImg ? <ImageIcon className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                                {isImg ? 'IMG' : 'PDF'}
                              </span>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setViewingReport(report)}
                                  className="p-1.5 rounded-lg text-slate-600 hover:text-[#1D64D8] hover:bg-blue-50 transition-colors"
                                  title="View Report"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>

                                <button
                                  onClick={() => openEditModal(report)}
                                  className="p-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                  title="Edit Report"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>

                                <button
                                  onClick={() => setDeletingReport(report)}
                                  className="p-1.5 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                  title="Delete Report"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================
            DASHBOARD TAB (Quick Metrics Overview)
           ======================================================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-[#0A1938]">{reports.length}</div>
                <p className="text-xs text-slate-500 font-medium mt-1">Total Reports Published</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-[#0A1938]">
                  {new Set(reports.map((r) => r.phoneNumber || r.patientId)).size}
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">Unique Patients Registered</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-[#0A1938]">{bookings.length}</div>
                <p className="text-xs text-slate-500 font-medium mt-1">Booking Appointments Received</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <h3 className="text-lg font-bold text-[#0A1938] mb-2">Quick Actions</h3>
              <p className="text-xs text-slate-500 mb-4">Jump straight into regular tasks:</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setActiveTab('reports');
                    setIsAddModalOpen(true);
                  }}
                  className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5" /> Upload Patient Report
                </button>
                <button
                  onClick={() => {
                    setActiveTab('reports');
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" /> View All Reports
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            BOOKINGS TAB
           ======================================================== */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-[#0A1938]">Online Booking Requests</h2>
                <p className="text-xs text-slate-500">Patient appointments and home sample requests.</p>
              </div>
              <button
                onClick={fetchBookings}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold"
              >
                Refresh
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] overflow-hidden">
              {fetchingBookings ? (
                <div className="py-20 text-center"><Loader2 className="w-8 h-8 text-[#1D64D8] animate-spin mx-auto" /></div>
              ) : bookings.length === 0 ? (
                <div className="py-16 text-center text-slate-500 text-sm">No appointment requests found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-100 text-xs sm:text-sm">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold text-slate-500 uppercase text-[11px]">ID / Date</th>
                        <th className="px-6 py-4 text-left font-bold text-slate-500 uppercase text-[11px]">Patient Details</th>
                        <th className="px-6 py-4 text-left font-bold text-slate-500 uppercase text-[11px]">Collection</th>
                        <th className="px-6 py-4 text-left font-bold text-slate-500 uppercase text-[11px]">Tests</th>
                        <th className="px-6 py-4 text-right font-bold text-slate-500 uppercase text-[11px]">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {bookings.map((booking) => (
                        <tr key={booking._id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-bold text-[#0A1938] block">{booking.bookingId}</span>
                            <span className="text-slate-400 text-xs">{new Date(booking.createdAt).toLocaleDateString()}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-bold text-slate-900 block">{booking.patientName}</span>
                            <span className="text-slate-500 text-xs">{booking.mobileNumber}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-slate-700">{booking.collectionType}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1 max-w-xs">
                              {booking.tests?.map((t: string, i: number) => (
                                <span key={i} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px]">{t}</span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button
                              onClick={() => setSelectedBooking(booking)}
                              className="text-[#1D64D8] bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-xs font-bold"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================
            ANALYTICS TAB
           ======================================================== */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-[#0A1938]">Link Clicks Analytics</h2>
                <p className="text-xs text-slate-500">Tracking button and quick-link engagement across the site.</p>
              </div>
              <button
                onClick={fetchStats}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold"
              >
                Refresh
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] overflow-hidden">
              {fetchingStats ? (
                <div className="py-20 text-center"><Loader2 className="w-8 h-8 text-[#1D64D8] animate-spin mx-auto" /></div>
              ) : stats.length === 0 ? (
                <div className="py-16 text-center text-slate-500 text-sm">No click logs recorded yet.</div>
              ) : (
                <table className="min-w-full divide-y divide-slate-100 text-xs sm:text-sm">
                  <thead className="bg-[#F8FAFC]">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-slate-500 uppercase text-[11px]">Link / Action</th>
                      <th className="px-6 py-4 text-right font-bold text-slate-500 uppercase text-[11px]">Total Clicks</th>
                      <th className="px-6 py-4 text-right font-bold text-slate-500 uppercase text-[11px]">Last Clicked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {stats.map((s) => (
                      <tr key={s._id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-slate-900">{s.linkName}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#1D64D8]">{s.clicks}</td>
                        <td className="px-6 py-4 text-right text-slate-500 text-xs">{new Date(s.lastClickedAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

      </main>

      {/* ========================================================
          ADD NEW REPORT MODAL
         ======================================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden my-8">
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-[#F8FAFC]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A1938]">Add New Patient Report</h3>
                  <p className="text-[11px] text-slate-400">Upload PDF or Image report to database</p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-200/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              {addError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 rounded-xl">
                  {addError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Kumar"
                  value={addPatientName}
                  onChange={(e) => setAddPatientName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="e.g. 9876543210 (10 digits)"
                  value={addPhoneNumber}
                  onChange={(e) => setAddPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
                <p className="text-[11px] text-slate-400 mt-0.5">
                  The patient will use this exact mobile number to view their report.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Report Title / Test Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Complete Blood Count (CBC) or MRI Brain"
                  value={addReportTitle}
                  onChange={(e) => setAddReportTitle(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Report Date
                </label>
                <input
                  type="date"
                  value={addReportDate}
                  onChange={(e) => setAddReportDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Upload Report File * (PDF, JPG, PNG)</span>
                  <span className="text-[10px] font-normal text-slate-400">Max 15MB</span>
                </label>

                {addFile ? (
                  /* File Selected Preview State */
                  <div className="bg-[#F8FAFC] border-2 border-emerald-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all shadow-sm">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 text-[#1D64D8]">
                        {addFile.type.includes('pdf') || addFile.name.toLowerCase().endsWith('.pdf') ? (
                          <FileText className="w-6 h-6 text-rose-500" />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-[#1D64D8]" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-800 truncate" title={addFile.name}>
                            {addFile.name}
                          </p>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 shrink-0">
                            Selected
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {formatBytes(addFile.size)} • Ready to upload
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                      <button
                        type="button"
                        onClick={() => addFileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAddFile(null);
                          if (addFileInputRef.current) addFileInputRef.current.value = '';
                        }}
                        className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Dropzone State */
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingAdd(true);
                    }}
                    onDragEnter={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingAdd(true);
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingAdd(false);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingAdd(false);
                      const file = e.dataTransfer.files?.[0];
                      if (file) handleIncomingFile(file, 'add');
                    }}
                    onClick={() => addFileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
                      isDraggingAdd
                        ? 'border-[#1D64D8] bg-[#EBF5FE] ring-4 ring-[#1D64D8]/10 scale-[1.01]'
                        : 'border-slate-200 hover:border-[#1D64D8]/50 hover:bg-slate-50/80 bg-white'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform ${
                        isDraggingAdd ? 'bg-[#1D64D8] text-white scale-110' : 'bg-[#EBF5FE] text-[#1D64D8]'
                      }`}>
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-800">
                          {isDraggingAdd ? 'Drop your report file right here!' : 'Click or Drag & Drop report file here'}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          PDF, JPG, JPEG, PNG up to 15MB
                        </p>
                      </div>

                      {/* Instructions for Ctrl+V and Click */}
                      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-1 pt-1.5 border-t border-slate-100">
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                          <kbd className="font-mono bg-white px-1 rounded border border-slate-300 text-slate-700">Ctrl</kbd> + <kbd className="font-mono bg-white px-1 rounded border border-slate-300 text-slate-700">V</kbd> to paste
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Drag file from folder or paste screenshot
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <input
                  ref={addFileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,image/jpeg,image/png,application/pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleIncomingFile(file, 'add');
                  }}
                  className="hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addLoading}
                  className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/10 disabled:opacity-60"
                >
                  {addLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Uploading Report...
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-3.5 h-3.5" /> Upload Report
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          EDIT REPORT MODAL
         ======================================================== */}
      {editingReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden my-8">
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-[#F8FAFC]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A1938]">Edit Report Details</h3>
                  <p className="text-[11px] text-slate-400">Update patient, title or replace file</p>
                </div>
              </div>
              <button
                onClick={() => setEditingReport(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-200/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="p-6 space-y-4">
              {editError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 rounded-xl">
                  {editError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Name *
                </label>
                <input
                  type="text"
                  required
                  value={editPatientName}
                  onChange={(e) => setEditPatientName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={editPhoneNumber}
                  onChange={(e) => setEditPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Report Title / Test Name *
                </label>
                <input
                  type="text"
                  required
                  value={editReportTitle}
                  onChange={(e) => setEditReportTitle(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Report Date
                </label>
                <input
                  type="date"
                  value={editReportDate}
                  onChange={(e) => setEditReportDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Replace File (Optional)</span>
                  <span className="text-[10px] font-normal text-slate-400">PDF, JPG, PNG (Max 15MB)</span>
                </label>

                {/* Show Current File pill if no replacement chosen */}
                {!editFile && (
                  <div className="mb-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-600 truncate">
                      <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">
                        Current file: <strong className="text-slate-800">{editingReport.fileName || editingReport.fileUrl.split('/').pop()}</strong>
                      </span>
                    </div>
                    {editingReport.fileSize && (
                      <span className="text-[11px] text-slate-400 shrink-0 font-medium">
                        {formatBytes(editingReport.fileSize)}
                      </span>
                    )}
                  </div>
                )}

                {editFile ? (
                  /* Replacement file preview */
                  <div className="bg-[#F8FAFC] border-2 border-emerald-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all shadow-sm">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-600">
                        {editFile.type.includes('pdf') || editFile.name.toLowerCase().endsWith('.pdf') ? (
                          <FileText className="w-6 h-6 text-rose-500" />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-emerald-600" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-800 truncate" title={editFile.name}>
                            {editFile.name}
                          </p>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 shrink-0">
                            New Replacement
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {formatBytes(editFile.size)} • Will replace existing report file
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                      <button
                        type="button"
                        onClick={() => editFileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setEditFile(null);
                          if (editFileInputRef.current) editFileInputRef.current.value = '';
                        }}
                        className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-600 text-xs font-semibold hover:bg-rose-100 transition-colors"
                      >
                        Keep Original
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Dropzone State for Edit */
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingEdit(true);
                    }}
                    onDragEnter={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingEdit(true);
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingEdit(false);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDraggingEdit(false);
                      const file = e.dataTransfer.files?.[0];
                      if (file) handleIncomingFile(file, 'edit');
                    }}
                    onClick={() => editFileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all duration-200 ${
                      isDraggingEdit
                        ? 'border-[#1D64D8] bg-[#EBF5FE] ring-4 ring-[#1D64D8]/10 scale-[1.01]'
                        : 'border-slate-200 hover:border-[#1D64D8]/50 hover:bg-slate-50/80 bg-white'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform ${
                        isDraggingEdit ? 'bg-[#1D64D8] text-white scale-110' : 'bg-[#EBF5FE] text-[#1D64D8]'
                      }`}>
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-700">
                          {isDraggingEdit ? 'Drop new file here to replace' : 'Click or Drag & Drop to replace file'}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Press <kbd className="font-mono bg-slate-100 px-1 rounded border border-slate-300 text-slate-700 text-[10px]">Ctrl+V</kbd> to paste from clipboard
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <input
                  ref={editFileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,image/jpeg,image/png,application/pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleIncomingFile(file, 'edit');
                  }}
                  className="hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setEditingReport(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={editLoading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/10 disabled:opacity-60"
                >
                  {editLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving Changes...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          DELETE CONFIRMATION MODAL
         ======================================================== */}
      {deletingReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden p-6 text-center">
            <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-rose-100">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-[#0A1938] mb-1.5">
              Confirm Report Deletion
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
              Are you sure you want to delete this report?
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3.5 mb-5 text-left text-xs text-slate-700 space-y-1">
              <div><strong>Patient:</strong> {deletingReport.patientName}</div>
              <div><strong>Phone:</strong> {deletingReport.phoneNumber || deletingReport.patientId}</div>
              <div><strong>Test:</strong> {deletingReport.reportTitle || deletingReport.testName}</div>
            </div>

            <p className="text-[11px] text-rose-600 mb-6 font-medium">
              This action will permanently delete both the database record and the uploaded file from storage.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setDeletingReport(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmDelete}
                disabled={deleteLoading}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-rose-500/10 disabled:opacity-60"
              >
                {deleteLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Deleting...
                  </>
                ) : (
                  'Yes, Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          VIEW REPORT PREVIEW MODAL
         ======================================================== */}
      {viewingReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-[#F8FAFC]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center shrink-0">
                  {isImage(viewingReport) ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0A1938]">
                    {viewingReport.reportTitle || viewingReport.testName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {viewingReport.patientName} • {viewingReport.phoneNumber || viewingReport.patientId} •{' '}
                    {formatDateDisplay(viewingReport.reportDate || viewingReport.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`/api/reports/${viewingReport._id}/file?download=1`}
                  download
                  className="inline-flex items-center gap-1.5 bg-[#1D64D8] hover:bg-[#1554B8] text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button
                  onClick={() => setViewingReport(null)}
                  className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-200/60"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewer Body */}
            <div className="flex-1 overflow-auto p-4 bg-slate-100 flex items-center justify-center min-h-[350px]">
              {isImage(viewingReport) ? (
                <img
                  src={`/api/reports/${viewingReport._id}/file`}
                  alt={viewingReport.reportTitle}
                  className="max-h-[70vh] w-auto mx-auto object-contain rounded-xl shadow border border-white"
                />
              ) : (
                <div className="w-full h-[65vh] rounded-xl overflow-hidden bg-white shadow border border-slate-200">
                  <iframe
                    src={`/api/reports/${viewingReport._id}/file#toolbar=1`}
                    title="PDF Report Viewer"
                    className="w-full h-full border-none"
                  />
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-white flex justify-between items-center">
              <a
                href={`/api/reports/${viewingReport._id}/file`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1D64D8] hover:underline flex items-center gap-1 font-semibold"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open in Full Browser Tab
              </a>
              <button
                onClick={() => setViewingReport(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          BOOKING DETAILS MODAL
         ======================================================== */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
              <h3 className="text-lg font-bold text-[#0A1938]">Appointment Details</h3>
              <button onClick={() => setSelectedBooking(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-600">
              <div><strong>Booking ID:</strong> {selectedBooking.bookingId}</div>
              <div><strong>Patient Name:</strong> {selectedBooking.patientName}</div>
              <div><strong>Mobile:</strong> {selectedBooking.mobileNumber}</div>
              <div><strong>Collection Type:</strong> {selectedBooking.collectionType}</div>
              {selectedBooking.address && <div><strong>Address:</strong> {selectedBooking.address}</div>}
              <div><strong>Preferred Date:</strong> {selectedBooking.preferredDate || 'N/A'}</div>
              <div><strong>Preferred Time:</strong> {selectedBooking.preferredTime || 'N/A'}</div>
              <div><strong>Tests:</strong> {selectedBooking.tests?.join(', ') || 'N/A'}</div>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedBooking(null)}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

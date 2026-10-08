"use client";

import { useState } from 'react';
import { 
  Search, 
  FileText, 
  Download, 
  Loader2, 
  Calendar, 
  Eye, 
  X, 
  PhoneCall, 
  AlertCircle,
  FileCheck2,
  ExternalLink,
  ShieldCheck,
  ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DiagnosticReport {
  _id: string;
  patientName: string;
  phoneNumber: string;
  reportTitle: string;
  testName?: string;
  reportDate: string;
  fileUrl: string;
  fileType: string;
  fileName?: string;
  createdAt: string;
}

export default function DownloadReportPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [reports, setReports] = useState<DiagnosticReport[]>([]);
  const [patientName, setPatientName] = useState('');
  const [error, setError] = useState('');
  const [viewingReport, setViewingReport] = useState<DiagnosticReport | null>(null);

  // Validate Indian 10-digit phone
  const isValidPhone = (num: string) => {
    const clean = num.replace(/\D/g, '');
    return clean.length === 10 && /^[6-9]\d{9}$/.test(clean);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = phoneNumber.replace(/\D/g, '');

    if (!cleanDigits) {
      setError('Please enter your 10-digit registered mobile number.');
      return;
    }

    if (!isValidPhone(cleanDigits)) {
      setError('Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
      return;
    }

    setLoading(true);
    setError('');
    setSearched(true);
    setReports([]);
    setPatientName('');

    try {
      const res = await fetch(`/api/reports/search?phone=${encodeURIComponent(cleanDigits)}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setReports(data.reports || []);
        setPatientName(data.patientName || (data.reports?.[0]?.patientName ?? ''));
      } else {
        setError(data.error || 'Failed to search for reports. Please check the number and try again.');
      }
    } catch (err) {
      setError('A network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recent';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const isImageFile = (report: DiagnosticReport) => {
    const type = (report.fileType || '').toLowerCase();
    const url = (report.fileUrl || '').toLowerCase();
    return (
      type === 'jpg' ||
      type === 'jpeg' ||
      type === 'png' ||
      url.endsWith('.jpg') ||
      url.endsWith('.jpeg') ||
      url.endsWith('.png')
    );
  };

  const handleDownload = (report: DiagnosticReport) => {
    const downloadUrl = `/api/reports/${report._id}/file?download=1`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', report.fileName || `${report.reportTitle || 'report'}.${report.fileType || 'pdf'}`);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-16">
      {/* Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>PATIENT PORTAL</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>VERIFIED REPORTS</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Access Your </span>
            <span className="text-[#1D64D8]">Diagnostic Reports</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed mt-3">
            Enter your registered mobile number to view and download your reports. Available 24/7.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Search Card */}
        <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(10,25,56,0.04)] border border-slate-100 p-6 sm:p-8 mb-8">
          <div className="mb-5 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-[#0A1938] tracking-tight">
              Download Your Reports
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Your reports, available anytime. Enter your registered mobile number below:
            </p>
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-slate-400 font-semibold text-xs sm:text-sm mr-2 border-r border-slate-200 pr-2">
                    +91
                  </span>
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => {
                    const clean = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setPhoneNumber(clean);
                    if (error) setError('');
                  }}
                  className="block w-full pl-16 pr-4 py-3 sm:py-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1D64D8]/10 focus:border-[#1D64D8] transition-all text-slate-900 bg-[#F8FAFC] focus:bg-white outline-none text-sm font-medium tracking-wide"
                  placeholder="Enter 10-digit mobile number"
                  autoComplete="tel"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-bold py-3 sm:py-3.5 px-7 rounded-2xl transition-all shadow-md shadow-blue-500/10 flex justify-center items-center text-xs sm:text-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shrink-0"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" /> Search Reports
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 px-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Verified &amp; confidential
              </span>
              <span>Need help? Call: <strong>9813503420</strong></span>
            </div>
          </form>
        </div>

        {/* Search Results */}
        {searched && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {reports.length === 0 ? (
              <div className="bg-white border border-slate-100 p-8 sm:p-12 rounded-3xl text-center shadow-[0_4px_24px_rgba(10,25,56,0.04)]">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1938] mb-1.5">
                  No Reports Found
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
                  No test reports were found for mobile number <strong>+91 {phoneNumber}</strong>.
                  Please confirm the phone number given during registration at the centre.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:9813503420"
                    className="inline-flex items-center gap-2 bg-[#EBF5FE] text-[#1D64D8] font-semibold text-xs py-2.5 px-5 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Call Reception: 9813503420
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* Patient Summary Header */}
                <div className="bg-[#F0F7FF] border border-sky-100 rounded-2xl p-4 sm:p-5 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#1D64D8] mb-0.5">
                      Reports Found
                    </div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#0A1938]">
                      Reports for {patientName || 'Patient'}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Mobile: +91 {phoneNumber}
                    </p>
                  </div>
                  <div className="self-start sm:self-center">
                    <span className="inline-flex items-center gap-1.5 bg-white border border-sky-200 text-[#1D64D8] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#1D64D8]" />
                      {reports.length} {reports.length === 1 ? 'Report' : 'Reports'} Available
                    </span>
                  </div>
                </div>

                {/* Reports List */}
                <div className="space-y-4">
                  {reports.map((report) => {
                    const isImg = isImageFile(report);
                    const title = report.reportTitle || report.testName || 'Diagnostic Report';
                    const dateFormatted = formatDate(report.reportDate || report.createdAt);

                    return (
                      <div
                        key={report._id}
                        className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center shrink-0 border border-sky-100">
                            {isImg ? (
                              <ImageIcon className="w-6 h-6" />
                            ) : (
                              <FileText className="w-6 h-6" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                {isImg ? 'IMAGE' : 'PDF'}
                              </span>
                              <span className="text-xs text-slate-400 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {dateFormatted}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-[#0A1938] leading-tight">
                              {title}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Patient: <strong className="text-slate-700 font-medium">{report.patientName}</strong>
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                          <button
                            onClick={() => setViewingReport(report)}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#EBF5FE] hover:bg-blue-100 text-[#1D64D8] font-bold text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" /> View Report
                          </button>

                          <button
                            onClick={() => handleDownload(report)}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#1D64D8] hover:bg-[#1554B8] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors shadow-sm cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" /> Download
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* View Report Modal (PDF / Image) */}
      <AnimatePresence>
        {viewingReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-[#F8FAFC]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center shrink-0">
                    {isImageFile(viewingReport) ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0A1938] leading-tight">
                      {viewingReport.reportTitle || viewingReport.testName || 'Diagnostic Report'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {viewingReport.patientName} • {formatDate(viewingReport.reportDate || viewingReport.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownload(viewingReport)}
                    className="hidden sm:inline-flex items-center gap-1.5 bg-[#1D64D8] hover:bg-[#1554B8] text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Report
                  </button>
                  <button
                    onClick={() => setViewingReport(null)}
                    className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Viewer */}
              <div className="flex-1 overflow-auto p-4 bg-slate-100 flex items-center justify-center min-h-[350px]">
                {isImageFile(viewingReport) ? (
                  <div className="max-w-full max-h-full p-2">
                    <img
                      src={`/api/reports/${viewingReport._id}/file`}
                      alt={viewingReport.reportTitle}
                      className="max-h-[70vh] w-auto mx-auto object-contain rounded-xl shadow-md border border-white"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[65vh] rounded-xl overflow-hidden bg-white shadow border border-slate-200 relative">
                    <iframe
                      src={`/api/reports/${viewingReport._id}/file#toolbar=1`}
                      title="Medical Report PDF Preview"
                      className="w-full h-full border-none"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`/api/reports/${viewingReport._id}/file`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1D64D8] hover:underline flex items-center gap-1 font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open in Full Browser Tab
                </a>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleDownload(viewingReport)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#1D64D8] hover:bg-[#1554B8] text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-colors shadow-sm cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Report
                  </button>
                  <button
                    onClick={() => setViewingReport(null)}
                    className="flex-1 sm:flex-initial bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 px-5 rounded-xl transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

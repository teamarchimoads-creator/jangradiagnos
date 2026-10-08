import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, 'Please provide the patient name'],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Please provide the patient phone number'],
      trim: true,
      index: true,
    },
    // Maintained for backward compatibility
    patientId: {
      type: String,
      trim: true,
      index: true,
    },
    reportTitle: {
      type: String,
      required: [true, 'Please provide the report title / test name'],
      trim: true,
    },
    // Maintained for backward compatibility
    testName: {
      type: String,
      trim: true,
    },
    reportDate: {
      type: Date,
      default: Date.now,
    },
    fileUrl: {
      type: String,
      required: [true, 'Please provide the file URL'],
    },
    fileType: {
      type: String,
      default: 'pdf',
      trim: true,
    },
    fileName: {
      type: String,
      trim: true,
    },
    fileSize: {
      type: Number,
    },
    publicId: {
      type: String,
    },
    resourceType: {
      type: String,
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Ensure index on phoneNumber for fast query performance
ReportSchema.index({ phoneNumber: 1, reportDate: -1 });

// Ensure synchronization between phoneNumber/patientId and reportTitle/testName
ReportSchema.pre('save', function (this: any) {
  if (this.phoneNumber && !this.patientId) {
    this.patientId = this.phoneNumber;
  } else if (this.patientId && !this.phoneNumber) {
    this.phoneNumber = this.patientId;
  }

  if (this.reportTitle && !this.testName) {
    this.testName = this.reportTitle;
  } else if (this.testName && !this.reportTitle) {
    this.reportTitle = this.testName;
  }
});

export default mongoose.models.Report || mongoose.model('Report', ReportSchema);

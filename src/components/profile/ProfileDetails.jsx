import React from "react";

export default function ProfileDetails({ profile }) {
  return (
    <div className="bg-white shadow-md rounded-lg border mx-auto max-w-2xl overflow-hidden">
      {/* Header Section */}
      <div className="bg-gray-100 px-4 sm:px-6 py-4 rounded-t-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          User Profile
        </h3>
      </div>

      {/* Profile Details Section */}
      <div className="border-t border-gray-200 px-4 sm:px-6 py-4">
        <dl className="divide-y divide-gray-200">
          {/* Full Name */}
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Full Name</dt>
            <dd className="text-sm text-gray-900 sm:col-span-2">
              {profile?.fullName || "Not provided"}
            </dd>
          </div>

          {/* Email Address */}
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Email Address</dt>
            <dd className="text-sm text-gray-900 sm:col-span-2">
              {profile?.email || "Not provided"}
            </dd>
          </div>

          {/* Phone Number */}
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Phone Number</dt>
            <dd className="text-sm text-gray-900 sm:col-span-2">
              {profile?.phone || "Not provided"}
            </dd>
          </div>

          {/* Address */}
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Address</dt>
            <dd className="text-sm text-gray-900 sm:col-span-2">
              {profile?.address || "Not provided"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
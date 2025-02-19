import React from "react";

export default function ProfileDetails({ profile }) {
  return (
    <div className="bg-white shadow-md rounded-lg border max-w-xl mx-auto">
      <div className="bg-gray-100 px-6 py-4 rounded-t-lg">
        <h3 className="text-xl font-semibold text-gray-800">User Profile</h3>
      </div>
      <div className="border-t border-gray-200 px-6 py-4">
        <dl className="divide-y divide-gray-200">
          <div className="py-3 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Full Name</dt>
            <dd className="text-sm text-gray-900 col-span-2">
              {profile?.fullName}
            </dd>
          </div>
          <div className="py-3 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Email Address</dt>
            <dd className="text-sm text-gray-900 col-span-2">
              {profile?.email}
            </dd>
          </div>
          <div className="py-3 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Phone Number</dt>
            <dd className="text-sm text-gray-900 col-span-2">
              {profile?.phone || "No Phone Number Available"}
            </dd>
          </div>
          <div className="py-3 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-gray-600">Address</dt>
            <dd className="text-sm text-gray-900 col-span-2">
              {profile?.address || "No Address Available"}
            </dd>
          </div>
          <div className="py-4 px-4 bg-blue-100 rounded-b-lg">
            <dt className="text-md font-semibold text-blue-900">
              Available Credits
            </dt>
            <dd className="text-lg font-bold text-gray-900">
              {profile?.credits || "0.00"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

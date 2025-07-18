"use client";
import { useState } from "react";
import { User, Settings, Heart, BookOpen, Mail, Phone, MapPin, Edit, Save, X } from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Nandan Singh",
    email: "thesinghcelebrationguesthouse@gmail.com",
    phone: "+91 79799 62614",
    address: "254, Patliputra Colony, Patna, Bihar 800013",
    bio: "Premier wedding florist in Patna with 15+ years of experience. Specializing in bridal bouquets, wedding decoration, and floral artistry.",
    preferences: {
      newsletter: true,
      notifications: true,
      language: "English"
    }
  });

  const [tempData, setTempData] = useState(userData);

  const handleSave = () => {
    setUserData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(userData);
    setIsEditing(false);
  };

  const stats = [
    { label: "Articles Published", value: "500+", icon: BookOpen },
    { label: "Events Completed", value: "1000+", icon: Heart },
    { label: "Years Experience", value: "15+", icon: User },
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-gray-900">Profile</h1>
                <p className="text-gray-600">Manage your account and preferences</p>
              </div>
            </div>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <stat.icon className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.name}
                      onChange={(e) => setTempData({...tempData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 rounded-lg">{userData.name}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={tempData.email}
                      onChange={(e) => setTempData({...tempData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 rounded-lg flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {userData.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={tempData.phone}
                      onChange={(e) => setTempData({...tempData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 rounded-lg flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      {userData.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  {isEditing ? (
                    <textarea
                      value={tempData.address}
                      onChange={(e) => setTempData({...tempData, address: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 rounded-lg flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {userData.address}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={tempData.bio}
                      onChange={(e) => setTempData({...tempData, bio: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 rounded-lg">{userData.bio}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Preferences
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Newsletter</div>
                    <div className="text-sm text-gray-600">Receive updates and tips</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isEditing ? tempData.preferences.newsletter : userData.preferences.newsletter}
                      onChange={(e) => setTempData({
                        ...tempData,
                        preferences: {...tempData.preferences, newsletter: e.target.checked}
                      })}
                      disabled={!isEditing}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Notifications</div>
                    <div className="text-sm text-gray-600">Get notified about new content</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isEditing ? tempData.preferences.notifications : userData.preferences.notifications}
                      onChange={(e) => setTempData({
                        ...tempData,
                        preferences: {...tempData.preferences, notifications: e.target.checked}
                      })}
                      disabled={!isEditing}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                  {isEditing ? (
                    <select
                      value={tempData.preferences.language}
                      onChange={(e) => setTempData({
                        ...tempData,
                        preferences: {...tempData.preferences, language: e.target.value}
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Bhojpuri">Bhojpuri</option>
                    </select>
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 rounded-lg">{userData.preferences.language}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
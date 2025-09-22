'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const leaderboardData = [
  { rank: 1, team: 'TechCorp Tigers', wins: 8, matches: 10, month: 'December', winRate: 80 },
  { rank: 2, team: 'Innovation Lions', wins: 7, matches: 10, month: 'December', winRate: 70 },
  { rank: 3, team: 'Digital Hawks', wins: 6, matches: 10, month: 'December', winRate: 60 },
  { rank: 4, team: 'Alpha Wolves', wins: 5, matches: 10, month: 'December', winRate: 50 },
  { rank: 5, team: 'Future Falcons', wins: 4, matches: 10, month: 'December', winRate: 40 },
  { rank: 6, team: 'Smart Panthers', wins: 3, matches: 10, month: 'December', winRate: 30 },
  // November data
  { rank: 1, team: 'Digital Hawks', wins: 9, matches: 10, month: 'November', winRate: 90 },
  { rank: 2, team: 'TechCorp Tigers', wins: 7, matches: 10, month: 'November', winRate: 70 },
  { rank: 3, team: 'Alpha Wolves', wins: 6, matches: 10, month: 'November', winRate: 60 },
  { rank: 4, team: 'Innovation Lions', wins: 5, matches: 10, month: 'November', winRate: 50 },
  { rank: 5, team: 'Future Falcons', wins: 4, matches: 10, month: 'November', winRate: 40 },
  { rank: 6, team: 'Smart Panthers', wins: 2, matches: 10, month: 'November', winRate: 20 },
];

export default function Leaderboard() {
  const [selectedMonth, setSelectedMonth] = useState('December');
  
  const filteredData = leaderboardData
    .filter(team => team.month === selectedMonth)
    .sort((a, b) => a.rank - b.rank);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-100 to-yellow-50 border-yellow-200';
      case 2:
        return 'bg-gradient-to-r from-gray-100 to-gray-50 border-gray-200';
      case 3:
        return 'bg-gradient-to-r from-amber-100 to-amber-50 border-amber-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-red-500">Leaderboard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track team performance, celebrate victories, and maintain the competitive spirit that drives excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Tournament Results</h2>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Filter by Month:</label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="December">December 2025</SelectItem>
                  <SelectItem value="November">November 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Leaderboard Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Team Name</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Wins</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Matches</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((team, index) => (
                    <motion.tr
                      key={`${team.team}-${team.month}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${getRankBg(team.rank)}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center w-12">
                          {getRankIcon(team.rank)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-red-600 font-bold text-sm">
                              {team.team.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{team.team}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-green-600">{team.wins}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-semibold text-gray-700">{team.matches}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${team.winRate}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-red-600 h-2 rounded-full"
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{team.winRate}%</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Trophy className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{filteredData.length}</h3>
              <p className="text-gray-600">Active Teams</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Medal className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {filteredData.reduce((total, team) => total + team.matches, 0)}
              </h3>
              <p className="text-gray-600">Total Matches</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Award className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {filteredData[0]?.winRate}%
              </h3>
              <p className="text-gray-600">Top Win Rate</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
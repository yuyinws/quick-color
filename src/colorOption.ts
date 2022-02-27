export interface ColorOption {
  hex: string
  description: string
  label: string
}

let garys = [
  '#F9FAFB',
  '#F3F4F6',
  '#E5E7EB',
  '#D1D5DB',
  '#9CA3AF',
  '#6B7280',
  '#4B5563',
  '#374151',
  '#1F2937',
  '#111827',
]

let reds = [
  '#FEF2F2',
  '#FEE2E2',
  '#FECACA',
  '#FCA5A5',
  '#F87171',
  '#EF4444',
  '#DC2626',
  '#B91C1C',
  '#991B1B',
  '#7F1D1D',
]

let yellows = [
  '#FFFBEB',
  '#FEF3C7',
  '#FDE68A',
  '#FCD34D',
  '#FBBF24',
  '#F59E0B',
  '#D97706',
  '#B45309',
  '#92400E',
  '#78350F',
]

let greens = [
  '#F0FDF4',
  '#DCFCE7',
  '#BBF7D0',
  '#86EFAC',
  '#4ADE80',
  '#22C55E',
  '#16A34A',
  '#15803D',
  '#166534',
  '#14532D',
]

let blues = [
  '#EFF6FF',
  '#DBEAFE',
  '#BFDBFE',
  '#93C5FD',
  '#60A5FA',
  '#3B82F6',
  '#2563EB',
  '#1D4ED8',
  '#1E40AF',
  '#1E40AF',
]

let purples = [
  '#FAF5FF',
  '#F3E8FF',
  '#E9D5FF',
  '#D8B4FE',
  '#C084FC',
  '#A855F7',
  '#9333EA',
  '#7E22CE',
  '#6B21A8',
  '#581C87',
]

let pinks = [
  '#FDF2F8',
  '#FCE7F3',
  '#FBCFE8',
  '#F9A8D4',
  '#F472B6',
  '#EC4899',
  '#DB2777',
  '#BE185D',
  '#9D174D',
  '#831843',
]

const grayOptions: ColorOption[] = garys.map((hex, index) => ({
  hex: hex,
  description: hex,
  label: `gray-${index ? index * 100 : 50}`,
}))

const redOptions: ColorOption[] = reds.map((hex, index) => ({
  hex: hex,
  description: hex,
  label: `red-${index ? index * 100 : 50}`,
}))

const yellowOptions: ColorOption[] = yellows.map((hex, index) => ({
  hex: hex,
  description: hex,
  label: `yellow-${index ? index * 100 : 50}`,
}))

const greenOptions: ColorOption[] = greens.map((hex, index) => ({
  hex: hex,
  description: hex,
  label: `green-${index ? index * 100 : 50}`,
}))

const blueOptions: ColorOption[] = blues.map((hex, index) => ({
  hex: hex,
  description: hex,
  label: `blue-${index ? index * 100 : 50}`,
}))

const purpleOptions: ColorOption[] = purples.map((hex, index) => ({
  hex: hex,
  description: hex,
  label: `purple-${index ? index * 100 : 50}`,
}))

const pinkOptions: ColorOption[] = pinks.map((hex, index) => ({
  hex: hex,
  description: hex,
  label: `pink-${index ? index * 100 : 50}`,
}))

export const colorOptions: ColorOption[] = [
  ...grayOptions,
  ...redOptions,
  ...yellowOptions,
  ...greenOptions,
  ...blueOptions,
  ...purpleOptions,
  ...pinkOptions,
]

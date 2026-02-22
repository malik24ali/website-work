export const colors = {
  // Primary colors
  primary: {
    black: '#000000',
    red: '#DC2626',
    darkRed: '#991B1B',
    lightRed: '#FEE2E2',
    white: '#FFFFFF',
  },
  
  // Neutral colors
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Extended palette
  background: '#FFFFFF',
  backgroundAlt: '#F9FAFB',
  backgroundDark: '#111827',
  
  // Text colors
  text: {
    primary: '#000000',
    secondary: '#4B5563',
    light: '#6B7280',
    white: '#FFFFFF',
  },
  
  // Button colors
  button: {
    primary: '#DC2626',
    primaryHover: '#991B1B',
    primaryLight: '#FEE2E2',
  },
  
  // Border colors
  border: {
    light: '#E5E7EB',
    dark: '#374151',
  },
};

// Helper function to use colors in Tailwind
export const getColorClass = (colorValue: string) => {
  const colorMap: { [key: string]: string } = {
    '#DC2626': 'from-red-600 to-red-700',
    '#991B1B': 'bg-red-900',
    '#FEE2E2': 'bg-red-50',
    '#000000': 'text-black',
    '#FFFFFF': 'text-white',
  };
  return colorMap[colorValue] || colorValue;
};

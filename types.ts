@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Cairo", ui-sans-serif, system-ui, sans-serif;
}

.dark body {
  background-color: #0f172a;
  color: #f8fafc;
}

.dark .bg-white {
  background-color: #1e293b !important;
  border-color: #334155 !important;
  color: #f8fafc !important;
}

.dark .text-gray-900, .dark .text-sky-900 {
  color: #f8fafc !important;
}

.dark .text-gray-700, .dark .text-gray-600 {
  color: #cbd5e1 !important;
}

.dark .text-gray-500, .dark .text-gray-400 {
  color: #94a3b8 !important;
}

.dark .bg-gray-50, .dark .bg-sky-50 {
  background-color: #0f172a !important;
  color: #cbd5e1 !important;
  border-color: #1e293b !important;
}

.dark input, .dark select, .dark textarea {
  background-color: #0f172a !important;
  color: #f8fafc !important;
  border-color: #334155 !important;
}

.dark nav {
  background-color: #1e293b !important;
  border-color: #334155 !important;
}

.dark .shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4) !important;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

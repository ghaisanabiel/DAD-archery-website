import { waLink } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
}

export default function WhatsAppButton({
  message = 'Halo DAD Archery, saya ingin bertanya lebih lanjut.',
  label = 'Chat with DAD',
}: WhatsAppButtonProps) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-ink px-4 py-3 rounded-full shadow-lg shadow-black/40 hover:pr-5 transition-all group"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.1.11-1.78-.11-.41-.13-.93-.3-1.6-.6-2.81-1.21-4.64-4.05-4.78-4.24-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-mono uppercase tracking-widest2">
        {label}
      </span>
    </a>
  );
}

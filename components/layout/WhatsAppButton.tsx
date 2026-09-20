import { whatsappUrl } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Hello Vision Saudi, I'd like to discuss setting up in Saudi Arabia.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vision Saudi on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 hidden h-14 w-14 sm:flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.004 3C9.378 3 4 8.373 4 14.997c0 2.117.553 4.186 1.604 6.009L4 29l8.2-1.573a11.95 11.95 0 0 0 3.8.617h.004C22.63 28.044 28 22.671 28 16.047 28 12.838 26.752 9.82 24.485 7.55A11.9 11.9 0 0 0 16.004 3Zm0 21.843h-.003a9.9 9.9 0 0 1-5.04-1.38l-.36-.215-4.866.935.95-4.73-.236-.376a9.83 9.83 0 0 1-1.51-5.24c0-5.46 4.447-9.9 9.915-9.9a9.84 9.84 0 0 1 7.007 2.905 9.83 9.83 0 0 1 2.9 7.005c-.002 5.46-4.449 9.996-9.757 9.996Zm5.435-7.414c-.298-.149-1.763-.87-2.036-.97-.273-.1-.472-.149-.67.15-.199.297-.77.968-.944 1.167-.174.198-.348.223-.646.074-.298-.149-1.258-.463-2.396-1.477-.886-.79-1.484-1.765-1.658-2.063-.174-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.199-.298.298-.497.1-.198.05-.372-.025-.52-.074-.149-.67-1.614-.918-2.21-.242-.58-.487-.502-.67-.511l-.571-.01c-.199 0-.522.074-.795.372-.273.297-1.043 1.018-1.043 2.483 0 1.464 1.068 2.88 1.217 3.078.149.199 2.1 3.2 5.087 4.487.711.306 1.266.49 1.699.627.714.227 1.364.195 1.878.118.573-.085 1.763-.72 2.012-1.416.248-.695.248-1.29.174-1.415-.075-.124-.273-.198-.571-.347Z" />
      </svg>
    </a>
  );
}

import Link from 'next/link';
import Image from 'next/image';

interface Leader {
  id: string;
  name: string;
  role: string;
  shortBlurb: string;
  imageUrl: string;
  linkedin: string;
  xUrl: string;
}

export default function LeadershipCard({ leader }: { leader: Leader }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col p-6 transition-all duration-300 hover:shadow-xl w-full max-w-sm mx-auto h-full">
      
{/* Replaced Placeholder with Next.js Image */}
      <div className="relative w-32 h-32 mx-auto rounded-full border-4 border-gray-50 overflow-hidden shadow-sm mb-6 bg-gray-100">
        <Image 
          src={leader.imageUrl} 
          alt={`${leader.name} profile picture`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 128px, 128px"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
        <p className="text-sm font-semibold text-blue-600 mt-1 mb-4">{leader.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{leader.shortBlurb}</p>
      </div>

      {/* Actions (Socials + View Profile) */}
      <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
        
        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href={leader.xUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="X (Twitter)">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        <Link 
          href={`/leadership#${leader.id}`}
          className="w-full text-center py-2 px-4 bg-gray-50 hover:bg-gray-100 text-sm font-semibold text-gray-800 rounded-lg transition-colors border border-gray-200"
        >
          View Full Profile
        </Link>
      </div>
    </div>
  );
}
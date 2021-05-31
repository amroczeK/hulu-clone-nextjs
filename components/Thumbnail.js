import { forwardRef } from 'react';
import Image from 'next/image';
import { ThumbUpIcon, StarIcon } from '@heroicons/react/outline';

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  return (
    <div
      ref={ref}
      className='group cursor-pointer p-2 transition ease-in transform sm:hover:scale-105 hover:z-50'
    >
      <Image
        layout='responsive'
        src={`${BASE_URL}${result.backdrop_path}`}
        height={720}
        width={1280}
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {result.title || result.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {result?.media_type && `${result?.media_type.toUpperCase()} •`}{' '}
          {result?.release_date || result?.first_air_date} • <StarIcon className='h-5 mx-2' />
          {result?.vote_average} • <ThumbUpIcon className='h-5 mx-2' />
          {result?.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;

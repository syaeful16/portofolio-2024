import React from 'react'
//images
import people1 from '../assets/images/people/people1.jpg'
import people2 from '../assets/images/people/people2.jpg'
import people3 from '../assets/images/people/people3.jpg'


function Teams() {
    const photos = [
        {
            'alt': 'photo1',
            'img': people1
        },
        {
            'alt': 'photo2',
            'img': people2
        },
        {
            'alt': 'photo3',
            'img': people3
        }
    ]

    return (
        <div className='flex'>
            {photos.map((photo, i) => {
                return (
                    <div key={i} className="teams-photo w-7 h-7 md:w-8 md:h-8 xl:w-10 xl:h-10 bg-red-500 rounded-full border-2 md:border-[3px] xl:border-4 border-primary">
                        <img src={photo.img} alt="photo" className='w-full h-full object-cover rounded-full'/>
                    </div>
                )
            })}
        {/* <div className="w-10 h-10 bg-whites rounded-full border-4 border-primary">
            <img src={people1} alt="people1" className='w-full h-full object-cover rounded-full'/>
        </div>
        <div className="w-10 h-10 bg-red-500 rounded-full border-4 border-primary -ml-[1rem]">

        </div>
        <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-primary -ml-[1rem]">

        </div> */}
        </div>
    )
}

export default Teams
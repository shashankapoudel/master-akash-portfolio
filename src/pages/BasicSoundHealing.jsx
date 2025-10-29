import React from 'react'

const BasicSoundHealing = () => {



    const courseDetails = [
        { detail: "Course Name", description: "Basic Sound Healing Certified Course (Levels 1-3)" },
        { detail: "Provider", description: "Natural Sound Healing International School (Thamel, Kathmandu) – registered and government-accredited since 2016." },
        { detail: "Provider", description: "Basic Sound Healing Certified Course (Levels 1-3)" },
        {
            detail: "Focus", description: "A teacher-training course combining traditional Himalayan sound-healing methods and scientific/therapeutic models."
        },
        { detail: "Duration", description: "2 Days (21 professional hours). Time: 10:00 AM - 8:30 PM daily." },
        { detail: "Tution Fee", description: "$7200 (Early Bird $6500, which includes a handmade Angel Bowl Set worth $3500)." },
        {
            detail: "What it is", description: "A teacher-training course and practical in the combination of traditional Himalayan sound-healing methods and scientific/therapeutic models. You will discover the reasons why sound heals, how to choose and maintain instruments, how to use sound to balance your chakra, cleanse your aura, relieve pain, do sound meditations with others, and how to teach sound to others. "
        },
    ]


    return (
        <div className='w-full flex items-center justify-center p-8'>

            <div className='text-[#11111] w-1/2'>

                <strong> The journey of sound healing:</strong>
                <hr />
                The application of sound in healing and balance has been in existence since ancient times. At that time, it was believed that certain sounds and vibrations could reconcile the body and mind. They applied beatings, singing, and breathing exercises such as Pranayama to restore emotional and physical problems naturally. These conventional approaches were aimed at inner rhythm and introspection. The same old practices have developed today. We now stick this old sound wisdom with the new scientific means and methods of therapy. This current style makes sound healing an effective means of finding peace, relieving stress, and reconnecting with oneself
                <br />
                <br />

                <strong> Basic Sound Healing Teacher Training:</strong>
                <hr />
                Our Basic Sound Healing Teacher Training is the fusion of ancient Himalayan traditions and modern science. The course is based on the spiritual tradition of Nepal, while also incorporating new, research-based techniques. This course will provide a good foundation for becoming a certified sound healer, as the government-approved Natural Sound Healing International School in Thamel, Kathmandu, offers it. You will get to know the practical skills in singing bowls, Pranayama (breathwork), and energy balancing. You will also know the effect of sound on the chakras, aura, and nervous system. This course will enable you to experience and teach the art and science of sound healing through a combination of ancient knowledge and science.

                <br />
                <br />

                <div>
                    <table className='min-w-full'>
                        <thead className=' text-gray-800'>
                            <tr>
                                <th className='border border-gray-400 text-left w-12 px-4 py-2'>Detail</th>
                                <th className='border border-gray-400 text-left w-24 px-4 py-2'>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courseDetails.map((item) => (
                                    <tr key={item.detail}>
                                        <td className='border border-gray-400 text-gray px-4 py-2 font-medium'>{item.detail}</td>
                                        <td className='border border-gray-400 text-gray px-4 py-2 font-medium'>{item.description}</td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>

                <br />
                <strong>What will you get :</strong><br />



                1. Learn practical singing-bowl technique (striking, rubbing, sustaining tones) and how to use multiple healing instruments.
                <br />
                2. Gain a clear, usable understanding of the 7 main chakras and how to cleanse/balance them with sound.<br />
                3. Run guided sound meditations and sound baths that promote deep relaxation and improved sleep.<br />
                4. Use sound safely and effectively for pain-relief, aura cleansing, and energy balancing (precautions and protocols included). <br />
                5. Hands-on practice: perform full therapy sequences (chakra cleansing, aura cleaning, head & sole therapy, singing-bowl massage).<br />
                6. Progress through Levels 1 to 2 to 3 to build from fundamentals to advanced teaching skills.<br />
                <br />

                <strong>Why choose our Basic sound healing teacher training?
                </strong><br />
                <br />
                <strong>1. Traditional +Scientific: </strong>The syllabus integrates Himalayan/monastic practices with modern explanations of brain waves, nervous system effects and safety protocols.<br />

                <strong>2. Accredited School:</strong> Natural Sound Healing International School is a registered, government-recognized training school (Nepal) with programs offered in Nepal and Hong Kong.<br />

                <strong>3. Experienced lineage:</strong> Course founders and instructors bring direct experience from Himalayan traditions and long-term practice with monks and sadhus  giving depth to the practical training.<br />

                <strong>4. Complete, ready-to-use protocols: </strong>You’ll learn full therapy flows (chakra cleansing routines, aura cleaning steps, sound-bath scripts) so you can run client sessions from day one.

                <br />
                <br />

                <strong>Details Course Content:</strong>

                <br />
                This is a practical, hands-on syllabus structured across Levels 1 to 3 to build from fundamentals to teaching skills.<br />
                <ul>
                    <li> <strong>1. Foundations of Sound Healing:</strong> Introduction & guided meditations; foundations of sound frequency therapy.</li>

                    <li><strong>2. Singing Bowl Mastery:</strong> History, types, how to choose, how to play (strike, rim-rubbing), cleaning, maintenance, and methods for purifying singing bowls.</li>

                    <li> <strong>3. Anatomy of Energy:</strong> In-depth study of the seven main chakras (location, function, frequencies, diagnosis, balancing).</li>

                    <li><strong>4. Yogic Science:</strong> Exploration of Nadis (energy channels), Pranayama (breathwork), and Nadi-Shuddhi (energy-channel cleansing).</li>

                    <li> <strong>5. Scientific Basis:</strong> Study of Brain Waves and the science of relaxation (Alpha, Theta, Delta, etc.), including understanding effects and contraindications.</li>

                    <li> <strong>6. Therapeutic Application:</strong> Aura theory and practical aura-cleansing therapies.</li>
                    Core Protocols: Head & Sole therapy, singing-bowl massage, and other body-focused techniques.

                    <li><strong>7. Full Session Sequencing: </strong>Sound meditations, sound baths, and 9 Therapeutic Techniques (using 1 to 7 bowls for integrative therapy).</li>
                </ul>
                <br />
                <strong>What to expect during training?</strong>

                <br />
                <strong>1. Hands-on practice</strong> with singing bowls and other instruments (you’ll practice playing, placement, and full-session flow).<br />

                <strong>2. Guided meditations</strong> and live demonstrations to feel the effects of different tones and sequences.<br />

                <strong>3. Safety and client assessment:</strong> when not to use certain vibrations (pregnancy, pacemakers, recent surgery, high blood pressure), and how to adapt sessions.<br />

                <strong>4. Practical clinic-style sessions:</strong> practise delivering therapies to peers with instructor feedback on technique and client care.
                <br />
                <br />

                <strong>Who should attend?</strong>
                <br />
                1. Beginners with a sincere interest in healing and vibration therapies (no prior musical skill required — basics are taught).<br />


                2. Yoga teachers, massage therapists, meditation guides, wellness practitioners looking to add sound healing to their offerings.<br />

                3.  Anyone seeking personal transformation (stress relief, better sleep, chakra work) who wants a structured, teachable protocol.<br />
                <br />

                <strong>Practical details & what to bring:</strong><br />
                -Comfortable clothing, a towel (small/medium/large), mattress/pillow for practice, sandalwood/incense if desired. A peaceful, dimly lit space is ideal for sessions.<br />

                -The course teaches how to choose and cleanse quality singing bowls; students who already own bowls will learn maintenance and selection criteria.<br />


            </div>



        </div>
    )
}

export default BasicSoundHealing
